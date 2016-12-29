import {
    Injectable
} from '@angular/core';
import {
    Http, 
    Headers,
    Response
} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    Observable
} from 'rxjs/Observable';

@Injectable()
export class GitHubService{
    private username: string;

    private client_id = '6afae3d42e33f70c91aa';
    private client_secret = 'c96aa3e1fa8f999691fc183995ceec5e66c896ac';

    constructor(private http: Http) {
        this.username = 'fhernd';
    }

    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}