package com.microservices.microservices.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservices.microservices.Entity.History;

public interface HistoryRepo extends JpaRepository< History , Integer >{
    
}
