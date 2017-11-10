import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routes';
import { HttpModule, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { GemsListComponent } from './gems-list/gems-list.component';
import { SorteerAflopendPipe } from './sorteer-aflopend.pipe';
import { OrderByPipePipe } from './order-by-pipe.pipe';
import { GemsAddComponent } from './gems-add/gems-add.component';

import { EdelsteenService } from './edelsteen.service';
import { HeaderComponent } from './header.component';
import { GemsUitverkochtComponent } from './gems-uitverkocht/gems-uitverkocht.component';


@NgModule({
  declarations: [
    AppComponent,
    GemsListComponent,
    SorteerAflopendPipe,
    OrderByPipePipe,
    GemsAddComponent,
    HeaderComponent,
    GemsUitverkochtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [ 
   EdelsteenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
