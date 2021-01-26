package com.gac.layer.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gac.modele.persistance.Voiture;

@Repository
public interface VoitureDao extends JpaRepository<Voiture, UUID> {
	public Optional<List<Voiture>> findByUserId(UUID userId);
}
