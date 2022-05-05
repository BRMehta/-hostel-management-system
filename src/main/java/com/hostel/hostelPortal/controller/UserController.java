package com.hostel.hostelPortal.controller;

import com.fasterxml.jackson.core.JsonToken;
import com.hostel.hostelPortal.model.*;
import com.hostel.hostelPortal.pdfgenerator;
import com.hostel.hostelPortal.service.UserService;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.PropertyEditorRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.DataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;




@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    //creating user
    @PostMapping("/") //for saving data use post
    //For fetching JSON data use @RequestBody
    public User createUser(@RequestBody User user) throws Exception {
        user.setProfile("default.png");
        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

//        role.setRoleId(44L);
//        role.setRoleName("ADMIN");

        UserRole userRole = new UserRole();
        userRole.setRole(role);
        userRole.setUser(user);

        Set<UserRole> roles = new HashSet<>();
        roles.add(userRole);

        return this.userService.createUser(user, roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return this.userService.getUser(username);
    }

    //delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        this.userService.deleteUser(userId);
    }

    //update user data
    @PutMapping("/update")
    public void updateUser(@RequestBody User user) {
        this.userService.updateUser(user);
    }

    @GetMapping("/getALL")
    public List<User> getall() {
        return this.userService.getalluser();
    }

    @GetMapping("/getroombyid/{userid}")
    public Long getRoombyid(@PathVariable("userid") Long userid) {
        return this.userService.getroombyid(userid);
    }

    @PutMapping("/updateroom/{room}/{student}/{start}/{end}")
    public void updateroom(@PathVariable("room") long room,@PathVariable("student") long student,@PathVariable("start")  String start,@PathVariable("end")  String end)throws Exception
    {
        System.out.println("hi");
        Date Start=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(start);
        Date End=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(end);
        this.userService.updateroom(room,student,Start,End);
    }

    @DeleteMapping("/vacateroom/{userId}")
    public void vacateroom(@PathVariable("userId") long userId)
    {
        System.out.println("HI");
        this.userService.vacateroom(userId);
    }

   /* @PostMapping("/Assignroom")
    public void room_assign(@RequestBody  room_stud roomdetails) throws Exception
    {
        System.out.println(roomdetails);
        this.userService.create_room_stud(roomdetails);
    }*/
    @GetMapping("isoccupied/{roomid}")
    public  boolean isoccupied(@PathVariable("roomid") Long roomid)
    {
        return this.userService.Isoccupied(roomid);
    }

    @PostMapping("/initialize_room/{roomid}")
    public void initializerooms(@PathVariable("roomid") Long room_id)
    {
        this.userService.initializeRoom(room_id);
    }
    @GetMapping("/countoffreerooms")
    public Long counoffreerooms()
    {
        return  this.userService.countofFreerooms();
    }



    @GetMapping("/countofrooms")
    public Long counofrooms()
    {
        return  this.userService.countofrooms();
    }



    @GetMapping("/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException
    {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<User> listUsers = this.userService.getalluser();

        pdfgenerator exporter = new pdfgenerator(listUsers);
        exporter.export(response);

    }


    public static float hostel_fees=1000;
    public static float mess_fees=2000;
    @PostMapping("/setfees/{hostelfee}/{messfee}")
    public void setfees(@PathVariable("hostelfee") float hostelfee,@PathVariable("messfee") float messfee)
    {
     hostel_fees=hostelfee;
     mess_fees=messfee;
        System.out.println(hostel_fees);
        System.out.println(mess_fees);
    }


   @GetMapping("/Export/{userid}/Pdf")
    public void exportPDF(@PathVariable("userid") long userid, HttpServletResponse response) throws DocumentException, IOException
    {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);


        pdfexporter exporter = new pdfexporter(userid,userService);

        exporter.export(response);



    }

    @PostMapping("/Assignroom/{room}/{student}/{start}/{end}")
    public void room_assign(@PathVariable("room") long room,@PathVariable("student") long student,@PathVariable("start")  String start,@PathVariable("end")  String end) throws Exception
    {
         System.out.println("hi");
        Date Start=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(start);
        Date End=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(end);
        this.userService.create_room_stud(room,student,Start,End);
    }


    @PutMapping("/updatefees")
    public void updatefees(@RequestBody  fees_month fees_months)
    {
        hostel_fees=fees_months.getHostel_fees();
        mess_fees=fees_months.getMess_fees();
    }
    @GetMapping("/viewfees")
    public fees_month viewfees()
    {
       return (new fees_month(hostel_fees,mess_fees));
    }

    @GetMapping("/showfees/{id}")
    public  stud_fees showfees(@PathVariable Long id)
{
    return   this.userService.showFees(id);
}



      @GetMapping("/ROOMDETAILS/{stud_id}")
      public room_stud ROOMDETAILS(@PathVariable Long stud_id)
      {
          return this.userService.ROOMDETAILS(stud_id);
      }

    @GetMapping("/get-email-address/{studId}")
    public String getEmailAddressById(@PathVariable("studId") Long studId) {
        System.out.println("getEmailAddressById called");
        String str = this.userService.getEmailAddress(studId);
        System.out.println(str);
        return str;
    }


}
