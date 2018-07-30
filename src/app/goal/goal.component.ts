import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goals/goal.service'
import {AlertService} from '../alert-service/alert.service'
import {Goal} from '../goal';
import {Quote} from '../quote-class/quote'
import {HttpClient} from '@angular/common/http'
import {QuoteRequestService} from '../quote-http/quote-request.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService,QuoteRequestService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals:Goal[];
  alertService:AlertService;
  quote:Quote;

  constructor(goalService:GoalService,alertService:AlertService,private http:HttpClient, private quoteService:QuoteRequestService) {
    this.goals = goalService.getGoals();
    this.alertService=alertService;//make the service available to the class
   }

  
   toogleDetails(index) {
     this.goals[index].showDescription = !this.goals[index].showDescription;
    }  
     addNewGoal(goal){
       let goalLength = this.goals.length;
       goal.id=goalLength+1;
       goal.completeDate = new Date(goal.complete)
       this.goals.push(goal)
     }
     deleteGoal(isComplete,index){
       if(isComplete){
         let toDelete=confirm('Are you sure you want to delete ${this.goals[index].name}')
         if (toDelete){
           this.goals.splice(index,1)
           this.alertService.alertMe('Goal has been deleted')
         }
       }
     }
  
  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote=this.quoteService.quote
    
  //   interface ApiResponse{
  //     quote:string;
  //     author:string;
  //   }
  //   this.http.get<ApiResponse>("http://talakis.com/api/quotes/random/").subscribe(data=>{
  //     this.quote = new Quote(data.quote,data.author)
  // },err=>{
  //   this.quote = new Quote("Never,never,never give up.","winston churchill")
  //   console.log("Error occured")

  //   })
   

  }

}
