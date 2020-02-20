package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "packages")
public class Packages {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column(name = "item_name")
    private String itemName;

    @Column
    private Integer weight;

    @JsonIgnore
    @OneToMany(mappedBy = "packages")
    private List<Transactions> packagelistTransactions;

    public Packages() {
    }

    public Packages(String itemName, Integer weight) {
        this.itemName = itemName;
        this.weight = weight;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public List<Transactions> getPackagelistTransactions() {
        return packagelistTransactions;
    }

    public void setPackagelistTransactions(List<Transactions> packagelistTransactions) {
        this.packagelistTransactions = packagelistTransactions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Packages packages = (Packages) o;
        return Objects.equals(id, packages.id) &&
                Objects.equals(itemName, packages.itemName) &&
                Objects.equals(weight, packages.weight) &&
                Objects.equals(packagelistTransactions, packages.packagelistTransactions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, itemName, weight, packagelistTransactions);
    }
}
