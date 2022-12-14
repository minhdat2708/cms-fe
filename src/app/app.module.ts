import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProducerComponent } from './admin/producer/producer.component';
import { CinemaComponent } from './admin/cinema/cinema.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {CinemaTypeComponent} from "./admin/cinema-type/cinema-type.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { AddOrEditCinemaComponent } from './admin/cinema/add-or-edit-cinema/add-or-edit-cinema.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from "@angular/cdk/scrolling";
import { ImagesDialogComponent } from './admin/cinema/images-dialog/images-dialog.component';
import {DeleteDialogComponent} from "./admin/delete-dialog/delete-dialog.component";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import { AddOrEditCinemaTypeComponent } from './admin/cinema-type/add-or-edit-cinema-type/add-or-edit-cinema-type.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AddOrEditProducerComponent } from './admin/producer/add-or-edit-producer/add-or-edit-producer.component';
import { CinemaRoomComponent } from './admin/cinema-room/cinema-room.component';
import { SeatRoomComponent } from './admin/seat-room/seat-room.component';
import { AddCinemaRoomComponent } from './admin/cinema-room/add-cinema-room/add-cinema-room.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ProducerComponent,
    CinemaComponent,
    HomeComponent,
    CinemaTypeComponent,
    DashboardComponent,
    AddOrEditCinemaComponent,
    ImagesDialogComponent,
    DeleteDialogComponent,
    AddOrEditCinemaTypeComponent,
    AddOrEditProducerComponent,
    CinemaRoomComponent,
    SeatRoomComponent,
    AddCinemaRoomComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatDialogModule,
        MatGridListModule,
        ScrollingModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatSlideToggleModule
    ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
