package com.gac.core.mappeur;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;

import com.gac.api.modele.dto.v1.UserInfosDTO;
import com.gac.modele.persistance.Users;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface UserMappeur {
	Users sourceToDestination(UserInfosDTO user);
	UserInfosDTO destinationTosource(Users user);

	@BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
	void updateUserFromDto(UserInfosDTO dto, @MappingTarget Users entity);

}


