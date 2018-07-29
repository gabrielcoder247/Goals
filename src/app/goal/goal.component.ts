import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goals/goal.service'
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals:Goal[];
  
  constructor(goalService:GoalService) {
    this.goals = goalService.getGoals()
   }
  
   toogleDetails(index) {
     this.goals[index].showDescription = !this.goals[index].showDescription;
    }
     deleteGoal(isComplete,index){
       if (isComplete)
          var toDelete = confirm('Are you sure want to delete ${this.goals[index].name}')
          if(toDelete){
              this.goals.splice(index,1);
       }
     }
     addNewGoal(goal){
       let goalLength = this.goals.length;
       goal.id=goalLength+1;
       goal.completeDate = new Date(goal.complete)
       this.goals.push(goal)
     }
  
  

  ngOnInit() {
  }

}
