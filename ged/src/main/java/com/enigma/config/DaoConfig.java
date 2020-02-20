package com.enigma.config;

import com.enigma.services.*;
import com.enigma.services.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;


@Configuration
public class DaoConfig {

    @Bean
    public RolesService rolesService() {
        return new RoleServiceImpl();
    }

    @Bean
    public PackagesService packagesService() {
        return new PackagesServiceImpl();
    }

    @Bean
    public AddressesService addressesService() {
        return new AddressesServiceImpl();
    }

    @Bean
    public PostsService postsService() {
        return new PostsServiceImpl();
    }

    @Bean
    public UsersService usersService() {
        return new UsersServiceImpl();
    }

    @Bean
    public StoragesService storagesService(){
        return new StoragesServiceImpl();
    }

    @Bean
    public FeeService feeService(){
        return new FeeServiceImpl();
    }

    @Bean
    public TrackService trackService(){
        return new TrackServiceImpl();
    }

    @Bean
    public TransactionsService transactionsService(){
        return new TransactionsServiceImpl();
    }

    @Bean
    public LocationsService locationsService() {
        return new LocationServiceImpl();
    }
}
