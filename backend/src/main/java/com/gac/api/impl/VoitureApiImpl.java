package com.gac.api.impl;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.gac.api.layer.v1.VoitureApi;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.metier.VoitureMetier;


@RestController
public class VoitureApiImpl implements VoitureApi {

	@Autowired
	VoitureMetier voitureMetier;
	
	@Override
	public ResponseEntity<String> addCar(@Valid VoitureDTO body) {
		String result = voitureMetier.addCar(body);
		return new ResponseEntity<String>(result, HttpStatus.OK);		
	}

	@Override
	public ResponseEntity<String> deleteCar(UUID carId) {
		String result = voitureMetier.deleteCar(carId);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<VoitureDTO> getCarById(UUID carId) {
		return new ResponseEntity<VoitureDTO>(voitureMetier.getCarById(carId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> updateCar(UUID carId, @Valid VoitureDTO params) {
		String result = voitureMetier.updateCar(carId, params);
		return new ResponseEntity<String>(result, HttpStatus.OK);	
	}
}
