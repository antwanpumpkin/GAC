package com.gac.layer.dao;

import com.gac.modele.persistance.Car;
import com.gac.modele.persistance.Repair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RepairDao extends JpaRepository <Repair, UUID> {
	public Optional<List<Repair>> findByCarId(UUID id);
	public Repair findTop1ByCarIdOrderByDateDesc(UUID carId);
}
