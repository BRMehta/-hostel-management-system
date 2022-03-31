package com.hostel.hostelPortal.model;

import lombok.Data;

import javax.persistence.*;

@Entity
//@Access(AccessType.PROPERTY)
@Data
//@Table(name="users") //if we want DB table name != class name
public class User {
    // @Column(name="userID",nullable=false) => if DB column name != class var name
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // auto generated key, surrogate key
    private Long  id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    private boolean enabled=true; // for enabling and disabling user
}
