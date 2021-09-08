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
	public ResponseEntity<Void> addCar(@Valid CarDTO body) {
		log.info("add car call");
		UUID result = carMetier.addCar(body);

		if (result != null) {
			log.info("car added: " + result);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@Override
	public ResponseEntity<String> deleteCar(UUID carId) {
		log.info("delete car call");
		String result = carMetier.deleteCar(carId);

		if (result != null) {
			log.info("car deleted: " + result);
			return new ResponseEntity<String>(result, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@Override
	public ResponseEntity<CarDTO> getCarById(UUID carId) {
		log.info("get car call: " + carId);

		CarDTO car = carMetier.getCarById(carId);
		if (car != null) {
			return new ResponseEntity<CarDTO>(car, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@Override
	public ResponseEntity<CarDTO> updateCar(UUID carId, @Valid CarDTO params) {
		log.info("update car call");
		CarDTO result = carMetier.updateCar(carId, params);

		if (result != null) {
			log.info("car updated: " + result);
			return new ResponseEntity<CarDTO>(result, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@Override
	public ResponseEntity<List<CarDTO>> getCarsByUserId(UUID userId) {
		log.info("get all cars call for: " + userId);
		List<CarDTO> cars = carMetier.getCarsByUserId(userId);

		if (cars != null) {
			return new ResponseEntity<List<CarDTO>>(cars, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
