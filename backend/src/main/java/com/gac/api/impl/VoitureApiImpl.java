package com.gac.api.impl;

import java.util.UUID;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gac.api.layer.v1.VoitureApi;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.metier.VoitureMetier;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class VoitureApiImpl implements VoitureApi {

    Logger log = LoggerFactory.getLogger(VoitureApiImpl.class);

	@Autowired
	VoitureMetier voitureMetier;
	
	@Override
	public ResponseEntity<UUID> addCar(@Valid VoitureDTO body) {
		log.info("add car call");
		UUID result = voitureMetier.addCar(body);
		log.info("car added: " + result);
		return new ResponseEntity<UUID>(result, HttpStatus.OK);		
	}

	@Override
	public ResponseEntity<String> deleteCar(UUID carId) {
		log.info("delete car call");
		String result = voitureMetier.deleteCar(carId);
		log.info("car deleted: " + result);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<VoitureDTO> getCarById(UUID carId) {
		log.info("get car call: " + carId);
		return new ResponseEntity<VoitureDTO>(voitureMetier.getCarById(carId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<VoitureDTO> updateCar(UUID carId, @Valid VoitureDTO params) {
		log.info("update car call");
		VoitureDTO result = voitureMetier.updateCar(carId, params);
		log.info("car updated: " + result);
		return new ResponseEntity<VoitureDTO>(result, HttpStatus.OK);	
	}
}
