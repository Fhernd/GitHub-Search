import { Component, OnInit } from '@angular/core';

import {
  GitHubService 
} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'iz-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : any[];
  repos : any [];
  username: string;
  
  constructor(private gitHubService: GitHubService) {
    
   }

  ngOnInit() {
  }

  searchUser(){
    this.gitHubService.updateUser(this.username);

    this.gitHubService.getUser().subscribe(
      user => {
        this.user = user;
      },
      e => {
        console.log(e);
      }
    );

    this.gitHubService.getRepos().subscribe(
      repos => {
        this.repos = repos;
      }, 
      e => {
        console.log(e);
      }
    )
  }
}
