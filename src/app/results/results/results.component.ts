import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
Correct:any;
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.subject.subscribe(res=>{
      this.Correct=res;
    })
  }
  reattempt(){
this.router.navigateByUrl('');
  }

}
