import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockApi } from '../restapi/mockapi.interface';
@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss'],
})
export class DialogAddInfoComponent implements OnInit {
  addFormGroup: FormGroup = new FormGroup({
    name: new FormControl('Sang'),
    email: new FormControl('Alibaba@gmail.com'),
    age: new FormControl(40),
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MockApi
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
