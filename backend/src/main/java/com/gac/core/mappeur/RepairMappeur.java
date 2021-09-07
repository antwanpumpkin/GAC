package com.gac.core.mappeur;

import com.gac.api.modele.dto.v1.RepairDTO;
import com.gac.modele.persistance.Repair;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RepairMappeur {
	Repair sourceToDestination(RepairDTO repair);
	RepairDTO destinationTosource(Repair repair);
}
