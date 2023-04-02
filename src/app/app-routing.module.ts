import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { SuccessComponent } from './components/success/success.component';
import { FailComponent } from './components/fail/fail.component';
import { MatrialModule } from './matrial/matrial.module';

const routes: Routes = [
  {
    path: '',
    component: FeedbackFormComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'fail',
    component: FailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }),
    MatrialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
