package com.enigma.exception;

import com.enigma.constant.MessageException;

public class DataExistException extends RuntimeException {
    public DataExistException() { super(MessageException.DATA_EXIST);}
}
