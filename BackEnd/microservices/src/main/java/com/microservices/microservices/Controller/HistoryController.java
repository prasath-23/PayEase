package com.microservices.microservices.Controller;

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

import com.microservices.microservices.Entity.History;
import com.microservices.microservices.Services.HistoryService;



@CrossOrigin(origins = "http://localhost:5173/")
@RestController 
@RequestMapping("/api/history")
public class HistoryController {

    @Autowired
    HistoryService service ;

    @PostMapping( "/add" )
    public History addData( @RequestBody History bill )
    {
        return service.addBill( bill ) ;
    }

    @GetMapping( "/show" )
    public List<History> showData()
    {
        return service.AllHistory() ;
    }
    
    @RequestMapping( value = "/test" , method = RequestMethod.GET)
    public String TestRun(){
        return service.testRun() ;
    }

    @RequestMapping( value = "/show/{id}" , method = RequestMethod.GET)
    public Optional<History> showTimeById( @PathVariable int id)
    {
        return service.findDueBillById(id) ;
    }

    @RequestMapping( value = "/delete/{id}" , method = RequestMethod.DELETE)
    public String deleteData( @PathVariable int id )
    {
        return service.removeData(id) ;
    }
    
}