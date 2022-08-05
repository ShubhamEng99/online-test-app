import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="http://localhost:8000/";
  
    subject=new BehaviorSubject<any>('');
  constructor(private http:HttpClient) { }
  getQuestions(){
    return this.http.get(this.url+'questions');
  }
  getAnswers(){
    return this.http.get(this.url+'answers')
  }
}
