package com.gac.core.mappeur;

import com.gac.api.modele.dto.v1.CarDTO;
import com.gac.modele.persistance.Car;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CarMappeur {
	Car sourceToDestination(CarDTO car);
	CarDTO destinationTosource(Car car);
}
