import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: DataService,private router:Router) { }
  questions:any;
  currQues:any;
  currIndex=0;
  selectedAns:any=[];
  disable=true;
  @Output() SelectedItems = new EventEmitter<any>();
  ngOnInit(): void {
    this.service.getQuestions().subscribe(res=>{
      console.log(res)
      this.questions=res;
      this.currQues=this.questions[this.currIndex];
    })
  }
  add(e:Event,key:any,val:any){
   console.log(e.target,val);
   let obj={
    ansId:key,
    val:val
   }
   if(this.selectedAns.length && this.selectedAns[this.selectedAns?.length-1].ansId==key){
    this.selectedAns.pop();
    this.selectedAns.push(obj);
   }else{
    this.selectedAns.push(obj);
   }
   this.disable=false;
  }
  showNext(){   
    if(this.disable){
      alert('select at least one option');
      return;
    }
    this.currQues=this.questions[++this.currIndex];
    this.disable=true;
  }
  showPrev(){
    this.currQues=this.questions[--this.currIndex]
  }
  Review(){
    this.service.subject.next(this.selectedAns);
    this.router.navigateByUrl('review');
  }
}
