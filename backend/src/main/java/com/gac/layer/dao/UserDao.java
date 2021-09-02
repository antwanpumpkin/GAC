package com.gac.layer.dao;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gac.modele.persistance.Users;

@Repository
public interface UserDao extends JpaRepository <Users, UUID> {
	Optional<Users> findByLoginAndPassword(String login, String password);
	Optional<Users> findByLogin(String login);
}
