import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-gallery-frec-two',
  templateUrl: './gallery-frec-two.component.html',
  styleUrls: ['./gallery-frec-two.component.scss'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => move',
        animate('2000ms', keyframes([
          style({transform: 'translateX(0) rotateY(0)', offset: 0}),
          style({transform: 'translateX(50%) rotateY(90deg)', offset: 0.33}),
          style({transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66}),
          style({transform: 'translateX(-100%)', offset: 1.0})
        ]))),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class GalleryFrecTwoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  position: String;
  photoUrl = 'https://insider.si.edu/wp-content/uploads/2013/04/800px-Eisb%C3%A4r_1996-07-231.jpg';

  changePosition(newPosition: String) {
    this.position = newPosition;
  }
}
