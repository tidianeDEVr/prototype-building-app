import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ONBOARD_SLIDE } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public onboardSlides: ONBOARD_SLIDE[] = [
    {
      title: 'Play the beat',
      image: 'ob_1.png',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
    },
    {
      title: 'Play the beat',
      image: 'ob_2.png',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
    },
    {
      title: 'Play the beat',
      image: 'ob_3.png',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
    }
  ]
  public slidersOpts:any;

  ngOnInit() {
  }

  goBack(){}

  skip(){
    this.router.navigate(['/login'])
  }
}