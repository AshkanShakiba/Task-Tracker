import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppModule} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API_URL: string;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.API_URL = "http://127.0.0.1:4321/tasks";
  }

  getTasks(): Observable<Task[]> {
    //return of(TASKS);
    return this.http.get<Task[]>(this.API_URL);
  }
}
