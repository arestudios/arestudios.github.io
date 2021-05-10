//SCROLL TO TOP STARTS.  
        /*
        https://youtu.be/qxg2EhCEgOk
        https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        https://stackoverflow.com/questions/64180685/how-to-slow-down-scroll-to-top-speed
        https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
        */
        var mybutton = document.getElementById("back_to_top");
        window.onscroll = function() {
          scrollFunction()
        };

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "grid"; //It was "block". but I want to use "place-items" css property so I have to change it to grid
          } else {
            mybutton.style.display = "none";
          }
        }
        // Bind your button click, scroll direction and effect speed
        document.getElementById("back_to_top").onclick = function() {
          scrollTo(0, 500); // it will take 500 miliseconds seconds to reach to top.

        }

        // Element to move, time in ms to animate
        function scrollTo(element, duration) {
          var e = document.documentElement;
          if (e.scrollTop === 0) {
            var t = e.scrollTop;
            ++e.scrollTop;
            e = t + 1 === e.scrollTop-- ? e : document.body;
          }
          scrollToC(e, e.scrollTop, element, duration);
        }

        // Element to move, element or px from, element or px to, time in ms to animate
        function scrollToC(element, from, to, duration) {
          if (duration <= 0) return;
          if (typeof from === "object") from = from.offsetTop;
          if (typeof to === "object") to = to.offsetTop;

          scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
        }

        function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
          if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo;
            return;
          }
          element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
          t01 += speed * step;
          debugger;
          setTimeout(function() {
            scrollToX(element, xFrom, xTo, t01, speed, step, motion);
          }, step);
        }

        function easeOutCuaic(t) {
          t--;
          return t * t * t + 1;
        }

//SCROLL TO TOP ENDS.  