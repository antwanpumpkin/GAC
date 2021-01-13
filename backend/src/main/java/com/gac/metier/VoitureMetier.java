package com.gac.metier;

import com.gac.api.modele.dto.v1.VoitureDTO;

public interface VoitureMetier {
	
	public String addCar(VoitureDTO car);
	public String deleteCar(Long carId);
	public String updateCar(VoitureDTO car);
	public VoitureDTO getCarById(Long carId);
}
