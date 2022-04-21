package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.LaundryRequest;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.service.LaundryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/laundry")
@CrossOrigin("*")
public class LaundryController {
    @Autowired
    private LaundryService laundryService;
    //creating user
    @PostMapping("/") //for saving data use post
    //For fetching JSON data use @RequestBody
    public LaundryRequest createrLaundryRequest(@RequestBody LaundryRequest laundryRequest) throws Exception {
        return this.laundryService.createrLaundryRequest(laundryRequest);
    }

    @GetMapping("/{reqId}")
    public LaundryRequest getLaundryRequest(@PathVariable("reqId") Long reqId)
    {
        return this.laundryService.getLaundryRequest(reqId);
    }

    //update user data
    @PutMapping("/update/{reqId}/{weight}")
    public void updateWeight(@PathVariable("reqId") Long reqId,@PathVariable("weight") int weight) throws Exception {
        this.laundryService.updateWeight(reqId,weight);
    }

    //delete the user by id
    @DeleteMapping("/{reqId}")
    public void deleteLoginRequest(@PathVariable("reqId") Long reqId)
    {
        this.laundryService.deleteLaundryRequest(reqId);
    }
}
