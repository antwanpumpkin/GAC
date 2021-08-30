package com.gac.api.impl;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gac.api.layer.v1.UserApi;
import com.gac.api.modele.dto.v1.AuthentificationDTO;
import com.gac.api.modele.dto.v1.UserInfosDTO;
import com.gac.metier.UserMetier;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserApiImpl implements UserApi {
    Logger log = LoggerFactory.getLogger(UserApiImpl.class);

    @Autowired
    UserMetier userMetier;
    
	@Override
	public ResponseEntity<String> connexion(@Valid AuthentificationDTO body) {
		log.info("connexion");
		String result = userMetier.connexion(body);

		if (result == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<String>(result, HttpStatus.OK);		
	}

	@Override
	public ResponseEntity<String> creation(@Valid UserInfosDTO body) {
		log.info("Creation compte");
		String result = userMetier.creation(body);

		if (result != null) {
			return new ResponseEntity<String>(result, HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
