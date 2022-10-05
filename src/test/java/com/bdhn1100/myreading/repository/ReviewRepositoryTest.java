package com.bdhn1100.myreading.repository;

import com.bdhn1100.myreading.domain.Review;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
class ReviewRepositoryTest {
    @Autowired
    private ReviewRepository reviewRepository;

    @DisplayName("독서기록 추가")
    @Test
    void writeRecord(){
        // given
        Review review = new Review();
        review.setTitle("테스트 제목");
        review.setAuthors("테스트 작가");
        review.setPublisher("테스트 출판사");

        // when
        Review writedReview = reviewRepository.save(review);

        // then
        assertThat(writedReview.getTitle()).isEqualTo(review.getTitle());
        assertThat(writedReview.getAuthors()).isEqualTo(review.getAuthors());
        assertThat(writedReview.getPublisher()).isEqualTo(review.getPublisher());
    }

}