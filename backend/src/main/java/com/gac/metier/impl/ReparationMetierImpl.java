package com.gac.metier.impl;

import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.ReparationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.core.mappeur.ReparationMappeur;
import com.gac.core.mappeur.UserMappeur;
import com.gac.layer.dao.ReparationDao;
import com.gac.layer.dao.UserDao;
import com.gac.layer.dao.VoitureDao;
import com.gac.metier.ReparationMetier;
import com.gac.metier.UserMetier;
import com.gac.modele.persistance.Reparation;
import com.gac.modele.persistance.Users;
import com.gac.modele.persistance.Voiture;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ReparationMetierImpl implements ReparationMetier {

	@Autowired
	ReparationDao reparationDao;

	@Autowired
	VoitureDao voitureDao;

	@Autowired
	ReparationMappeur reparationMappeur;

    Logger log = LoggerFactory.getLogger(ReparationMetierImpl.class);

	@Override
	public List<ReparationDTO> getReparationByCarId(UUID voitureId) {
		Optional<List<Reparation>> reparation = reparationDao.findByVoitureId(voitureId);
		ArrayList<ReparationDTO> allReparations = new ArrayList<ReparationDTO>();

		if (reparation.isPresent()) {
			log.info("reparation present");
			for(Reparation r : reparation.get()) {
				log.info("reparation: " + r.getType());

				allReparations.add(reparationMappeur.destinationTosource(r));
			}
			return allReparations;
		}
		return null;
	}

	@Override
	public String reparation(ReparationDTO body) {
		log.info("Création: " + body.isFacture());
		Reparation reparation = reparationMappeur.sourceToDestination(body);

		Optional <Voiture> voiture = voitureDao.findById(body.getVoitureId());
		if (voiture.isPresent()) {
		reparation.setVoiture(voiture.get());
		Reparation reparationSaved = reparationDao.save(reparation);
		return reparationSaved.getId().toString();
		}
		return null;
	}

	@Override
	public String deleteReparation(UUID repairId) {
		Optional<Reparation> reparation = reparationDao.findById(repairId);

		if (reparation.isPresent()) {
			reparationDao.delete(reparation.get());
			return "repair deleted";
		}
		return null;
	}
}
