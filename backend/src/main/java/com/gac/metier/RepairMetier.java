package com.gac.metier;

import com.gac.api.modele.dto.v1.RepairDTO;

import java.util.List;
import java.util.UUID;

public interface RepairMetier {
	public List<RepairDTO> getRepairByCarId(UUID carId);
	public String addRepair(RepairDTO body);
	public String deleteRepair(UUID repairId);
}
