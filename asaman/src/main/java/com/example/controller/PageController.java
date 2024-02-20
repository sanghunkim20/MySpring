package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class PageController {

    @GetMapping("/index")
    public String indexPage() {
        return "index";
    }
    
    @GetMapping("/join")
    public String joinPage() {
        return "join";
    }
    
}
