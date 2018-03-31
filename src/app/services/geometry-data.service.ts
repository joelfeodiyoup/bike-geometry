import { Injectable } from '@angular/core';
import { IGeometry } from '../models';
import * as data from './bikes/giant-fathom-2.json';

@Injectable()
export class GeometryDataService {

  geometryData: IGeometry[];

  constructor() { }

  getData(): IGeometry[] {
    this.geometryData = data['bikes'];
    return this.geometryData;
  }
}
