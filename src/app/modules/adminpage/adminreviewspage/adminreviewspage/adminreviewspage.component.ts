import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../../../../shared/services/feedback/feedback.service';
import { Feedback } from '../../../../shared/entities/feedback';

@Component({
  selector: 'adminpage-adminreviewspage',
  templateUrl: './adminreviewspage.component.html',
  styleUrls: ['./adminreviewspage.component.css']
})
export class AdminreviewspageComponent implements OnInit {

  feedbacks: Feedback[]=[];

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
    console.log('..........feedback.........');
    this.feedbackService.getAllFeedbacks().subscribe(data=>{
      this.feedbacks=data.body;
      console.log(this.feedbacks);
    });
  }

  getAllFeedbacks(){
    
  }

}
