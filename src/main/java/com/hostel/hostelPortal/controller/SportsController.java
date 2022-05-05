package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;
import com.hostel.hostelPortal.service.SportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(path = "ap1/v1/Sports_e")
public class SportsController {

    private final SportsService sportsService;

    @Autowired
    public SportsController(SportsService sportsService) {
        this.sportsService = sportsService;
    }

    @CrossOrigin("*")
    @GetMapping
    public List<Sports> getEquipments() {
        return (List<Sports>) sportsService.getEquipments();
    }

    @CrossOrigin("*")
    @PutMapping(path = "{equipmentId}")
    public void updateQuantity(@PathVariable("equipmentId") int equipmentId,
                               @RequestBody Sports sp) {
        int quantity = sp.getQuantity();
        System.out.println(equipmentId+" "+ quantity );

        sportsService.updateQuantity(equipmentId, quantity);

    }

    @CrossOrigin("*")
    @PostMapping
    public void generateEquip(@RequestBody Sports sports){
        sportsService.addNewEquip(sports);
    }

    @CrossOrigin("*")
    @PutMapping(path = "up/{equipmentId}")
    public void updateEquip(@PathVariable("equipmentId") int equipmentId,
                               @RequestBody Sports sp) {
        int quantity = sp.getQuantity();
        System.out.println(equipmentId+" "+ quantity );

        sportsService.updateEquipQ(equipmentId, quantity);

    }
}
