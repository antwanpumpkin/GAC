package com.gac.modele.persistance;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "reparation")
public class Reparation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne()
    @JoinColumn(name = "voiture_id", referencedColumnName = "id")
    private Voiture voiture;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "facture", nullable = false)
    private Boolean facture;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Voiture getVoiture() {
        return voiture;
    }

    public void setVoiture(Voiture voiture) {
        this.voiture = voiture;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getFacture() {
        return facture;
    }

    public void setFacture(Boolean facture) {
        this.facture = facture;
    }
}
