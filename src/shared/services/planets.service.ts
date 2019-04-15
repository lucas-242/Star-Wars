import { ModelPlanet } from './../entities/planet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
//TODO: Environment está vazio

@Injectable()
export class PlanetsService {
    
    constructor(private http: HttpClient){}
    
    getPlanetModel(): Observable<ModelPlanet>{
        return this.http.get<ModelPlanet>('https://swapi.co/api/planets/');
    }
 
}