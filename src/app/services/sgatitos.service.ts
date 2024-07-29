import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGatitos } from '../interfaces/igatitos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SGatitosService {

  constructor(private http:HttpClient) { }

  listarGatitos(): Observable<IGatitos> {
    return this.http.get<IGatitos>(`${environment.apiURL}/gatitos`);
  }
}
