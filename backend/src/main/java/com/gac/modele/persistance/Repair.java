package com.gac.modele.persistance;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "repair")
public class Repair {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne()
    @JoinColumn(name = "car_id")
    private Car car;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "facture", nullable = false)
    private Boolean facture;

    @Column(name = "date")
    @CreationTimestamp
    private LocalDateTime date;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
