import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherComponent } from './other/other.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot(
      [
        { path: "other", component: OtherComponent },
        { path: "Hello", component: HelloComponent }
      ]
    )],
  declarations: [AppComponent, HelloComponent, OtherComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
