import { Component } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html'
})
export class ColorsComponent {
    nums = Array(10).fill(1).map((v, i) => v + i);
    colors = [];
}
