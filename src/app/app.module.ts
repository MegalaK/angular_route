import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ckumarcomponent } from '../kumarapp/kumarcomponent'
import { CMegalacomponent } from '../megalaapp/megalacomponent'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kumar',
    component: Ckumarcomponent
  },
  {
    path: 'megala',
    component: CMegalacomponent
  }
];



@NgModule({
  declarations: [
    AppComponent
    , Ckumarcomponent
    , CMegalacomponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  exports:[],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [AppComponent ]
})



export class AppModule { 


}
