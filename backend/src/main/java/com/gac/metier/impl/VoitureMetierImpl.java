package com.gac.metier.impl;

import org.springframework.stereotype.Service;

import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.metier.VoitureMetier;

@Service
public class VoitureMetierImpl implements VoitureMetier {

	@Override
	public String addCar(VoitureDTO car) {
		// TODO Auto-generated method stub
		return "car added";
	}

	@Override
	public String deleteCar(Long carId) {
		// TODO Auto-generated method stub
		return "car deleted";
	}

	@Override
	public String updateCar(VoitureDTO car) {
		// TODO Auto-generated method stub
		return "car updated";
	}

	@Override
	public VoitureDTO getCarById(Long carId) {
		// TODO Auto-generated method stub
		return null;
	}

}
