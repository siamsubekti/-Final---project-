package com.enigma.exception;

import com.enigma.constant.MessageException;

public class DataNullException extends RuntimeException{
    public DataNullException(){
        super(MessageException.CANNOT_BE_NULL);
    }
}
