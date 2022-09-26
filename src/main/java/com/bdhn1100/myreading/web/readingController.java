package com.bdhn1100.myreading.web;

import com.bdhn1100.myreading.domain.Review;
import com.bdhn1100.myreading.service.ReviewService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class readingController {
    private final Logger LOGGER = LoggerFactory.getLogger(readingController.class.getName());
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/searchBooks")
    public String searchBooks(){
        return "searchBooks";
    }

    @GetMapping("/bookForm")
    public String bookForm(){
        return "bookForm";
    }

    public void listReview(){
        //reviewService.reviewList();
    }

    @PostMapping("/bookForm")
    public void saveReview(@RequestBody Review review){
        LOGGER.info("테스트 출력");
        LOGGER.info(review.toString());
        reviewService.write(review);
    }
}
