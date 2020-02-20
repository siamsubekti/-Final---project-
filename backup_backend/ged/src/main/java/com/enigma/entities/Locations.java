package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "locations")
public class Locations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column(name = "location_type")
    private Integer locationType;

    @JsonIgnore
    @OneToMany(mappedBy = "addressLocations")
    private List<Addresses> addressesOrigin;

    @ManyToOne
    @JoinColumn(name = "locations_id2")
    @JsonBackReference
    private Locations locations;

    @JsonIgnore
    @OneToMany(mappedBy = "locations")
    private List<Locations> locationsList;

    @OneToMany(mappedBy = "originLocation",cascade = CascadeType.ALL)
    private List<Fee> feeOrigin;

    @OneToMany(mappedBy = "destinationLocation", cascade = CascadeType.ALL)
    private List<Fee> feeDestination;

    public Locations() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getLocationType() {
        return locationType;
    }

    public void setLocationType(Integer locationType) {
        this.locationType = locationType;
    }

    public List<Addresses> getAddressesOrigin() {
        return addressesOrigin;
    }

    public void setAddressesOrigin(List<Addresses> addressesOrigin) {
        this.addressesOrigin = addressesOrigin;
    }

    public Locations getLocations() {
        return locations;
    }

    public void setLocations(Locations locations) {
        this.locations = locations;
    }

    public List<Locations> getLocationsList() {
        return locationsList;
    }

    public void setLocationsList(List<Locations> locationsList) {
        this.locationsList = locationsList;
    }

//    public List<Fee> getFeeOrigin() {
//        return feeOrigin;
//    }
//
//    public void setFeeOrigin(List<Fee> feeOrigin) {
//        this.feeOrigin = feeOrigin;
//    }
//
//    public List<Fee> getFeeDestination() {
//        return feeDestination;
//    }
//
//    public void setFeeDestination(List<Fee> feeDestination) {
//        this.feeDestination = feeDestination;
//    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Locations locations1 = (Locations) o;
        return Objects.equals(id, locations1.id) &&
                Objects.equals(name, locations1.name) &&
                Objects.equals(locationType, locations1.locationType) &&
                Objects.equals(addressesOrigin, locations1.addressesOrigin) &&
                Objects.equals(locations, locations1.locations) &&
                Objects.equals(locationsList, locations1.locationsList) &&
                Objects.equals(feeOrigin, locations1.feeOrigin) &&
                Objects.equals(feeDestination, locations1.feeDestination);
    }

}
