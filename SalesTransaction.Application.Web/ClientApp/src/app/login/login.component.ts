import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from './../../core/services/utility.service';
import { MvLogin } from './login.model';
import { LoginService } from './login.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  loginForm: FormGroup;
  errorMessage: any;
  login: MvLogin = <MvLogin>{};

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    private utilityService: UtilityService,
    private router: Router


  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  submitForm() {
    this.errorMessage = '';

    if (this.loginForm.valid) {
      this.login.userName = this.loginForm.get('userName').value.trim();
      this.login.password = this.loginForm.get('password').value.trim();

      this.loginService.getLogin(this.login).subscribe((response: any) => {

        if (response) {
          // this.utilityService.openSnackbar('Successful login !', 'success');
          this.router.navigate(['/user-detail']);
          console.log(response);

        } else {
          this.errorMessage = 'Invalid username or password !';
        }
      });

    }

  }


  ngAfterViewInit(): void {
    this.loginForm.updateValueAndValidity();
  }

  ngOnDestroy(): void {


  }

}
