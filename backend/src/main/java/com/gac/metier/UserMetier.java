package com.gac.metier;

import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;
import com.gac.modele.persistance.Users;

public interface UserMetier {
	public UserInfosDTO connexion(AuthentificationDTO body);
	public String create(UserInfosDTO body);
	public UserInfosDTO modification(UserInfosDTO body);
}
