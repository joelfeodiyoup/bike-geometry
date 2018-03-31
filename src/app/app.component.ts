import { Component, OnInit } from '@angular/core';
import { IGeometry, IRenderingValues } from './models';
import { Raphael } from 'raphael';
import { GeometryDataService } from './services/geometry-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: IGeometry[];
  tyreWidth = 25;
  viewHeight = 1000;
  viewWidth: number;
  groundHeight = 30;
  color = 'blue';
  bike1: IGeometry;
  bike2: IGeometry;

  rv: IRenderingValues[];

  constructor(private dataService: GeometryDataService) {

  }

  ngOnInit() {
    console.log('hello');
    this.data = this.dataService.getData();
    console.log('data: ' + this.data);
    this.rv = [];
    for (let i = 0; i < this.data.length; i++) {
      this.rv[i] = this.calculateRenderingValues(this.data[i]);
    }
  }

  calculateRenderingValues(geometry: IGeometry): IRenderingValues {

    const values = {} as IRenderingValues ;

    values.viewHeight = this.viewHeight;
    values.groundHeight = this.groundHeight;
    values.color = this.color;

    // wheel diameter
    if (geometry.wheelSize.toLowerCase() === '700c') {
      values.wheelDiameter = 622 + 2 * this.tyreWidth;
    } else if (geometry.wheelSize.toLowerCase() === '29') {
      values.wheelDiameter = 740;
    }
    values.wheelRadius = values.wheelDiameter / 2;

    values.viewWidth = values.wheelDiameter + geometry.wheelbase;

    // ground
    values.groundStartX = 0 ;
    values.groundEndX = geometry.wheelbase + values.wheelDiameter;
    values.groundStartY = values.viewHeight - values.groundHeight ;
    values.groundEndY = values.viewHeight - values.groundHeight;

    // rear wheel
    values.rearWheelX = values.wheelDiameter / 2;
    values.rearWheelY = values.viewHeight - ( values.wheelRadius + values.groundHeight ) ;

    // front wheel
    values.frontWheelX = values.rearWheelX + geometry.wheelbase;
    values.frontWheelY = values.rearWheelY;

    // bottom bracket
    values.bottomBracketX = values.rearWheelX + Math.sqrt( geometry.chainStayLength ** 2 - geometry.bottomBracketDrop ** 2 );
    values.bottomBracketY = values.rearWheelY + geometry.bottomBracketDrop;

    // top of seat tube
    values.seatTubeX = values.bottomBracketX -
      Math.cos(this.toRadians(geometry.seatTubeAngle)) * geometry.seatTubeLength;
    values.seatTubeY = values.bottomBracketY -
      Math.sin(this.toRadians(geometry.seatTubeAngle)) * geometry.seatTubeLength;

    // top of head tube
    values.topHeadTubeX = values.bottomBracketX + geometry.reach;
    values.topHeadTubeY = values.bottomBracketY - geometry.stack;

    // bottom of head tube
    values.bottomHeadTubeX = values.topHeadTubeX +
      Math.cos(this.toRadians(geometry.headTubeAngle)) * geometry.headTubeLength;
    values.bottomHeadTubeY = values.topHeadTubeY +
      Math.sin(this.toRadians(geometry.headTubeAngle)) * geometry.headTubeLength;

    return values;
  }

  toRadians (angle): number {
    return angle * (Math.PI / 180);
  }

  setData(value) {
    // console.log(value);
  }
}
