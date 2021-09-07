package com.gac.metier.impl;

import com.gac.api.modele.dto.v1.RepairDTO;
import com.gac.core.mappeur.RepairMappeur;
import com.gac.layer.dao.CarDao;
import com.gac.layer.dao.RepairDao;
import com.gac.metier.RepairMetier;
import com.gac.modele.persistance.Car;
import com.gac.modele.persistance.Repair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RepairMetierImpl implements RepairMetier {

	@Autowired
	RepairDao repairDao;

	@Autowired
	CarDao carDao;

	@Autowired
	RepairMappeur repairMappeur;

    Logger log = LoggerFactory.getLogger(RepairMetierImpl.class);

	@Override
	public List<RepairDTO> getRepairByCarId(UUID carId) {
		Optional<List<Repair>> reparation = repairDao.findByCarId(carId);
		ArrayList<RepairDTO> allReparations = new ArrayList<RepairDTO>();

		if (reparation.isPresent()) {
			log.info("reparation present");
			for(Repair r : reparation.get()) {
				log.info("reparation: " + r.getType());

				allReparations.add(repairMappeur.destinationTosource(r));
			}
			return allReparations;
		}
		return null;
	}

	@Override
	public String addRepair(RepairDTO body) {
		log.info("Création: " + body.isFacture());
		Repair reparation = repairMappeur.sourceToDestination(body);

		Optional <Car> car = carDao.findById(body.getVoitureId());
		if (car.isPresent()) {
			car.get().addRepair(reparation);
			carDao.save(car.get());
			//retourner id reparation
			return "OK";
		}
		return null;
	}

	@Override
	public String deleteRepair(UUID repairId) {
		Optional<Repair> reparation = repairDao.findById(repairId);

		if (reparation.isPresent()) {
			repairDao.delete(reparation.get());
			return "repair deleted";
		}
		return null;
	}
}
