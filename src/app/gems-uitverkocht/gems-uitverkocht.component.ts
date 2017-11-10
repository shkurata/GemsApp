import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Edelsteen } from './../edelsteen';
import { GemsAddComponent } from './../gems-add/gems-add.component';
import { EdelsteenService } from './../edelsteen.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-gems-uitverkocht',
  templateUrl: './gems-uitverkocht.component.html',
  styleUrls: ['./gems-uitverkocht.component.css']
})
export class GemsUitverkochtComponent implements OnInit {
  edelstenen: Observable<Edelsteen[]>; 
  
  private schitteringen = [1, 2, 3, 4];
  
  constructor(private edelsteenService: EdelsteenService) {}

  ngOnInit(){
    this.edelstenen = this.edelsteenService.getEdelstenen();
  }

}
