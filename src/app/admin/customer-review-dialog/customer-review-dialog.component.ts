import { Component, Inject } from "@angular/core";
import { CustomerReviewComponent } from "../customer-review/customer-review.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminServiceService } from "../services/admin-service.service";



@Component({
  selector: 'app-customer-review-dialog',
  templateUrl: './customer-review-dialog.component.html',
  styleUrls: ['./customer-review-dialog.component.css']
})
export class CustomerReviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CustomerReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public as : AdminServiceService) { }

  reviewForm = new FormGroup({
    clientName : new FormControl(null, [Validators.required]),
    clientReview : new FormControl(null, [Validators.required])
  });

  submitReview() {
    this.as.submitReviewService(this.reviewForm.value)
    .then((resp) => {
      this.onNoClick();
    },(err)=> {
      
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
