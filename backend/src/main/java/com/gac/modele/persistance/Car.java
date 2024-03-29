package com.gac.modele.persistance;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "marque", nullable = false)
    private String marque; 

    @Column(name = "modele", nullable = false)
    private String modele;
    
    @Column(name = "premiereImmat")
    @JsonFormat(pattern = "YYYY-MM-dd")
    private LocalDate premiereImmat;

    @Column(name = "puissanceFiscale")
    private Integer puissanceFiscale;
    
    @Column(name = "prixDachat")
    private Integer prixDachat;

    @Column(name = "prixVenteEstimee")
    private Integer prixVenteEstimee;
    
	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Repair> repairs;

	@ManyToOne
	@JoinColumn(name = "users_id")
	private Users users;

	@Column(name = "date")
	@CreationTimestamp
	private LocalDateTime date;

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public String getModele() {
		return modele;
	}

	public void setModele(String modele) {
		this.modele = modele;
	}

	public LocalDate getPremiereImmat() {
		return premiereImmat;
	}

	public void setPremiereImmat(LocalDate premiereImmat) {
		this.premiereImmat = premiereImmat;
	}

	public Integer getPuissanceFiscale() {
		return puissanceFiscale;
	}

	public void setPuissanceFiscale(Integer puissanceFiscale) {
		this.puissanceFiscale = puissanceFiscale;
	}

	public Integer getPrixDachat() {
		return prixDachat;
	}

	public void setPrixDachat(Integer prixDachat) {
		this.prixDachat = prixDachat;
	}

	public Integer getPrixVenteEstimee() {
		return prixVenteEstimee;
	}

	public void setPrixVenteEstimee(Integer prixVenteEstimee) {
		this.prixVenteEstimee = prixVenteEstimee;
	}

	public void addRepair(Repair repair){
		repairs.add(repair);
		repair.setCar(this);
	}
	public void removeRepair(Repair repair){
		repairs.remove(repair);
		repair.setCar(null);
	}

	public Set<Repair> getRepairs() {
		return repairs;
	}

	public void setRepairs(Set<Repair> repairs) {
		this.repairs = repairs;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}
}