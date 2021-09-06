package com.gac.metier;

import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.ReparationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;

public interface ReparationMetier {
	public List<ReparationDTO> getReparationByCarId(UUID voitureId);
	public String reparation(ReparationDTO body);
}
