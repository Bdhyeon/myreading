package com.bdhn1100.myreading.service;

import com.bdhn1100.myreading.repository.ReviewRepository;
import com.bdhn1100.myreading.web.readingController;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ReviewServiceTest {
    private final Logger LOGGER = LoggerFactory.getLogger(readingController.class.getName());
    @Autowired
    private ReviewRepository reviewRepository;

    @Test
    void reviewList() {
        LOGGER.info(reviewRepository.findAll().toString());
    }
}