package com.enigma.security;

import com.enigma.entities.Roles;

import java.util.List;

public class Login {
    private String jwt;
    private Roles role;
    private String idUser;

    public Login(String jwt, Roles roles, String id) {
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

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }
}
