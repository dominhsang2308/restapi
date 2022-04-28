import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockApi } from '../restapi/mockapi.interface';

@Component({
  selector: 'app-xemthongtin',
  templateUrl: './xemthongtin.component.html',
  styleUrls: ['./xemthongtin.component.scss']
})
export class XemthongtinComponent implements OnInit {
  infoapi!:MockApi
  constructor(
    //cấu hình Dialog
    public dialogRef: MatDialogRef<XemthongtinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MockApi,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.infoapi = this.data
  }
  close(){
    this.dialogRef.close();
  }
}
