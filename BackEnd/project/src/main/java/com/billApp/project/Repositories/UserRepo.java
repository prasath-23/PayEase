package com.billApp.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billApp.project.Entities.UserDetatils;

public interface UserRepo extends JpaRepository<UserDetatils ,String>{} ;
