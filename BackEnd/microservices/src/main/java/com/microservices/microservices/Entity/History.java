    package com.microservices.microservices.Entity;

    import java.sql.Date;

    import com.fasterxml.jackson.annotation.JsonFormat;

    import jakarta.persistence.Entity;
    import jakarta.persistence.GeneratedValue;
    import jakarta.persistence.GenerationType;
    import jakarta.persistence.Id;
    import jakarta.persistence.Table;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;



    @Entity
    @Table(name = "history")
    @NoArgsConstructor
    @AllArgsConstructor
    @Setter
    @Getter
    public class History {
        
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY) 
        int history_id ;
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd-MM-yyyy") 
        String paydate ;
        String description ;
        double amount ;
        String type ;
        int customer_id ;
        
    }
