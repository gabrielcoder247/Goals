import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); // get current date and time
    let todayWithoutime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) //return value in milliseconds
    const secondsInADay = 86400; // 60 seconds*minutes in an hour * 24 hours
    var dateDifferenceSeconds=dateDifference*0.001;//convert to seconds
    var dateCounter = dateDiffereceSeconds/secondsInADay;
    if(dateCounter >= 1){
      return dateCounter;
    }else{
      return 0;
    }

  }

};
