package com.hostel.hostelPortal.service;

import com.hostel.hostelPortal.model.LaundryRequest;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.model.UserRole;

import java.util.Set;

public interface LaundryService {
    // creating laundry request
    LaundryRequest createrLaundryRequest(LaundryRequest laundryRequest) throws Exception;

    //get laundry request data
    LaundryRequest getLaundryRequest(Long reqId);

    //update Laundry request by id
    void updateWeight(Long reqId,int weight) throws Exception;

    //delete Laundry request by id
    void deleteLaundryRequest(Long reqId);
}
