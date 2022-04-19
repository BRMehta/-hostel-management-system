package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.Role;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.model.UserRole;
import com.hostel.hostelPortal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
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
        Role role=new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

//        role.setRoleId(44L);
//        role.setRoleName("ADMIN");

        UserRole userRole = new UserRole();
        userRole.setRole(role);
        userRole.setUser(user);

        Set<UserRole> roles=new HashSet<>();
        roles.add(userRole);

        return this.userService.createUser(user,roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username)
    {
        return this.userService.getUser(username);
    }

    //delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId)
    {
        this.userService.deleteUser(userId);
    }

    //update user data
    @PutMapping("/update")
    public void updateUser(@RequestBody User user)
    {
        this.userService.updateUser(user);
    }
}
