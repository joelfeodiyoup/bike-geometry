import { Component, OnInit, Input } from '@angular/core';
import { IRenderingValues } from '../models';

@Component({
  selector: 'app-render-svg',
  templateUrl: './render-svg.component.html',
  styleUrls: ['./render-svg.component.css']
})
export class RenderSvgComponent implements OnInit {

  @Input() rv: IRenderingValues;

  constructor() { }

  ngOnInit() {
  }

}
