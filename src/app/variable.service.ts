import { Injectable } from '@angular/core';
import { Data } from './variable';
import { DATAS, DATASLINE, DATASPIE } from './mock-variables';
//import { Observable, of } from 'rxjs';

@Injectable()
export class VariableService {

  constructor() { }

  getHeroes(): Data[] {
    return DATAS;
  }

  getDatasLine(): any {
    console.log(DATASLINE);
    return DATASLINE;
  }

  getDatasPie(): any {
    return DATASPIE;
  }

  // getHeroes(): Observable<Data[]> {
  //   return of(DATAS);
  // }
}