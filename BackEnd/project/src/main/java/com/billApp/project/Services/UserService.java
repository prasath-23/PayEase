package com.billApp.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.billApp.project.Entities.UserDetatils;
import com.billApp.project.Repositories.UserRepo;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {
    
    @Autowired
    private UserRepo repo ;

    public UserDetatils addBill( UserDetatils bill )
    {
        return repo.save( bill ) ;
    }

    public List<UserDetatils> AllUserDetails()
    {
        return repo.findAll() ;
    }
    public Optional<UserDetatils> findDueBillById( String id )
    {
        return repo.findById(id) ;
    }

    public String testRun()
    {
        return "Running" ;
    }

    public String removeData(String id)
    { 
        try
        {
            if( !repo.findById(id).isEmpty() )
            {
                repo.deleteById(id) ;
                return "Data Removed" ;
            }
            else
                throw new Exception("Error") ;
        }
        catch(Exception e)
        {
            return "Failed To Delete" ; 
        }
    }

    
    
}