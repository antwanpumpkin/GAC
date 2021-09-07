package com.gac.metier;

import java.util.List;
import java.util.UUID;

import com.gac.api.modele.dto.v1.CarDTO;

public interface CarMetier {
	
	public UUID addCar(CarDTO car);
	public String deleteCar(UUID carId);
	public CarDTO updateCar(UUID carId, CarDTO car);
	public CarDTO getCarById(UUID carId);
	public List<CarDTO> getCarsByUserId(UUID userId);
}
