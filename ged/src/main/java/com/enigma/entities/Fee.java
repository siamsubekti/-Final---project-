package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "fee")
public class Fee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private BigDecimal value;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "locations_origin")
    private Locations originLocation;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "locations_destination")
    private Locations destinationLocation;

    public Fee() {
    }

    public Fee(BigDecimal value) {
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public Locations getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(Locations originLocation) {
        this.originLocation = originLocation;
    }

    public Locations getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(Locations destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Fee fee = (Fee) o;
        return Objects.equals(id, fee.id) &&
                Objects.equals(value, fee.value) &&
                Objects.equals(originLocation, fee.originLocation) &&
                Objects.equals(destinationLocation, fee.destinationLocation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, value, originLocation, destinationLocation);
    }
}
