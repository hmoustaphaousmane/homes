import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from "../housinglocation";

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styles: ``
})
export class HousingLocationComponent {
  // add housingLocation property of type HousingLocation
  @Input() housingLocation!: HousingLocation;
}
