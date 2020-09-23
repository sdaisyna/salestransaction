import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MvUserDetail } from './user-detail.model';
import { UserDetailService } from './user-detail.service';
import { map, mergeMap } from 'rxjs/operators';
import { MatError } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userMessage: string = null;
  displayedColumns: string[];
  dataSource: MvUserDetail[] = [];

  constructor(
    private userDetailService: UserDetailService) { }

  ngOnInit(): void {

    this.displayedColumns = ['userId', 'userName', 'password', 'firstName', 'middleName', 'lastName', 'email'];
    this.getUserDetail();
  }

  getUserDetail() {

    // tslint:disable-next-line: radix
    const userId = parseInt(localStorage.getItem('userId'));
    this.userDetailService.getUser(userId).subscribe((data: any) => {
      if (data) {
        this.dataSource = [data];
        console.log(Response);
      } else {
        this.dataSource = [];
        console.log('no data');
      }
    });

  }

  getAllUsers() {
    this.userDetailService.getAllUserDetail().subscribe((data: any) => {

      if (data && data.data) {
        this.dataSource = data.data;
      } else {
        this.dataSource = [];
        this.userMessage = 'No data found !';
      }
    });
  }

}
