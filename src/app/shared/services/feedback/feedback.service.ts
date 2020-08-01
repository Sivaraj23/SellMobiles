import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Feedback} from '../../entities/feedback';
import { FeedbackDto} from '../../entities/feedbackDto';
import {API_URL} from '../../utilities/url.api';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackDto: FeedbackDto=new FeedbackDto();
  id:any;
  FEEDBACK_URL=API_URL.feedback+'/postFeedback';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) { }

  postFeedback(feedbackDto:FeedbackDto){
    this.feedbackDto=feedbackDto;
    return this.http.post(this.FEEDBACK_URL,this.feedbackDto,{'responseType':'text'})

  }

  getAllFeedbacks(): Observable<any>{
    console.log('service');
    return this.http.get(API_URL.feedback+'/getAllFeedbacks', { 'responseType': 'json' });
  }
  
}
