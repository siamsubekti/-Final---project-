package com.enigma.exception;

import com.enigma.constant.MessageException;

public class DataAccessException extends Exception {
    public DataAccessException() {
        super(MessageException.IS_NOT_APPLICABLE);
    }
}
