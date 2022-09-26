package com.bdhn1100.myreading.web;

import com.bdhn1100.myreading.service.ReviewService;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class readingControllerTest {
    private final Logger LOGGER = LoggerFactory.getLogger(readingController.class.getName());
    @Autowired
    private ReviewService reviewService;

    @Test
    void bringReview() {
        LOGGER.info("******리뷰 조회 테스트******");
        LOGGER.info(reviewService.reviewList().toString());
    }

}