package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "storages")
public class Storages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "addresses_id_storages")
    private Addresses storageAddress;

    @JsonIgnore
    @OneToMany(mappedBy = "storage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Track> trackStorage;

    public Storages() {
    }

    public Storages(String name) {
        this.name = name;
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

    public Addresses getStorageAddress() {
        return storageAddress;
    }

    public void setStorageAddress(Addresses storageAddress) {
        this.storageAddress = storageAddress;
    }

    public List<Track> getTrackStorage() {
        return trackStorage;
    }

    public void setTrackStorage(List<Track> trackStorage) {
        this.trackStorage = trackStorage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Storages storages = (Storages) o;
        return Objects.equals(id, storages.id) &&
                Objects.equals(name, storages.name);
    }

}
