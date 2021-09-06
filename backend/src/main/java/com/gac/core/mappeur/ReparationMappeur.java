package com.gac.core.mappeur;

import com.gac.api.modele.dto.v1.ReparationDTO;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.modele.persistance.Reparation;
import com.gac.modele.persistance.Voiture;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReparationMappeur {
	Reparation sourceToDestination(ReparationDTO reparation);
	ReparationDTO destinationTosource(Reparation voiture);
}
