package com.enigma.controller;

import com.enigma.entities.User;
import com.enigma.entities.UsersPrincipal;
import com.enigma.security.Login;
import com.enigma.security.MyUsersDetailsService;
import com.enigma.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping("/authenticate")
public class SecurityController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUsersDetailsService usersDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UsersPrincipal userDetails = usersDetailsService.loadUserByUsername(user.getUserName());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        Login login = new Login(jwt, userDetails.getUser().getRoles(), userDetails.getUser().getId());
        return ok(login);
    }

    @GetMapping("/info")
    public ResponseEntity<Principal> info (Principal principal){
        return new ResponseEntity<>(principal, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
