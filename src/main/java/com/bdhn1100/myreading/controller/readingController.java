package com.bdhn1100.myreading.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class readingController {
    @GetMapping("/searchBooks")
    public String searchBooks(){
        return "searchBooks";
    }

    @GetMapping("/bookForm")
    public String bookForm(){
        return "bookForm";
    }
}
