// The locomotive

// Do not give height to the main :
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// The locomotive scroll ends :

function CursorEffect() {
  // The animation of the following :
  let pagecontent = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  // adding the event listner named the mouse move :

  // todo The following will give the cursor movement :

  // The following solution is not smooth but the following uaes the pure form of the java script :

  // pagecontent.addEventListener("mousemove",function(dets){
  //     cursor.style.left=dets.x+"px"
  //     cursor.style.top=dets.y+"px"
  // })

  // !the second method is the use of the gasp method in the following way :

  pagecontent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  // todo The code of the page 2 :::

  pagecontent.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  pagecontent.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

CursorEffect();

function page2animation() {
  gsap.from(".elem h1 span", {
    y:50,
    stagger: .2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main",
      start: "top top%",
      end: "top 1vh",
      delay:0,
      scrub: 2,
    }
  });

    gsap.from(".elem .line",
    {
      x:-1000,
      stagger: .2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 100%",
        end: "top 1%",
        scrub: 2,
      }
    }
)};

page2animation();



var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 4600,
      parallax: true,
      // effect: "coverflow",
     
      // centeredSlides: false,
      // slidesPerView: "auto",
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        // waitForTransition:false,
      },
    });

    var t1=gsap.timeline()
    t1.from(".loader h2",{
      x:80,
      opacity:0,
      duration:1,
      stagger:.1
    })

    t1.to(".loader h2" ,{
      x:-20,
      opacity:0,
      duration:1,
      stagger:-.1
    })
    t1.to(".loader",{
      stagger:1,
      display:"none",
    })
    t1.to(".loader",{
      opacity: 0,
      duration:0.5
    })
    t1.from(".page1-content h1 span",
    {
        y:100,
        opacity:0,
        stagger:.1,
        duration :1

    })


    // Page 4 cursor effect

    // Page 4 animation:
    function page4animation() {
      gsap.from(".elem2 h1 span", {
        y: 240,
        stagger: .2,
        duration: 1,
        scrollTrigger: {
          trigger: ".page4",
          scroller: "#main",
          start: "top 400%",
          end: "top .5%",
          delay:0,
          scrub: 2,
        }
      });
    
        gsap.from(".elem2 .line2",
        {
          x:-1000,
          stagger: .2,
          duration: 1,
          scrollTrigger: {
            trigger: ".page4",
            scroller: "#main",
            start: "top 800%",
            end: "top .5%",
            scrub: 2,
          }
        }
    )};
    
    page4animation();
    
    
    function CursorEffectPage4() {
      // The animation of the following :
      let pagecontent1 = document.querySelector(".vidClass");
      var cursor2 = document.querySelector(".cursor2");
    
      // adding the event listner named the mouse move :
    
      // todo The following will give the cursor movement :
    
      // The following solution is not smooth but the following uaes the pure form of the java script :
    
      // pagecontent1.addEventListener("mousemove",function(dets){
      //     cursor2.style.left=dets.x+"px"
      //     cursor2.style.top=dets.y+"px"
      // })
    
      // !the second method is the use of the gasp method in the following way :
    
      pagecontent1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor2, {
          x: dets.x-830,
          y: dets.y-260,
        });
      });
    
      // todo The code of the page 2 :::
    
      pagecontent1.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
          scale: 1,
          opacity: 1,
        });
      });
    
      pagecontent1.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
          scale: 0,
          opacity: 0,
        });
      });
    }
    
    CursorEffectPage4();

    function page5animation() {
      gsap.from(".elem3 h1 span", {
        y: 240,
        stagger: .2,
        duration: 1,
        scrollTrigger: {
          trigger: ".page5",
          scroller: "#main",
          start: "top 500%",
          end: "top .5%",
          delay:0,
          scrub: 2,
        }
      });
    
        gsap.from(".elem3 .line3",
        {
          x:-1000,
          stagger: .2,
          duration: 1,
          scrollTrigger: {
            trigger: ".page4",
            scroller: "#main",
            start: "top 800%",
            end: "top .5%",
            scrub: 2,
          }
        }
    )};
    
    page5animation();


    gsap.from(".endlast1 h1 ",
    {
      y:-500,
      stagger: .2,
      duration: 1,
      scrollTrigger: {
        trigger: ".endlast1",
        scroller: "#main",
        start: "top 500%",
        end: "top 501 %",
        scrub: 2,
      }
    });



   
    

    



   