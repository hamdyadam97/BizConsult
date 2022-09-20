import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          nav: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          items: 3,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false,
          autoplay:true
          
        });
      });
    })(jQuery);
    }

}
