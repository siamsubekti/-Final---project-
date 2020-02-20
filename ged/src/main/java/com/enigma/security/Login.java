package com.enigma.security;

import com.enigma.entities.Roles;

import java.util.List;

public class Login {
    private String jwt;
    private List<Roles> role;
    private String idUser;

    public Login(String jwt, List<Roles> roles, String id) {
        this.jwt = jwt;
        this.role = roles;
        this.idUser = id;

    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public List<Roles> getRole() {
        return role;
    }

    public void setRole(List<Roles> role) {
        this.role = role;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }
}
