import { Injectable } from '@angular/core';
import { IGeometry } from '../models';
import * as data from './bikes/giant-defy-advanced-2.json';

@Injectable()
export class GeometryDataService {

  geometryData: IGeometry[];

  constructor() { }

  getData(): IGeometry[] {
    const d = data[0];
    this.geometryData = [];
    this.geometryData.push(d);
    return this.geometryData;
  }
}
