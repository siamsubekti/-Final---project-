package com.enigma.entities;

import java.io.Serializable;

public class UsersResponse implements Serializable {

    private final String jwt;

    public UsersResponse(String jwt){
        this.jwt = jwt;
    }

    public String getJwt(){
        return jwt;
    }
}
