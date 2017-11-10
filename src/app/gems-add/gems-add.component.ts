import { Component, Input, OnInit, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Edelsteen } from './../edelsteen';
import { GemsListComponent } from './../gems-list/gems-list.component';
import { EdelsteenService } from './../edelsteen.service';

@Component({
  selector: 'app-gems-add',
  templateUrl: './gems-add.component.html',
  styleUrls: ['./gems-add.component.css']
})

@Injectable()

export class GemsAddComponent implements OnInit {
  voegEdelsteenToeForm: FormGroup;
  public schitteringen = [1, 2, 3, 4];
  edelstenen;

  constructor(private edelsteenService: EdelsteenService, private formBuilder: FormBuilder) {
    this.voegEdelsteenToeForm = formBuilder.group({
      'naam': ['', Validators.required],
      'prijs': ['', Validators.required],
      'teKoop': [''],
      'uitverkocht': [''],
      'selSchittering': ['', Validators.required],
      'toegevoegdOp': [new Date()],
    })
  }

   submitEdelsteen(){
    let edelsteen = this.edelsteenService.addEdelsteen(
      new Edelsteen(
        this.voegEdelsteenToeForm.get('naam').value,
        this.voegEdelsteenToeForm.get('prijs').value,
        this.voegEdelsteenToeForm.get('teKoop').value,
        this.voegEdelsteenToeForm.get('uitverkocht').value,
        this.telSterren(this.voegEdelsteenToeForm.get('selSchittering').value),
        this.voegEdelsteenToeForm.get('toegevoegdOp').value
      ));
      
      //this.edelstenen.sort((a, b) => { return a.prijs - b.prijs }).reverse();
      this.voegEdelsteenToeForm.reset({teKoop: '', uitverkocht:'', toegevoegdOp: new Date()});
  }


  ngOnInit() {
    this.edelsteenService.getEdelstenen().subscribe(edelstenen => this.edelstenen = edelstenen)
  }

   telSterren(schittering) {
    let sterren = "";
    for (let i = 0; i < schittering; i++) {
      sterren += "*";
    }
    return sterren;
  }
}