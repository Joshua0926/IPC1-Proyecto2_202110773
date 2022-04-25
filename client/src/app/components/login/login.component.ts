import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private cookieService: CookieService) { }

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password:['', Validators.required]
    })
  
  }






   login(){
    this.http.get<any>("http://localhost:3000/Users")
    .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password


      });
      if(user){
        alert("Ingresado Correctamente");
        this.loginForm.reset();
        this.cookieService.set('token_access', res.AccessToken, 4, '/'); 
        this.router.navigate(['pokeTodos']) 

      }else{
        alert("Usuario No Encontrado");
      }
  },err=>{
      alert("Something went wrong")
    })

  
  }

}
