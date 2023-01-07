import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public identifier: string='';
  public password:string='';
  public color:string = '#000000'
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/onboard'])
  }

  login(){
    alert(this.identifier+' '+this.password)
  }
}
