import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apidata :any=[];
  finaldata : any = [];

  scroll_value: boolean = false;

  constructor(private httpservice : DataService) { }

   ngOnInit(): void {

      this.httpservice.getData().then((e:any)=>{ 
         
         e.data.children.forEach(element => {
            this.finaldata.push(element);
         });
         this.finaldata.forEach(element => {
            var tempdata = {
               title: element.data.title,
               selftext_html: element.data.selftext_html,
               url: element.data.url,
               score: element.data.score
            }
            this.apidata.push(tempdata);
         });
      });
      if(this.apidata.selftext_html===null){
         this.scroll_value=true;
         console.log(this.scroll_value)
      }console.log(this.scroll_value)
   }
}
