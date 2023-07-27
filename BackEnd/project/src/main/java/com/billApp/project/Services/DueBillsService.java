package com.billApp.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.billApp.project.Entities.DueBills;
import com.billApp.project.Repositories.DueBillsRepo;

import java.util.List;
import java.util.Optional;

@Service

public class DueBillsService {

    @Autowired
    private DueBillsRepo repo ;

    public DueBills addBill( DueBills bill )
    {
        return repo.save( bill ) ;
    }

    public List<DueBills> AllDueBills()
    {
        return repo.findAll() ;
    }
    public Optional<DueBills> findDueBillById( int id )
    {
        return repo.findById(id) ;
    }

    public String testRun()
    {
        return "Running" ;
    }

    public String removeData(int id)
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