package com.gac.metier;

import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;

public interface UserMetier {
	public String connexion(AuthentificationDTO body);
	public String creation(UserInfosDTO body);
}
