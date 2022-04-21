package com.hostel.hostelPortal.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class LaundryRequest{
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // auto generated key, surrogate key
    private Long  id;

    @ManyToOne(optional = false,fetch = FetchType.EAGER)
    @JoinColumn(name="student_id")
    private Long studentId;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date requestTime;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date acceptanceTime;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date completionTime;

    int weightOfCloths;

    Boolean clothsDry;

    Boolean ironCloths;

    int numberOfIronedCloths;

    double amount;

    Boolean payment;//true=>done, false=>not done

    String rejectionReason;
}