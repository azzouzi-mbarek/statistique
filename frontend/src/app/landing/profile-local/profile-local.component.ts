import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/services/level.service';
import { PersonService } from 'src/app/services/person.service';
import { CountryService } from 'src/app/services/country.service';
import { MapService } from 'src/app/maps/map.service';

@Component({
  selector: 'app-profile-local',
  templateUrl: './profile-local.component.html',
  styleUrls: ['./profile-local.component.css']
})
export class ProfileLocalComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  dtTriggerLevels: Subject<any> = new Subject();
  dtTriggerPersons: Subject<any> = new Subject();
  title = 'Level 2';

  optionsSurface = {
    view: [],
    label: 'Total',
    totalValue: null,
    animations: true,
    tooltipDisabled: false,
    tooltipTemplate: null,
    colorScheme: { domain: [] },
    data: null
  };

  optionsPopulation = {
    view: [],
    label: 'Total',
    totalValue: null,
    animations: true,
    tooltipDisabled: false,
    tooltipTemplate: null,
    colorScheme: { domain: [] },
    data: null
  };

  dataGraphe = [];

  country_id: number;
  level: any;
  levels = [];
  persons = [];
  level_id: number;
  country: any;
  level_stage = null;
  constructor(
    private _route: ActivatedRoute,
    private _levelService: LevelService,
    private _personService: PersonService,
    private _countryService: CountryService,

    private _router: Router,
    private _mapService: MapService
  ) { }


  ngOnInit() {
    this._route.queryParamMap.subscribe(params => {

      this.country_id = +params.get('c');
      this._route.paramMap.subscribe(params2 => {
        this.level_id = +params2.get('id');
        this._levelService.getLevel(this.country_id, this.level_id).subscribe(
          (levelApi: any) => {
            this.level = levelApi.data;

            console.log(this.level);
            this.title = this.level.properties.name + ' Levels 2';
            // this.getGraphSurface(this.level, this.country);
            // this.getGraphPopulation(this.level, this.country);
          },
          error => {
            console.log(error);
          }
        );

      });
    });







    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    // this.getLevels(this.country_id, this.level_id);
    // this.getPersons(this._id);

  }

  getPersons(level_id) {
    this._personService.getPersons(level_id).subscribe(
      (personApi: any) => {

        this.persons = personApi.data;
        this.dtTriggerPersons.next();
      },
      error => {
        console.log(error);
      }
    );
  }

  getLevels(level_id, country_id) {
    this._levelService.getLevels(country_id, level_id).subscribe(
      (levelApi: any) => {

        this.levels = levelApi.data;
        console.log(this.levels);
        this.dtTriggerLevels.next();
      },
      error => {
        console.log(error);
      }

    );
  }

  getGraphSurface(level: any, country_id) {
    const surface_country = this._mapService.getSurface(this.country.geometry);
    this.optionsSurface.view = [200, 200];
    this.optionsSurface.label = 'Area';
    this.optionsSurface.totalValue = surface_country;
    this.optionsSurface.tooltipDisabled = false;
    this.optionsSurface.colorScheme.domain = [
      '#01a48f',
      '#00cbc6',
      '#41e6e1',
      '#b6f3f5'
    ];
    this.optionsSurface.tooltipTemplate = () => {
      return '<ng-template>' + this.level.properties.area + ' km2' + '</ng-template>';
    };
    this.optionsSurface.data = [{ name: level.properties.name, value: this._mapService.getSurface(level.geometry) }];
  }

  getGraphPopulation(level: any, country) {
    this.optionsPopulation.view = [200, 200];
    this.optionsPopulation.label = 'Population ' + level.properties.population_year;
    this.optionsPopulation.totalValue = 1216000000;
    this.optionsPopulation.tooltipDisabled = false;
    this.optionsPopulation.colorScheme.domain = [
      '#00b9ee',

      '#b6f3f5'
    ];
    this.optionsPopulation.tooltipTemplate = () => {
      return '<ng-template>' + this.country.properties.population + ' ' + level.properties.population_year + '</ng-template>';
    };
    this.optionsPopulation.data = [{ name: level.properties.name, value: level.properties.population }];
  }

  gotoAddLevelByFile(id) {
    this._router.navigate([id], {
      relativeTo: this._route
    });
  }
}
