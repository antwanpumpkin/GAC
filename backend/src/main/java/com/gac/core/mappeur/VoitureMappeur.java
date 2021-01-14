package com.gac.core.mappeur;

import org.mapstruct.Mapper;

import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.modele.persistance.Voiture;

@Mapper(componentModel = "spring")
public interface VoitureMappeur {
	Voiture sourceToDestination(VoitureDTO voiture);
	VoitureDTO destinationTosource(Voiture voiture);
}
