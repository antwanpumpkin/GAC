package com.gac.metier.impl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.core.mappeur.VoitureMappeur;
import com.gac.layer.dao.VoitureDao;
import com.gac.metier.VoitureMetier;
import com.gac.modele.persistance.Voiture;

@Service
public class VoitureMetierImpl implements VoitureMetier {

	@Autowired
	VoitureDao voitureDao;
	
	@Autowired
	VoitureMappeur voitureMappeur;
	
	@Override
	public String addCar(VoitureDTO car) {
		Voiture voitureToSave = voitureMappeur.sourceToDestination(car);
		Voiture voitureSaved = voitureDao.save(voitureToSave);
		System.out.println(voitureSaved.getId());
		return "car added with id: " + voitureSaved.getId();
	}

	@Override
	public String deleteCar(UUID carId) {
		Optional<Voiture> voiture = voitureDao.findById(carId);
		
		if (voiture.isPresent()) {
			voitureDao.delete(voiture.get());
			return "car deleted";
		}
		return "failed to delete";
	}

	@Override
	public String updateCar(UUID carId, VoitureDTO car) {
		Optional<Voiture> voiture = voitureDao.findById(carId);
		
		if (voiture.isPresent()) {
			Voiture voitureMapped = voitureMappeur.sourceToDestination(car);
			voiture.get().setMarque(voitureMapped.getMarque());
			voiture.get().setModele(voitureMapped.getModele());
			voiture.get().setPremiereImmat(voitureMapped.getPremiereImmat());
			voiture.get().setPuissanceFiscale(voitureMapped.getPuissanceFiscale());
			voiture.get().setPrixDachat(voitureMapped.getPrixDachat());
			voiture.get().setPrixVenteEstimee(voitureMapped.getPrixVenteEstimee());

			voitureDao.save(voiture.get());
			return "car updated";
		}	
		return "no car founded";
	}

	@Override
	public VoitureDTO getCarById(UUID carId) {
		Optional<Voiture> voiture = voitureDao.findById(carId);
		
		if (voiture.isPresent()) {
			return voitureMappeur.destinationTosource(voiture.get());
		}
		return null;
	}

}
