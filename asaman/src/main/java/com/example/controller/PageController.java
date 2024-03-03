package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class PageController {

    @GetMapping(value = "/home")
    public String indexPage() {
        return "/thymeleaf/home";
    }
    
    @GetMapping(value = "/join")
    public String joinPage() {
        return "/thymeleaf/join";
    }
    
}
