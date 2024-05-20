import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RowInterface} from "./row-interface";

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public get_players(): Observable<RowInterface[]> {
    return this.http.get<RowInterface[]>(`${this.url}/get_players/`);
  }

  public parse_data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/parse_data/`);
  }
}
