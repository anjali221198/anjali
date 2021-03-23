import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginS: string; users = [{ "emailid": "anjali@gmail.com", "password": "anjali@123" }, { "emailid": "def@gmail.com", "password": "def@123" }]

  constructor(private router: Router) { }

  onClickSubmit(data) {     //alert("Entered Email id : " + data.emailid);     //alert("Entered Password : " + data.password);     //if (data.emailid == 'admin' && data.password == 'admin') {     //  //this.loginS = 'Success';     //  //window.location.href = "/Home";     //  this.router.navigateByUrl("/Home");     //}     //else {     //  this.loginS = 'Invalid User Credentials';     //}

    for (let user of this.users) {
      if ((data.emailid == user.emailid) && (data.password == user.password))
      {         //this.loginS = true;
        this.router.navigateByUrl("/home");
        //this.router.navigate([`Gateway`])
      }
    } this.loginS = 'Invalid User Credentials';
  }


      }


    
