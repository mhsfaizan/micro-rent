import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';
import { UserService } from '../services/user.service.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService, private changeDetectorRefs: ChangeDetectorRef) { }

  options1 = {
    indicators: true,
    fullWidth: true
  };

  clientReviews = [];

  ngOnInit() {
    this.getReviews((Eeviews) => {
      this.clientReviews = Eeviews;
      if (!this.changeDetectorRefs['destroyed']) {
        this.changeDetectorRefs.detectChanges();
      }

      var elems1 = document.querySelectorAll('.client-carousal');
      var instances = M.Carousel.init(elems1, this.options1);
      setInterval(() => {
        var instance = M.Carousel.getInstance(elems1[0]);
        instance.next();
      }, 5000);
    });

  }

  getReviews(cb) {
    this.userService.getClientReviews()
      .on("value", (snapshot) => {
        this.clientReviews = [];
        let data = snapshot.val();
        for (let i in data) {
          this.clientReviews.push(data[i]);
        }
        console.log(this.clientReviews)
        cb(this.clientReviews);
      }, (err) => console.log(err));
  }
}
