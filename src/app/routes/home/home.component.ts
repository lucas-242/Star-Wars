import { Component, OnInit } from '@angular/core';
import { Angular2SwapiService } from 'angular2-swapi';

import { Planet } from 'src/shared/entities/planet';
import { PlanetsService } from 'src/shared/services/planets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**Planetas que estão sendo exibidos */
  planets: Array<Planet> = new Array<Planet>();

  planetsSearched: Array<Planet>;

  /**Número total de planetas da API */
  totalPlanets: number;

  /**Flag que indica se a dica está sendo exibida */
  showHint: boolean = false;

  constructor(private service: PlanetsService, private swapi: Angular2SwapiService) { }

  ngOnInit() {
    this.getPlanetModel();
  }

  /**Efetua uma primeira busca na primeira página de planetas,
   * Seleciona um planeta aleatório para exibição,
   * Preenche o total de planetas na API para futuras consultas
   */
  getPlanetModel() {
    this.planetsSearched = new Array<Planet>();
    this.service.getPlanetModel().subscribe(
      (success) => {
        this.totalPlanets = success.count;
        let randomPlanet = success.results[Math.floor(Math.random() * success.results.length) + 1];
        let planet = new Planet();
        Object.assign(planet, randomPlanet);
        planet.id = randomPlanet != null ? Number(randomPlanet.url.replace(/[^0-9]/g,'')) : 0;
        this.planets.push(planet);
        console.log(this.planets);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**Busca um planeta por Id aleatório */
  getPlanetByRandomId() {
    let id: number = Math.floor(Math.random() * this.totalPlanets) + 1;

    //Verifica se o Planeta está armazenado em "cache"
    if(this.planets.some(planet => planet.id == id)) {
      this.changePlanetPosition(id);
    } else {
      this.swapi.getPlanet(id).subscribe(
        (success)=> {
          let planet = new Planet();
          Object.assign(planet, success);
          planet.id = id;
          this.planets.push(planet);
          this.planetsSearched = new Array<Planet>();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  /**
   * Busca os planetas de acordo com o tipo de parâmetro buscado
   * @param param Parâmetro de busca
   */
  searchPlanets(param) {
    //Verifica se o parâmetro é um um número e então busca planeta por Id
    if (!isNaN(parseFloat(param)) && isFinite(param)) {
      this.searchPlanetById(param);
    }

    //Efetua busca por nome do planeta
    else {
      this.searchPlanetByName(param);
    }

    
  }
  
  /**
   * Busca planeta por Id
   * @param id Id do planeta a ser buscado
   */
  searchPlanetById(id) {

    //Verifica se o id procurando está no range do total de planetas
    if (id > 0 && id <= this.totalPlanets) {
      this.swapi.getPlanet(id).subscribe(
        (success)=> {
          //Verifica se foi encontrado um planeta
          if (success != null) {
            this.planetsSearched = new Array<Planet>();
  
            let id = success != null ? Number(success.url.replace(/[^0-9]/g,'')) : 0;
  
            //Caso o planeta já exista no array de planetas
            if(this.planets.some(planet => planet.id == id)) {
              this.planetsSearched.push(this.changePlanetPosition(id));
            }
            //Acrescenta o planeta caso ele não exista no array de planetas
            else {
              let planet = new Planet();
              planet.id = id;
              Object.assign(planet, success);
              this.planets.push(planet);
              this.planetsSearched.push(planet);
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );      
    } 
    else {
      console.log("Não existe um planeta com o Id informado");
    }

  }

  /**
   * Busca planeta pelo seu nome
   * @param name 
   */
  searchPlanetByName(name) {
    this.swapi.searchPlanets(name).subscribe(
      (success)=> {
        //Verifica se foram encontrados planetas
        if (success.length != 0) {
          this.planetsSearched = new Array<Planet>();
          success.forEach(element => {
            let id = element != null ? Number(element.url.replace(/[^0-9]/g,'')) : 0;
            
            //Caso o planeta já exista no array de planetas
            if(this.planets.some(planet => planet.id == id)) {
              this.planetsSearched.push(this.changePlanetPosition(id));
            }
            //Acrescenta o planeta caso ele não exista no array de planetas
            else {
              let planet = new Planet();
              planet.id = id;
              Object.assign(planet, element);
              this.planets.push(planet);
              this.planetsSearched.push(planet);
            }
          });
        }
        else {
          console.log("Não foram encontrados planetas com esse parâmetro")
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Remove o planeta da posição atual e o adiciona no fim do array
   * @param id Id do planeta
   */
  changePlanetPosition(id: number): Planet {
      let findedPlanet = this.planets.find(planet => planet.id === id);
      let index = this.planets.indexOf(findedPlanet);
      this.planets.splice(index, 1);
      this.planets.push(findedPlanet);
      return findedPlanet;
  }

}
