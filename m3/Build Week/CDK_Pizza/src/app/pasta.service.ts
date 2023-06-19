import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPasta } from './interfaces/ipasta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastaService {

  PASTA_API = environment.PASTA_API

  constructor(private http:HttpClient) { }

  getPasta(){
    return this.http.get<IPasta[]>(this.PASTA_API)
  }
}
