import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData{
	message:string
}

@Component({
  selector: 'app-my-dialogue',
  templateUrl: './my-dialogue.component.html',
  styleUrls: ['./my-dialogue.component.css']
})

export class MyDialogueComponent  {
  constructor(
    public dialogRef: MatDialogRef<MyDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
