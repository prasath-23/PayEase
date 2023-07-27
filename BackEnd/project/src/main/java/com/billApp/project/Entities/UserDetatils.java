package com.billApp.project.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user") 
public class UserDetatils
{
    @Id
    String email ;
    String user_name ;
    String password ;

    public UserDetatils() {} ;

    public UserDetatils(String email, String user_name, String password) {
        super() ;
        this.email = email;
        this.user_name = user_name;
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
