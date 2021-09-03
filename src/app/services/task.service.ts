import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {Observable} from "rxjs";
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
    this.API_URL = "http://127.0.0.1:8787/tasks";
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  deleteTask(task: Task): Observable<Task> {
    let url=`${this.API_URL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
