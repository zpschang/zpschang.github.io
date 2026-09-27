// Small interaction helpers for the homepage (English "/" and Chinese "/cn/").
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Show the name in the navbar once the homepage header scrolls out of view.
    var brand = document.querySelector(".brand-autohide");
    var hero = document.querySelector(".hero");
    if (brand && hero && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        brand.classList.toggle("brand-visible", !entries[0].isIntersecting);
      }, { rootMargin: "-60px 0px 0px 0px" }).observe(hero);
    }

    // Keep the reader's place when switching language: carry the current section over as #hash.
    var sw = document.querySelector(".lang-switch a");
    if (sw) {
      sw.addEventListener("click", function () {
        var ids = ["publications", "news", "projects", "join"];
        for (var i = 0; i < ids.length; i++) {
          var el = document.getElementById(ids[i]);
          if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
            sw.href = sw.href.split("#")[0] + "#" + ids[i];
            return;
          }
        }
      });
    }
  });
})();
