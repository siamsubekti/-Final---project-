package com.enigma.exception;

public class IdNotFoundException extends RuntimeException {
    public IdNotFoundException() {
        super("id not found");
    }
}
