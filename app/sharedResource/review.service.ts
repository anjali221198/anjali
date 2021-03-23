import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from '../model/i-review';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url: string = "../assets/Review.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";





  constructor(private httpClient: HttpClient) { }
  getReviews(): Observable<IReview[]> {
    return this.httpClient.get<IReview[]>(this.url)
  }
}

