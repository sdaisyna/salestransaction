import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { UtilityService } from './../../core/services/utility.service';
import { MvLogin } from './login.model';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
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
    // private utilityService: UtilityService,
    private router: Router,
    private snackbar: MatSnackBar


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
          console.log(response);
          localStorage.setItem('userId', response.userId);
          this.openSnackbar('Successful login !', 'Dismiss');
          this.router.navigate(['/user-detail']);


        } else {
          this.errorMessage = 'Invalid username or password !';
        }
      });

    }

  }

  openSnackbar(message, action) {
    this.snackbar.open(message, action, {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success']
    });
  }


  ngAfterViewInit(): void {
    this.loginForm.updateValueAndValidity();
  }

  ngOnDestroy(): void {


  }

}
