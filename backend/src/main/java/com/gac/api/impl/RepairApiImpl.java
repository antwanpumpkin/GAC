package com.gac.api.impl;

import com.gac.api.layer.v1.RepairApi;
import com.gac.api.modele.dto.v1.RepairDTO;
import com.gac.metier.RepairMetier;
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
public class RepairApiImpl implements RepairApi {
    Logger log = LoggerFactory.getLogger(RepairApiImpl.class);

    @Autowired
    RepairMetier repairMetier;

    @Override
    public ResponseEntity<String> deleteRepair(UUID repairId) {
        log.info("delete repair call");
        String result = repairMetier.deleteRepair(repairId);
        if (result != null) {
            log.info("repair deleted: " + result);
            return new ResponseEntity<String>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<RepairDTO>> getRepairByCarId(UUID carId) {
        log.info("get repairs for car: " + carId);
        List<RepairDTO> repairs = repairMetier.getRepairByCarId(carId);

        if (repairs != null) {
            return new ResponseEntity<List<RepairDTO>>(repairs, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<Void> addRepair(RepairDTO body) {
        log.info("Creation reparation");
        String result = repairMetier.addRepair(body);

        if (result != null) {
            log.info("repair added: " + result);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
