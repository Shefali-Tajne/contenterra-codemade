import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient
               ) { }

  getData() {
   return this.httpclient.get('https://www.reddit.com/r/reactjs.json').toPromise();

}
// getData(): Observable<dataList[]>{
//    return this.httpclient.get<dataList[]>(this.api, headerOption);
// }
}
