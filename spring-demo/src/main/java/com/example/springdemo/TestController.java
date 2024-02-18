package com.example.springdemo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class TestController {
    @GetMapping(value = "/test")
    public UserDto test() {
        
        UserDto userDto = new UserDto();
        userDto.setAge(20);
        userDto.setName("hoon");

        return userDto;
    }
    
}
