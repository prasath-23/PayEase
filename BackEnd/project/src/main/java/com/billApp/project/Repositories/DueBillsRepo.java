package com.billApp.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billApp.project.Entities.DueBills;

public interface DueBillsRepo extends JpaRepository< DueBills , Integer >{
    
}
