package com.microservices.microservices.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservices.microservices.Entity.History;
import com.microservices.microservices.Repositories.HistoryRepo;

import java.util.List;
import java.util.Optional;

@Service

public class HistoryService {

    @Autowired
    private HistoryRepo repo ;

    public History addBill( History history )
    {
        return repo.save( history ) ;
    }

    public List<History> AllHistory()
    {
        return repo.findAll() ;
    }
    public Optional<History> findDueBillById( int id )
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