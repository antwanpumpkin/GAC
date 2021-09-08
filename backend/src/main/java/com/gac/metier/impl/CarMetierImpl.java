package com.gac.metier.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.gac.api.modele.dto.v1.CarDTO;
import com.gac.core.mappeur.CarMappeur;
import com.gac.layer.dao.CarDao;
import com.gac.layer.dao.RepairDao;
import com.gac.layer.dao.UserDao;
import com.gac.metier.CarMetier;
import com.gac.modele.persistance.Car;
import com.gac.modele.persistance.Users;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarMetierImpl implements CarMetier {

    Logger log = LoggerFactory.getLogger(CarMetierImpl.class);

	@Autowired
	CarDao carDao;

	@Autowired
	RepairDao repairDao;

	@Autowired
	UserDao userDao;

	@Autowired
	CarMappeur carMappeur;
	
	@Override
	public UUID addCar(CarDTO car) {
		Optional<Users> user = userDao.findById(car.getUserId());

		if (user.isPresent()) {
			Car voitureToSave = carMappeur.sourceToDestination(car);
			user.get().addCar(voitureToSave);
			userDao.save(user.get());
			return carDao.findTop1ByUsersIdOrderByDateDesc(user.get().getId()).getId();
		}
		return null;
	}

	@Override
	public String deleteCar(UUID carId) {
		Optional<Car> voiture = carDao.findById(carId);
		
		if (voiture.isPresent()) {
			carDao.delete(voiture.get());
			return "car deleted";
		}
		return null;
	}

	@Override
	public CarDTO updateCar(UUID carId, CarDTO car) {
		Optional<Car> voiture = carDao.findById(carId);
		Car voitureUpdated = new Car();
		
		if (voiture.isPresent()) {
			Car voitureMapped = carMappeur.sourceToDestination(car);
			voiture.get().setMarque(voitureMapped.getMarque());
			voiture.get().setModele(voitureMapped.getModele());
			voiture.get().setPremiereImmat(voitureMapped.getPremiereImmat());
			voiture.get().setPuissanceFiscale(voitureMapped.getPuissanceFiscale());
			voiture.get().setPrixDachat(voitureMapped.getPrixDachat());
			voiture.get().setPrixVenteEstimee(voitureMapped.getPrixVenteEstimee());

			voitureUpdated = carDao.save(voiture.get());
			return carMappeur.destinationTosource(voitureUpdated);
		}	
		return null;
	}

	@Override
	public CarDTO getCarById(UUID carId) {
		Optional<Car> voiture = carDao.findById(carId);
		
		if (voiture.isPresent()) {
			return carMappeur.destinationTosource(voiture.get());
		}
		return null;
	}

	@Override
	public List<CarDTO> getCarsByUserId(UUID userId) {
		Optional<List<Car>> voiture = carDao.findByUsersId(userId);
		ArrayList<CarDTO> allCars = new ArrayList<CarDTO>();

		if (voiture.isPresent()) {
			log.info("voiture present");
			for (Car v : voiture.get()) {
				log.info("voiture: " + v.getMarque());

				allCars.add(carMappeur.destinationTosource(v));
			}
			return allCars;
		}
		return null;
	}

}
