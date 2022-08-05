import { Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
   selectedAns:any=[];
   correctAns:any=[];
   questions:any=[];
   marks=0;
  ngOnInit(): void {
    this.service.getAnswers().subscribe(res=>{
      this.correctAns=res;
      console.log(this.correctAns)
    })
    this.service.subject.subscribe(res=>{
     this.selectedAns=res;
     console.log(this.selectedAns)
    })
    this.service.getQuestions().subscribe(res=>{
      this.questions=res;
      console.log(this.questions)
      for(let i=0;i<this.questions.length;i++){
        this.questions[i].ans=this.selectedAns[i]?.val;
      }
    })
  }
  
  sendResults(){
    for(let i=0;i<this.selectedAns.length;i++){
      if(this.selectedAns[i].val==this.correctAns[i].correctIndex){
        this.marks++;
        console.log(this.marks)
      }
    }
    this.service.subject.next(this.marks);
    this.router.navigateByUrl('results');
  }
  goBack(){
    this.router.navigateByUrl('')
  }
  
}
