import { Component,Input, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  lat: number = 40.750690;
  lng: number =  -73.981270;

  latitude_count: number = 40.911500;
  longitude_count: number = -74.156100;
  
  constructor (private httpService: HttpClient) { }
  arrList: string [];
  dArr: string[];

  ngOnInit(){
  this.httpService.get('./assets/data.json').subscribe(
    data => {
      this.arrList = data as string [];	    
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
}   

tConvert(time) {
  time = time.toString ().match (/^([01]*\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) { 
    time = time.slice (1); 
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
    time[0] = +time[0] % 12 || 12; 
  }
  return time.join (''); 
}


dateFunction(date){
  var mystr = date.split('/');
  var myday = mystr[0];
  var month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  for(var i=1; i<=12;i++){
    if(mystr[1] == i+1 )
      mystr = month[i];
  }
  return mystr +'.' +' '+ myday;
}

fullDateFunction(date){
  var date1 = new Date();
  var mystr = date.split('/');
  var reqDate = mystr.reverse();
  var date2 = new Date(reqDate)
  if(date1<date2){
    return true;
  }
}
}
