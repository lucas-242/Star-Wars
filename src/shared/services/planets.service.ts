import { ModelPlanet } from './../entities/planet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PlanetsService {

    constructor(private http: HttpClient) {}

    getPlanetModel(): Observable<ModelPlanet> {
        return this.http.get<ModelPlanet>(environment.starWarsApi + 'planets');
    }

}
