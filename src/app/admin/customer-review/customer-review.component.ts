import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerReviewDialogComponent } from '../customer-review-dialog/customer-review-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit {
  @ViewChild("delete") delete:SwalComponent
  @ViewChild("success") success:SwalComponent
  constructor(public _admin:AdminServiceService, public dialog: MatDialog, public userService: UserService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  customerReviews = [];

  ngOnInit() {
    this.getReviews((reviews) => {
      this.customerReviews = reviews;
      if (!this.changeDetectorRefs['destroyed']) {
        this.changeDetectorRefs.detectChanges();
      }
    })
  }

  getReviews(cb) {
    this.userService.getClientReviews()
    .on('value', (snapshot)=>{
      this.customerReviews = [];
      let data = snapshot.val();
      for (let i in data) {
        data[i].id = i;
        this.customerReviews.push(data[i]);
      }
      console.log(this.customerReviews);
      cb(this.customerReviews);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerReviewDialogComponent, {
          
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  open(id){
    this.delete.show()
        .then((res)=>{
          if(res.value){
            this._admin.deleteReview(id)
                .then((res)=>{
                  this.success.show();
                })
          }
          else{
            console.log("Dont Want to delete");
          }
        })
  }
}
