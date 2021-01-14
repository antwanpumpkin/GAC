package com.gac.metier;

import java.util.UUID;

import com.gac.api.modele.dto.v1.VoitureDTO;

public interface VoitureMetier {
	
	public String addCar(VoitureDTO car);
	public String deleteCar(UUID carId);
	public String updateCar(UUID carId, VoitureDTO car);
	public VoitureDTO getCarById(UUID carId);
}
