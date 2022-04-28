import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockApi } from '../restapi/mockapi.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  deleteApi!:MockApi
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MockApi,
  ) {}

  ngOnInit(): void {
    //Cài dữ liệu
    this.deleteApi = this.data
  }
  onLeave():void{
    this.dialogRef.close();
  }
  onAccept(){
    console.log('delete')
  }
}
