import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MvUserDetail } from './user-detail.model';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MvUserDetail[] = [];
  userMessage = '';

  constructor(private http: HttpClient, private userDetailService: UserDetailService) { }

  ngOnInit() {

    this.displayedColumns = ['userId', 'userName', 'password', 'firstName', 'middleName', 'lastName', 'email'];
    this.getUserDetail();
  }

  getUserDetail() {
    this.userMessage = '';

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST');
    headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type');

    this.http.get('api/Account/UserDetail', {
      headers: headers,
      params: { json: JSON.stringify({ userId: 2 }) }
    }).subscribe((result: any) => {

      if (result) {
        this.dataSource = [result];
      } else {

        this.dataSource = [];
        this.userMessage = 'No data found !';
      }
    }, error => console.error(error));
  }

  getAllUsers() {
    this.userMessage = '';
    this.userDetailService.getAllUserDetail().subscribe((result: any) => {

      if (result && result.data) {
        this.dataSource = result.data;
      } else {
        this.dataSource = [];
        this.userMessage = 'No data found !';
      }
    });
  }

}
