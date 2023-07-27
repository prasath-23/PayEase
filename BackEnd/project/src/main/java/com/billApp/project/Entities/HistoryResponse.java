package com.billApp.project.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;

public class    HistoryResponse {
        int history_id ;
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd-MM-yyyy") 
        String paydate ;
        String description ;
        double amount ;
        String type ;
        int customer_id ;

    public HistoryResponse() {}

    public HistoryResponse(String paydate, String description, double amount, String type, int customer_id) {
        super();
        this.paydate = paydate;
        this.description = description;
        this.amount = amount;
        this.type = type;
        this.customer_id = customer_id;
    }

    public String getPaydate() {
        return this.paydate;
    }

    public void setPaydate(String paydate) {
        this.paydate = paydate;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return this.amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCustomer_id() {
        return this.customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

}
