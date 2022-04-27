import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddInfoComponent } from '../add-info/add-info.component';
import { ApiService } from './api.service';
import { MockApi } from './mockapi.interface';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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

  constructor(private heroeService: ApiService, public dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(AddInfoComponent);

    dialogRef.afterClosed().subscribe((result) => {
       alert('da thoat')
    });
    // alert('vaoday');
  }
}
