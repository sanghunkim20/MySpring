package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.service.UserService;
import com.example.user.UserCreateForm;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/signup")
    public String signup(UserCreateForm userCreateForm) {
        return "thymeleaf/join";
    }

    @PostMapping
    public String signup(@Valid UserCreateForm userCreateForm, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return "thymeleaf/join";
        }

        if(!userCreateForm.getPassword1().equals(userCreateForm.getPassword2())) {
            bindingResult.rejectValue("password2", "passwordInCorrect",
                        "2개의 패스워드가 일치하지 않습니다.");
            return "thymeleaf/join";
        }

        userService.create(userCreateForm.getUsername(),
                userCreateForm.getEmail(), userCreateForm.getPassword1());
        
        return "redirect:/";
    }
}
