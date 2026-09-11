/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  function initPreloader() {
    if (window.__preloaderStarted) return;
    window.__preloaderStarted = true;
    if (typeof gsap === "undefined") {
      const el = document.querySelector(".preloader");
      if (el) el.style.display = "none";
      return;
    }
    // Create GSAP timeline
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    // Text animation
    tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      // SVG curve animation
      .to(svg, {
        duration: 0.6,
        attr: { d: curve },
        ease: "power2.inOut",
      })
      // Flatten SVG
      .to(svg, {
        duration: 0.6,
        attr: { d: flat },
        ease: "power2.inOut",
      })
      // Slide preloader up
      .to(".preloader", {
        y: "-130%",
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Remove from DOM flow
      .set(".preloader", {
        display: "none",
        zIndex: -1,
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPreloader);
  } else {
    initPreloader();
  }

  ////////////////////////////////////////////////////
  // 02. Sticky & Back-to-top Throttle (Passive rAF)
  let scrollTicking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!scrollTicking) {
        window.requestAnimationFrame(function () {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const header = document.querySelector(".header");
          if (header) {
            if (scrollY >= 260) {
              header.classList.add("fixed-header");
            } else {
              header.classList.remove("fixed-header");
            }
          }
          const backToTop = document.querySelector(".back-to-top-wrapper");
          if (backToTop) {
            if (scrollY > 300) {
              backToTop.classList.add("back-to-top-btn-show");
            } else {
              backToTop.classList.remove("back-to-top-btn-show");
            }
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js (Only animate once to prevent continuous DOM reflows)
  AOS.init({
    once: true, // animation happens once when scrolled into view
    offset: 40,
    duration: 500,
    easing: "ease-out",
    disableMutationObserver: true,
  });

  // 08. Backtotop Click Handler
  function back_to_top() {
    var btn = $("#back_to_top");
    btn.on("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }

    initRipples();
  });
})(jQuery);
