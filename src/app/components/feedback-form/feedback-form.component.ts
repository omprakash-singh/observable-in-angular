import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackFormService } from 'src/app/service/feedback-form.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnDestroy {

  constructor(
    private service: FeedbackFormService,
    private router: Router,
    private sub: Subscription
  ) { }

  loading: boolean = false;

  onSubmit(data: NgForm) {
    this.loading = true;
    data.resetForm();
    this.sub = this.service.saveFeedbackData(data.value).subscribe((doc: any) => {
      this.loading = false;
      this.router.navigate(['/success'])
    }, (e) => {
      this.loading = false;
      this.router.navigate(['/fail'])
    })
  }


  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
