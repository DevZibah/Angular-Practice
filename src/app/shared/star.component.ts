import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
    // the rating property defines the actual rating value
  rating: number = 4;
//   this is the width of the default five stars. this value will be calculated based on the value of the rating
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
