package com.gac.metier.impl;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;
import com.gac.core.mappeur.UserMappeur;
import com.gac.layer.dao.UserDao;
import com.gac.metier.UserMetier;
import com.gac.modele.persistance.Users;

@Service
public class UserMetierImpl implements UserMetier {

	@Autowired
	UserDao userDao;
	
	@Autowired
	UserMappeur userMappeur;

    Logger log = LoggerFactory.getLogger(UserMetierImpl.class);

	@Override
	public UserInfosDTO connexion(AuthentificationDTO body) {
		log.info("Connexion");
		Optional<Users> user = userDao.findByLoginAndPassword(body.getLogin(),	body.getPassword());
		if (user.isPresent()) {
			log.info(user.get().toString());
			UserInfosDTO userDTO = userMappeur.destinationTosource(user.get());
			return userDTO;
		}
		return null;
	}

	@Override
	public String creation(UserInfosDTO body) {
		log.info("Création");
		Users user = userMappeur.sourceToDestination(body);
		Users usersaved = userDao.save(user);

		return usersaved.getLogin();
	}

	@Override
	public String modification(UserInfosDTO body) {
		log.info("Modification");
		Optional<Users> user = userDao.findByLogin(body.getLogin());

		if (user.isPresent()) {
			log.info(user.get().getLogin());
			userMappeur.updateCustomerFromDto(body, user.get());
			return userDao.save(user.get()).getLogin();
		}
		return null;
	}
}
