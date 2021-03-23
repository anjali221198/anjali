import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../sharedResource/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  {
  



  searchedKeyword: string = '';
  SortbyParam = '';
  SortDirection = 'asc';
  reviewer = [];
  revErrorMsg: any = '';



  constructor(private reviewsService: ReviewService) { }



  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe(
      success => this.reviewer = success,
      error => this.revErrorMsg = error
    )
  }
}

  //reviewer: any[] = [
  //  { reviewerId: 1001, reviewDescription: 'teaches by giving real life examples', trainerImage: '../assets/trainer5.jfif' },
  //  { reviewerId: 1002, reviewDescription: 'very good trainer', trainerImage: '../assets/trainer4.jfif' },
  //  { reviewerId: 1003, reviewDescription: 'have 18+ years of training experience', trainerImage: '../assets/trainer1.jfif' },
  //  { reviewerId: 1004, reviewDescription: 'teaching environment is very good', trainerImage: '../assets/trainer3.jpg' },
  //  { reviewerId: 1005, reviewDescription: 'clears all our doubts and his lectures give clarity in the topic', trainerImage: '../assets/trainer2.jpg' },
  //]


