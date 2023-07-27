package com.billApp.project.Controllers;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import java.util.Optional;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.billApp.project.Entities.DueBills;
import com.billApp.project.Entities.HistoryResponse;
import com.billApp.project.Services.DueBillsService;
import com.google.common.net.HttpHeaders;
import com.google.common.net.MediaType;

import jakarta.ws.rs.HttpMethod;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController 
@RequestMapping("/api/duebills")
public class DueBillsController {

    @Autowired
    DueBillsService service ;

    @Autowired
    private RestTemplate restTemplate;
    
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
    
    // @GetMapping("/history/all")
    // public ResponseEntity<List<HistoryResponse>> getHistoryForDueBill() {
    //     ResponseEntity<HistoryResponse[]> response = restTemplate.exchange(
    //             "http://localhost:1000/api/history/show/",
    //             HttpMethod.GET,
    //             null,
    //             HistoryResponse[].class
    //     );
    
    //     if (response.getStatusCode().is2xxSuccessful()) {
    //         List<HistoryResponse> historyList = Arrays.asList(response.getBody());
    //         return new ResponseEntity<>(historyList, HttpStatus.OK);
    //     } else {
    //         // Handle error scenario
    //         return new ResponseEntity<>(Collections.emptyList(), response.getStatusCode());
    //     }
    // }

    
        @GetMapping("/history/all")
        public HistoryResponse[] getHistoryForDueBill() {
            
            ResponseEntity<HistoryResponse[]> response = restTemplate.getForEntity(
                    "http://localhost:1000/api/history/show",
                    HistoryResponse[].class
            );
            return response.getBody() ;
    
        }

        @PostMapping("/history/add")
        public HistoryResponse setHistoryForDuebills( @RequestBody HistoryResponse historyResponse){
            HistoryResponse response = restTemplate.postForObject(
                "http://localhost:1000/api/history/add",
                 historyResponse , 
                 HistoryResponse.class
                ) ;
                return response ;
        }

        // if (response.getStatusCode().is2xxSuccessful()) {
        //     List<HistoryResponse> historyList = Arrays.asList(response.getBody());
        //     return new ResponseEntity<>(historyList, HttpStatus.OK);
        // } else {
        //     // Handle error scenario
        //     return new ResponseEntity<>(Collections.emptyList(), response.getStatusCode());
        // }
    
        // Other controller methods...
}
    
