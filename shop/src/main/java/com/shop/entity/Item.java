package com.shop.entity;

import java.time.LocalDateTime;



import com.shop.constant.ItemSellStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="item")
@Getter
@Setter
@ToString
public class Item {

    @Id
    @Column(name="item_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // 상품코드
    
    private String itemName; // 상품명
    private int price; // 상품가격
    private int stockNumber; // 재고수량
    private String itemDetail; // 상품 상세 설명
    private ItemSellStatus itemSellStatus; // 상품 판매 상태
    private LocalDateTime regTime; // 등록시간
    private LocalDateTime updateTime; // 수정시간
}
