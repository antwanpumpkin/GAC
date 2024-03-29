package com.gac.layer.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.gac.modele.persistance.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CarDao extends JpaRepository<Car, UUID> {
	public Optional<List<Car>> findByUsersId(UUID userId);
	public Car findTop1ByUsersIdOrderByDateDesc(UUID userId);
}
