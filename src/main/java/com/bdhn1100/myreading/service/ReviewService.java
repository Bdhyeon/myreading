package com.bdhn1100.myreading.service;

import com.bdhn1100.myreading.domain.Review;
import com.bdhn1100.myreading.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> reviewList(){
        return reviewRepository.findAll();
    }

    public void write(Review review){
        reviewRepository.save(review);
    }
}
