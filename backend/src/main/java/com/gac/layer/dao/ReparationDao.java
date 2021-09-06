package com.gac.layer.dao;

import com.gac.modele.persistance.Reparation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ReparationDao extends JpaRepository <Reparation, UUID> {
	Optional<List<Reparation>> findByVoitureId(UUID id);
	void deleteByVoitureId(UUID id);
}
