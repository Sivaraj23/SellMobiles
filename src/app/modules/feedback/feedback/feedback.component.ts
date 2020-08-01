import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService} from '../../../shared/services/feedback/feedback.service';
import { FeedbackDto} from '../../../shared/entities/feedbackDto';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  postFeedbackForm = new FormGroup({
    description: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[][A-Za-z]+)*$'), // <-- Allow letters and numbers only
    ]))
  });

  feedbackDto:FeedbackDto=new FeedbackDto();

  constructor(private router: Router,private feedbackService:FeedbackService) {
    this.router.navigateByUrl('/feedback');
   }

  

  ngOnInit() {}

  submit() {
    console.log(this.postFeedbackForm.controls.description.value);
    
        this.feedbackDto.userId=parseInt(localStorage.getItem('userid'));
        console.log(this.feedbackDto.userId);
        this.feedbackDto.description=this.postFeedbackForm.controls.description.value;
    this.feedbackService.postFeedback(this.feedbackDto).subscribe(data=>{
      console.log(data);
    });
    
  }

}
