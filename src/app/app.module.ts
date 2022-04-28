import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestapiComponent } from './restapi/restapi.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComponent } from './delete/delete.component';
import { EditpopupComponent } from './editpopup/editpopup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogAddInfoComponent } from './add-info/add-info.component';
import { XemthongtinComponent } from './xemthongtin/xemthongtin.component'
@NgModule({
  declarations: [
    AppComponent,
    RestapiComponent,
    DeleteComponent,
    EditpopupComponent,
    DialogAddInfoComponent,
    XemthongtinComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
