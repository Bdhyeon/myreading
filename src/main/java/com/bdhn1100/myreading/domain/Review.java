package com.bdhn1100.myreading.domain;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "review")
@Data
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_review;
    private String title;
    private String authors;
    private String translator;
    private String publisher;
    private String datetime;
    private Integer star;
    private String review;
    private String reviewtime;
}
