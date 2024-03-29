package com.example.Board.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Board {
    private Long id;
    private String boardTitle;
    private String content;

    public Board() {

    }

    public Board(String title, String content) {
        this.boardTitle = title;
        this.content = content;
    }
}
