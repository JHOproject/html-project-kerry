document.addEventListener("DOMContentLoaded", function () {
  // ==== 文字動畫 ====
  // 字母分開
  var textWrapper = document.querySelectorAll('.animation_title');
  textWrapper.forEach(function (value, item) {
    value.innerHTML = value.textContent.replace(/\S/g, "<li class='letter'>$&</li>");

    anime.timeline()
      .add({
        targets: '.animation_title .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      })
  });


  //==== 地球函式 ====
  function earth(a, b) {
    var width = a,
      height = b,
      speed = -4e-3,
      start = Date.now();

    var sphere = { type: "Sphere" };

    var projection = d3.geo.orthographic()
      .scale(width / 2.1)
      .clipAngle(90)
      .translate([width / 2, height / 2]);

    var graticule = d3.geo.graticule();

    var canvas = d3.select("canvas")
      .attr("width", width)
      .attr("height", height);

    var context = canvas.node().getContext("2d");

    var path = d3.geo.path()
      .projection(projection)
      .context(context);

    d3.json("https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/world-110m.json", function (error, topo) {
      if (error) throw error;

      var land = topojson.feature(topo, topo.objects.land),
        grid = graticule();

      d3.timer(function () {
        var λ = speed * (Date.now() - start),
          φ = -15;

        context.clearRect(0, 0, width, height);

        context.beginPath();
        path(sphere);
        context.lineWidth = .5; //外圍圓形寬度
        context.strokeStyle = "rgba(4, 6, 59, 0%)"; //外圍圓形顏色
        context.stroke();
        context.fillStyle = "transparent"; //球體背景色
        context.fill();

        context.save();
        context.translate(width / 2, 0);
        context.scale(-1, 1);
        context.translate(-width / 2, 0);
        projection.rotate([λ + 180, -φ]);

        context.beginPath();
        path(land);
        context.fillStyle = "rgba(4, 6, 59, 0%)";//板塊背面顏色
        context.fill();

        context.beginPath();
        path(grid);
        context.lineWidth = .5; //經緯度寬度
        context.strokeStyle = "rgba(119,119,119,.5)"; //灰色
        context.stroke();

        context.restore();
        projection.rotate([λ, φ]);

        context.beginPath();
        path(grid);
        context.lineWidth = .5; //經緯線的寬度
        context.strokeStyle = "rgba(119,119,119,.5)";
        context.stroke();

        context.beginPath();
        path(land);
        context.fillStyle = "rgba(4, 6, 59, 0%)"; //板塊正面顏色
        context.lineWidth = .5; //板塊輪廓寬度
        context.strokeStyle = "rgba(4, 6, 59, .2)"; //板塊輪廓顏色
        context.stroke();
      });
    });

    d3.select(self.frameElement).style("height", height + "px");

  }

  // //==== 手機板自動動畫 ====
  // // ----- article1 ------
  // //滾動時加上class
  // function scroll(i) {
  //   let art_img = document.getElementsByClassName("art1_link_img")[i];
  //   let art_cover = document.getElementsByClassName("cover")[i];
  //   let art_text = document.getElementsByClassName("art_link_text")[i];
  //   art_img.classList.add("-on");
  //   art_text.classList.add("-on");
  //   art_cover.classList.add("-on");
  // }

  // //初始化
  // function ini() {
  //   let art_img_all = document.getElementsByClassName("art1_link_img");
  //   let art_cover_all = document.getElementsByClassName("cover");
  //   let art_text_all = document.getElementsByClassName("art_link_text");
  //   for (let i = 0; i < art_img_all.length; i++) {
  //     art_img_all[i].classList.remove("-on");
  //     art_cover_all[i].classList.remove("-on");
  //     art_text_all[i].classList.remove("-on");
  //   }
  // }

  // //----- 改變 -----
  // function change() {
  //   let screen_Width = window.innerWidth;
  //   console.log(screen_Width);
  //   if (screen_Width == 320) {
  //     window.addEventListener("scroll", function (e) {
  //       if (700 > window.scrollY) {
  //         ini();
  //       } else if (1000 > window.scrollY && window.scrollY >= 700) {
  //         ini();
  //         scroll(0);
  //       } else if (1200 > window.scrollY && window.scrollY >= 1000) {
  //         ini();
  //         scroll(1);
  //       } else if (1400 > window.scrollY && window.scrollY >= 1200) {
  //         ini();
  //         scroll(2);
  //       } else if (1800 > window.scrollY && window.scrollY >= 1500) {
  //         ini();
  //         scroll(3);
  //       } else if (2000 > window.scrollY && window.scrollY >= 1800) {
  //         ini();
  //         scroll(4);
  //       } else if (3800 > window.scrollY && window.scrollY >= 2000) {
  //         ini();
  //         ini_quality();
  //       } else if (4200 > window.scrollY && window.scrollY >= 3800) {
  //         ini_quality();
  //       }
  //     });
  //   }
  // }

  // function resize_change() {
  //   window.addEventListener("resize", function () {
  //     let screenWidth = window.innerWidth;
  //     if (screen_Width == 320) {
  //       change();
  //     }
  //   });
  // }

  // //----- article2 quality -----
  // //滾動時加上class
  // function scroll_quality(i, j) {
  //   let ul_quality = document.getElementsByClassName("art2_quality")[j];
  //   let quality_img = ul_quality.getElementsByTagName("img")[i];
  //   let quality_p = ul_quality.getElementsByTagName("p")[i];
  //   quality_img.classList.add("-on");
  //   quality_p.classList.add("-on");
  // }

  // //初始化
  // function ini_quality() {
  //   let ul_quality_all = document.querySelectorAll(".art2_quality");
  //   ul_quality_all.forEach(function (value, item) {
  //     let quality_img_all = value.getElementsByTagName("img");
  //     let quality_p_all = value.getElementsByTagName("p");
  //     for (let i = 0; i < quality_img_all.length; i++) {
  //       quality_img_all[i].classList.remove("-on");
  //       quality_p_all[i].classList.remove("-on");
  //     }
  //   });
  // }

  // //----- 改變 -----
  // function change_quality() {
  //   let screen_Width = window.innerWidth;
  //   console.log(screen_Width);
  //   if (screen_Width == 320) {
  //     window.addEventListener("scroll", function (e) {
  //       if (3800 > window.scrollY && window.scrollY >= 2000) {
  //         ini();
  //       } else if (4200 > window.scrollY && window.scrollY >= 3800) {
  //         ini_quality();
  //         scroll_quality(0, 0);
  //       } else if (4400 > window.scrollY && window.scrollY >= 4200) {
  //         ini_quality();
  //         scroll_quality(1, 0);
  //       } else if (4600 > window.scrollY && window.scrollY >= 4400) {
  //         ini_quality();
  //         scroll_quality(2, 0);
  //       } else if (4800 > window.scrollY && window.scrollY >= 4600) {
  //         ini_quality();
  //         scroll_quality(3, 0);
  //       } else if (5000 > window.scrollY && window.scrollY >= 4800) {
  //         ini_quality();
  //         scroll_quality(0, 1);
  //       } else if (5200 > window.scrollY && window.scrollY >= 5000) {
  //         ini_quality();
  //         scroll_quality(1, 1);
  //       } else if (5400 > window.scrollY && window.scrollY >= 5200) {
  //         ini_quality();
  //         scroll_quality(2, 1);
  //       } else if (5600 > window.scrollY && window.scrollY >= 5400) {
  //         ini_quality();
  //         scroll_quality(3, 1);
  //       } else if (window.scrollY >= 6200) {
  //         ini_quality();
  //       }
  //     });
  //   }
  // }

  //==== 判斷視窗大小 ====
  let screenWidth = window.innerWidth;
  if (screenWidth >= 992) {
    earth(800, 800);
  } else if (screenWidth < 992 && screenWidth >= 768) {
    earth(600, 600);
  } else if (screenWidth < 768 && screenWidth >= 576) {
    earth(450, 450);
  } else if (screenWidth < 576 && screenWidth >= 320) {
    earth(800, 800);
  }

  //==== 當視窗改變時 ====
  window.addEventListener("resize", function () {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 992) {
      earth(800, 800);
    } else if (screenWidth < 992 && screenWidth >= 768) {
      earth(600, 600);
    } else if (screenWidth < 768 && screenWidth >= 576) {
      earth(450, 450);
    } else if (screenWidth < 576 && screenWidth >= 320) {
      earth(600, 600);
    }
  });

  //news輪播
  $(document).ready(function () {
    let liWidth = $('li.art3_link').width();
    $('#art3_button1').click(function () {
      $('ul#art3_link').animate({
        left: liWidth * -1,
      }, 700);
    });
    $('#art3_button2').click(function () {
      $('ul#art3_link').animate({
        left: 0,
      }, 700);
    });
  });

  //==== 執行背景aos動畫 ====
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });


  //==== ScrollMagic ====
  // //場景
  // var controller = new ScrollMagic.Controller();

  // //動畫
  // var mv01 = TweenMax.fromTo('.quality_p', 1, {
  //     y: 100,
  //     opacity: 0 
  // }, {
  //     y: 0,
  //     opacity: 1
  // })

  // //觸發事件
  // new ScrollMagic.Scene({
  //     triggerElement: '#point1',
  // }).setTween(mv01).addIndicators().addTo(controller);
});

