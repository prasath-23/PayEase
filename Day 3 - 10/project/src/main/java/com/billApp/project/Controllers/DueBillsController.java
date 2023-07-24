package com.billApp.project.Controllers;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.billApp.project.Entities.DueBills;
import com.billApp.project.Services.DueBillsService;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController 

public class DueBillsController {

    @Autowired
    DueBillsService service ;

    @PostMapping( "/add" )
    public DueBills addData( @RequestBody DueBills bill )
    {
        return service.addBill( bill ) ;
    }

    @GetMapping( "/show" )
    public List<DueBills> showData()
    {
        return service.AllDueBills() ;
    }
    
    @RequestMapping( value = "/test" , method = RequestMethod.GET)
    public String TestRun(){
        return service.testRun() ;
    }

    @RequestMapping( value = "/show/{id}" , method = RequestMethod.GET)
    public Optional<DueBills> showTimeById( @PathVariable int id)
    {
        return service.findDueBillById(id) ;
    }

    @RequestMapping( value = "/delete/{id}" , method = RequestMethod.DELETE)
    public String deleteData( @PathVariable int id )
    {
        return service.removeData(id) ;
    }
    
}