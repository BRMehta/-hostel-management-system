package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.LaundryRequest;
import com.hostel.hostelPortal.service.LaundryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laundry")
@CrossOrigin("*")
public class LaundryController {
    @Autowired
    private LaundryService laundryService;
    //creating user
    @PostMapping("/") //for saving data use post
    //For fetching JSON data use @RequestBody
    public LaundryRequest createLaundryRequest(@RequestBody LaundryRequest laundryRequest) throws Exception {
        return this.laundryService.createLaundryRequest(laundryRequest);
    }

    //get pending laundry request based on Id for user dashboard
    @GetMapping("/pending-req/{userId}")
    public List<LaundryRequest> getPendingRequest(@PathVariable("userId") Long userId)
    {
        return this.laundryService.getPendingRequest(userId);
    }

    @GetMapping("/pending-req-by-id/{reqId}")
    public List<LaundryRequest> getPendingRequestById(@PathVariable("reqId") Long reqId)
    {
        return this.laundryService.getPendingRequestById(reqId);
    }

    //get all pending laundry requests for admin for student dashboard
    @GetMapping("/pending-req")
    public List<LaundryRequest> getAllPendingRequest()
    {
        return this.laundryService.getAllPendingRequest();
    }

    //get rejected laundry request based on Id for user dashboard
    @GetMapping("/rejected-req/{reqId}")
    public List<LaundryRequest> getRejectedRequest(@PathVariable("reqId") Long reqId)
    {
        return this.laundryService.getRejectedRequest(reqId);
    }

    //get all rejected laundry requests for admin for student dashboard
    @GetMapping("/rejected-req")
    public List<LaundryRequest> getAllRejectedRequest()
    {
        return this.laundryService.getAllRejectedRequest();
    }

    //get accepted laundry request based on Id for user dashboard
    @GetMapping("/accepted-req/{reqId}")
    public List<LaundryRequest> getAcceptedRequest(@PathVariable("reqId") Long reqId)
    {
        return this.laundryService.getAcceptedRequest(reqId);
    }

    //get all accepted laundry requests for admin for student dashboard
    @GetMapping("/accepted-req")
    public List<LaundryRequest> getAllAcceptedRequest()
    {
        return this.laundryService.getAllAcceptedRequest();
    }

    //get pending laundry request based on Id for user dashboard
    @GetMapping("/completed-req/{reqId}")
    public List<LaundryRequest> getCompletedRequest(@PathVariable("reqId") Long reqId)
    {
        return this.laundryService.getCompletedRequest(reqId);
    }

    //get all pending laundry requests for admin for student dashboard
    @GetMapping("/completed-req")
    public List<LaundryRequest> getAllCompletedRequest()
    {
        return this.laundryService.getAllCompletedRequest();
    }

    //update user data
    @PutMapping("/update/{reqId}/{weight}/{dryCloths}/{numIronCloths}")
    public void updateWeight(@PathVariable("reqId") Long reqId,@PathVariable("weight") int weight,
        @PathVariable("dryCloths") boolean dryCloths,@PathVariable("numIronCloths") int numIronCloths) throws Exception {
        this.laundryService.updateLaundryrequest(reqId,weight,dryCloths,numIronCloths);
    }

    //delete the user by id
    @DeleteMapping("/{reqId}")
    public void deleteLaundryRequest(@PathVariable("reqId") Long reqId)
    {
        this.laundryService.deleteLaundryRequest(reqId);
    }
}
