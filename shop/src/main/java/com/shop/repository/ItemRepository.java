package com.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shop.entity.Item;
import java.util.List;


public interface ItemRepository extends JpaRepository<Item, Long>{
    
    List<Item> findByItemName(String itemName);
    List<Item> findByItemNameOrItemDetail(String itemName, String itemDetail);
    List<Item> findByPriceLessThan(Integer price);
    List<Item> findByPriceLessThanOrderByPriceDesc(Integer price);
    
} 