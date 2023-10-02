import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  // the rating property defines the actual rating value. we also add the input function decorator in order to receive data from the nested component container
  @Input() rating: number = 0;
  //   this is the width of the default five stars. this value will be calculated based on the value of the rating
  cropWidth: number = 75;

//  this function assigns the cropWidth using the rating 
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
