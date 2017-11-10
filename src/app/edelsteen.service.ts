import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Edelsteen } from './edelsteen';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/mergeMap';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()

export class EdelsteenService {

  // private edelstenenSubject = new BehaviorSubject<Array<any>>([]);
  // edelstenen = this.edelstenenSubject.asObservable();

  constructor(private http: Http) { }

  // changeEdelstenen(edelstenen) {
  //   this.edelstenenSubject.next(edelstenen);
  // }  

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server docs error')
  }

  getEdelstenen(): Observable<Edelsteen[]> {
    console.log("test");
    return this.http.get('http://localhost:3000/edel')
      .map((response: Response) => <Edelsteen[]>response.json().sort((a, b) => { return a.prijs - b.prijs }).reverse())
      .catch(this.handleError);
  }

  addEdelsteen(body: Object) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post('http://localhost:3000/nieuwEdel', bodyString, options)
      .catch(this.handleError)
      .subscribe();
  }
}







