import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goals/goal.service'
import {AlertService} from '../alert-service/alert.service'
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals:Goal[];
  alertService:AlertService;
  
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
  
     constructor(goalService:GoalService,alertService:AlertService) {
      this.goals = goalService.getGoals();
      this.alertService=alertService;//make the service available to the class
     }
  

  ngOnInit() {
  }

}
