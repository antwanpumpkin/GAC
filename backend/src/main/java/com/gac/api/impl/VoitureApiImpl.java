package com.gac.api.impl;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gac.api.layer.v1.VoitureApi;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.metier.VoitureMetier;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
public class VoitureApiImpl implements VoitureApi {

	public VoitureApiImpl(VoitureMetier voitureMetier) {
		super();
		System.out.println("test");
		this.voitureMetier = voitureMetier;
		System.out.println("test");
	}

	@Autowired
	VoitureMetier voitureMetier;
	
	@Override
	public ResponseEntity<String> addCar(@Valid VoitureDTO body) {
		String result = voitureMetier.addCar(body);
		return new ResponseEntity<String>(result, HttpStatus.OK);		
	}

	@Override
	public ResponseEntity<String> deleteCar(Long carId) {
		String result = voitureMetier.deleteCar(carId);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<VoitureDTO> getCarById(Long carId) {
		return new ResponseEntity<VoitureDTO>(voitureMetier.getCarById(carId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> updateCar(@Valid VoitureDTO body) {
		String result = voitureMetier.updateCar(body);
		return new ResponseEntity<String>(result, HttpStatus.OK);	
	}

}
