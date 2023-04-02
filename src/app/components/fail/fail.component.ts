import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent {

  constructor(
    private location: Location
  ) {

  }

  back() {
    this.location.back()
  }
}
