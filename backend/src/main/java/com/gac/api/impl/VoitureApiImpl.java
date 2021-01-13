package com.gac.api.impl;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gac.api.layer.v1.VoitureApi;
import com.gac.api.modele.dto.v1.VoitureDTO;

@Controller("VoitureApiImpl")
@RequestMapping("gac/v1")
public class VoitureApiImpl implements VoitureApi {

	@Override
	public ResponseEntity<Void> addCar(@Valid VoitureDTO body) {
		// TODO Auto-generated method stub
		return VoitureApi.super.addCar(body);
	}

	@Override
	public ResponseEntity<Void> deleteCar(Long carId) {
		// TODO Auto-generated method stub
		return VoitureApi.super.deleteCar(carId);
	}

	@Override
	public ResponseEntity<VoitureDTO> getCarById(Long carId) {
		// TODO Auto-generated method stub
		return VoitureApi.super.getCarById(carId);
	}

	@Override
	public ResponseEntity<Void> updateCar(@Valid VoitureDTO body) {
		// TODO Auto-generated method stub
		return VoitureApi.super.updateCar(body);
	}

}
