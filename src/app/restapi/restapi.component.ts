import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAddInfoComponent } from '../add-info/add-info.component';
import { ApiService } from './api.service';
import { MockApi } from './mockapi.interface';
import { DeleteComponent } from '../delete/delete.component';
import { EditpopupComponent } from '../editpopup/editpopup.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { matTooltipAnimations } from '@angular/material/tooltip';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { XemthongtinComponent } from '../xemthongtin/xemthongtin.component';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.scss'],
})
export class RestapiComponent implements OnInit {
  // heroes!: Hero[];
  // api!: string;
  // chohungso!: number;
  // hungdulieu!: string;
  displayedColumns: string[] = ['id', 'name', 'age', 'email', 'menu'];
  html = new MatTableDataSource<MockApi>();
  posts = [];
  comments!: MockApi[];
  addformGroup = new FormGroup({
    name: new FormControl('Sang'),
    email: new FormControl('s'),
    age: new FormControl(1),
  });
  constructor(
    private heroeService: ApiService,
    public dialog: MatDialog,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.heroeService.getMockApi().subscribe(
      (data) => {
        this.comments = data;
        this.html = new MatTableDataSource<MockApi>(this.comments);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Xong');
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.html.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddInfoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      alert('da thoat');
    });
    // alert('vaoday');
  }
  deleteDialog(element:MockApi): void {
    const dialogRef = this.dialog.open(DeleteComponent,{data:element});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Xác nhận đóng');
      this.addformGroup = result;
    });
  }
  editDialog(element: MockApi): void {
    const dialogRef = this.dialog.open(EditpopupComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('This Close');
      this.addformGroup.setValue(result);
    });
  }
  InfoDialog(element:MockApi): void {
    const dialogRef = this.dialog.open(XemthongtinComponent,{
      data:element,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}