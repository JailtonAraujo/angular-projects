import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Endereco } from '../Endereco';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove (id:Number ){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id:Number):Observable<Animal>{
      return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  getEndereco(cep:string):Observable<Endereco>{
      return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
  
}
