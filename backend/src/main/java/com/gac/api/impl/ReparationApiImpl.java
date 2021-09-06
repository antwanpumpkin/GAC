package com.gac.api.impl;

import com.gac.api.layer.v1.ReparationApi;
import com.gac.api.modele.dto.v1.ReparationDTO;
import com.gac.api.modele.dto.v1.VoitureDTO;
import com.gac.metier.ReparationMetier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ReparationApiImpl implements ReparationApi {
    Logger log = LoggerFactory.getLogger(ReparationApiImpl.class);

    @Autowired
    ReparationMetier reparationMetier;

    @Override
    public ResponseEntity<List<ReparationDTO>> getReparationByCarId(UUID voitureId) {
        log.info("get all cars call for: " + voitureId);
        return new ResponseEntity<List<ReparationDTO>>(reparationMetier.getReparationByCarId(voitureId), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> reparation(ReparationDTO body) {
        log.info("Creation reparation");
        String result = reparationMetier.reparation(body);

        if (result != null) {
            return new ResponseEntity<String>(result, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
