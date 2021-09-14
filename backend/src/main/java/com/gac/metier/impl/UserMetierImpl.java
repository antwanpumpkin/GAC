package com.gac.metier.impl;

import java.util.Optional;

import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

	@Autowired
	private AuthenticationManager authenticationManager;

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
	public String create(UserInfosDTO body) {
		log.info("Création");
		Optional <Users> u =  userDao.findByLogin(body.getLogin());

		if (u.isPresent()) {
			return "LOGIN_USED";
		}
		Users user = userMappeur.sourceToDestination(body);
		Users usersaved = userDao.save(user);

		return usersaved.getLogin();
	}

	@Override
	public UserInfosDTO modification(UserInfosDTO body) {
		log.info("Modification");
		Optional<Users> user = userDao.findByLogin(body.getLogin());

		if (user.isPresent()) {
			log.info(user.get().getLogin());
			userMappeur.updateUserFromDto(body, user.get());
			return userMappeur.destinationTosource(userDao.save(user.get()));
		}
		return null;
	}

	public void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
