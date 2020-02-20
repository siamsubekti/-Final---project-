package com.enigma.repositories;

import com.enigma.entities.Packages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackagesRepository extends JpaRepository<Packages, String> {
}
