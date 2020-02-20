package com.enigma.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "posts")
public class Posts {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "addresses_idpost")
    private Addresses postAddresses;

    public Posts() {
    }

    public Posts(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Addresses getPostAddresses() {
        return postAddresses;
    }

    public void setPostAddresses(Addresses postAddresses) {
        this.postAddresses = postAddresses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Posts posts = (Posts) o;
        return Objects.equals(id, posts.id) &&
                Objects.equals(name, posts.name);
    }

}
