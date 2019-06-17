import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  about:any;
  ngOnInit() {

   this.about =  window.location.href.includes('about');
   
    if(isPlatformBrowser(this.platformId)) {
        $(document).ready(function(){
        var a = 0;
        $(window).scroll(function() {        
          var oTop = $('#counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            $('.stat-number').each(function () {
              var size = $(this).text().split(",")[1] ? $(this).text().split(",")[1].length : 0;
              $(this).prop('Counter', 0).animate({
                 Counter: $(this).text()
              }, {
                 duration: 2500,
                 step: function (func:any) {
                    $(this).text(parseFloat(func).toFixed(size));
                 },
                 complete: function() {
                   var val= $(this).text();
                   var cVal = function formatNumber(val) {
                    return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                  }
                  
                  $(this).text(cVal(val)+'+');
                  
                 }
              });            
           });      
            a = 1;
          }         
        });  
      })

    }
  }

}
