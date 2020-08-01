import { Component, OnInit } from '@angular/core';
import { FeedbackDto} from '../../../shared/entities/feedbackDto';
import { FeedbackService} from '../../../shared/services/feedback/feedback.service';
import { Feedback } from '../../../shared/entities/feedback';
import { User} from '../../../shared/entities/user';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  user:User;

  feedbacks: Feedback[]=[];

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
    console.log('..........feedback.........');
    this.feedbackService.getAllFeedbacks().subscribe(data=>{
      this.feedbacks=data.body;
      console.log(this.feedbacks);
      console.log(this.feedbacks[0]);
    });
  }
}
