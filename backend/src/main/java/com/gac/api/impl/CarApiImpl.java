package com.gac.api.impl;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import com.gac.api.layer.v1.CarApi;
import com.gac.api.modele.dto.v1.CarDTO;
import com.gac.metier.CarMetier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CarApiImpl implements CarApi {

    Logger log = LoggerFactory.getLogger(CarApiImpl.class);

	@Autowired
	CarMetier carMetier;
	
	@Override
	public ResponseEntity<UUID> addCar(@Valid CarDTO body) {
		log.info("add car call");
		UUID result = carMetier.addCar(body);
		log.info("car added: " + result);
		return new ResponseEntity<UUID>(result, HttpStatus.OK);		
	}

	@Override
	public ResponseEntity<String> deleteCar(UUID carId) {
		log.info("delete car call");
		String result = carMetier.deleteCar(carId);
		log.info("car deleted: " + result);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<CarDTO> getCarById(UUID carId) {
		log.info("get car call: " + carId);
		return new ResponseEntity<CarDTO>(carMetier.getCarById(carId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<CarDTO> updateCar(UUID carId, @Valid CarDTO params) {
		log.info("update car call");
		CarDTO result = carMetier.updateCar(carId, params);
		log.info("car updated: " + result);
		return new ResponseEntity<CarDTO>(result, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<CarDTO>> getCarsByUserId(UUID userId) {
		log.info("get all cars call for: " + userId);
		return new ResponseEntity<List<CarDTO>>(carMetier.getCarsByUserId(userId), HttpStatus.OK);
	}
}
