package com.hostel.hostelPortal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hostel.hostelPortal.model.LaundryPrices;
import com.hostel.hostelPortal.repo.LaundryPricesRepository;
import com.hostel.hostelPortal.repo.LaundryRepository;
import com.hostel.hostelPortal.repo.roomstudRepository;
import com.hostel.hostelPortal.repo.stud_Room_Repository;
import com.hostel.hostelPortal.service.UserService;
import com.hostel.hostelPortal.service.impl.UserServiceImpl;
import junit.framework.AssertionFailedError;
import org.hamcrest.Matchers;
import org.hibernate.service.spi.InjectService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.StatusAssertions;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class userepoTest
{
    @Autowired
    private stud_Room_Repository srRepository;
    @Autowired
    private roomstudRepository rsRepository;


    @Autowired
    private UserServiceImpl userserv;

    @Autowired
    private LaundryPricesRepository laundryPricesRepository;

    @Test
    void Testing() throws JsonProcessingException
    {
        assertEquals(4, rsRepository.count());
        assertEquals(2, rsRepository.countofFreerooms());

        long expected_value=userserv.getroombyid(5L);

        assertEquals(5,expected_value);

        LaundryPrices l=new LaundryPrices();
        l.setType("DryCloths");
        l.setAmount(10);

        LaundryPrices r=laundryPricesRepository.findByType("DryCloths");

        assertEquals(l.getAmount(),r.getAmount());
        assertEquals(l.getType(),r.getType());
    }
}