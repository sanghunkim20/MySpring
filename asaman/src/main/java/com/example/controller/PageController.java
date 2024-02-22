package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class PageController {

    @GetMapping
    public String indexPage() {
        return "home";
    }
    
    @GetMapping
    public String joinPage() {
        return "join";
    }
    
}
