package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.User;

public interface UserRepository  extends JpaRepository<User, Long>{
    
    
} 