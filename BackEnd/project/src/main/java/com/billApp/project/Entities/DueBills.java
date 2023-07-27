package com.billApp.project.Entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "due_bills")
public class DueBills {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int bill_id ;
    
    private double amount ;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd-MM-yyyy") 
    private String duedate ; 

    private String description ;

    private int customer_id ;

    public DueBills(int bill_id, double amount, String duedate, String description, int customer_id) {
        super();
        this.bill_id = bill_id;
        this.amount = amount;
        this.duedate = duedate;
        this.description = description;
        this.customer_id = customer_id;
    }

    public DueBills() {
    }

    public int getBill_id() {
        return this.bill_id;
    }

    public void setBill_id(int bill_id) {
        this.bill_id = bill_id;
    }

    public double getAmount() {
        return this.amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getDuedate() {
        return this.duedate;
    }

    public void setDuedate(String duedate) {
        this.duedate = duedate;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCustomer_id() {
        return this.customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }    

}
