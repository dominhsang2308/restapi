import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MockApi } from '../restapi/mockapi.interface';

@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.scss'],
})
export class EditpopupComponent implements OnInit {
  addFormGroup!:FormGroup;
  editmockapi!: MockApi;
  constructor(
    public dialogRef: MatDialogRef<EditpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MockApi
  ) {
    this.editmockapi = data;

  }
  ngOnInit(): void {
    this.addFormGroup = new FormGroup({
      name: new FormControl(this.editmockapi.name),
      email: new FormControl(this.editmockapi.email),
      age: new FormControl(this.editmockapi.age),
    })
  }
  onNoClick(): void {
    this.dialogRef.close(
      this.addFormGroup.value
    );
  }
}
