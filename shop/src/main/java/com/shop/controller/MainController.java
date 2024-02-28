package com.shop.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class MainController {
    @GetMapping(value = "/")
    public String main() {
        return "main";
    }
}
