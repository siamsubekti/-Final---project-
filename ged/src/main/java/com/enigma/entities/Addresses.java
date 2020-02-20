package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "addresses")
public class Addresses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String descriptions;

    @Column
    private Double longitude;

    @Column
    private Double latitude;

    @ManyToOne
    @JoinColumn(name = "locations_id")
    private Locations addressLocations;

    @JsonIgnore
    @OneToMany(mappedBy = "originAddress")
    private List<Transactions> listOriginAddress;

    @JsonIgnore
    @OneToMany(mappedBy = "destinationAddresses")
    private List<Transactions> listDestinationAddress;

    @JsonIgnore
    @OneToMany(mappedBy = "storageAddress")
    private List<Storages> storagesList;

    @JsonIgnore
    @OneToMany(mappedBy = "postAddresses")
    private List<Posts> postsList;

    public Addresses() {
    }

    public Addresses(String descriptions, Double longitude, Double latitude) {
        this.descriptions = descriptions;
        this.longitude = longitude;
        this.latitude = latitude;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Locations getAddressLocations() {
        return addressLocations;
    }

    public void setAddressLocations(Locations addressLocations) {
        this.addressLocations = addressLocations;
    }

    public List<Transactions> getListOriginAddress() {
        return listOriginAddress;
    }

    public void setListOriginAddress(List<Transactions> listOriginAddress) {
        this.listOriginAddress = listOriginAddress;
    }

    public List<Transactions> getListDestinationAddress() {
        return listDestinationAddress;
    }

    public void setListDestinationAddress(List<Transactions> listDestinationAddress) {
        this.listDestinationAddress = listDestinationAddress;
    }

//    public List<Storages> getStoragesList() {
//        return storagesList;
//    }
//
//    public void setStoragesList(List<Storages> storagesList) {
//        this.storagesList = storagesList;
//    }

//    public List<Posts> getPostsList() {
//        return postsList;
//    }
//
//    public void setPostsList(List<Posts> postsList) {
//        this.postsList = postsList;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Addresses addresses = (Addresses) o;
        return Objects.equals(id, addresses.id) &&
                Objects.equals(descriptions, addresses.descriptions) &&
                Objects.equals(longitude, addresses.longitude) &&
                Objects.equals(latitude, addresses.latitude) &&
                Objects.equals(addressLocations, addresses.addressLocations) &&
                Objects.equals(listOriginAddress, addresses.listOriginAddress) &&
                Objects.equals(listDestinationAddress, addresses.listDestinationAddress) &&
                Objects.equals(storagesList, addresses.storagesList) &&
                Objects.equals(postsList, addresses.postsList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, descriptions, longitude, latitude, addressLocations, listOriginAddress, listDestinationAddress, storagesList, postsList);
    }
}
