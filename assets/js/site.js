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

    // Project card videos: posters load once a card is near the viewport; videos load and play only while visible
    // (posters only for reduced motion / data saver).
    var vids = document.querySelectorAll("video[data-autoplay]");
    var showPoster = function (v) {
      if (v.dataset.poster) {
        v.poster = v.dataset.poster;
        delete v.dataset.poster;
      }
    };
    if ("IntersectionObserver" in window) {
      var near = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            showPoster(e.target);
            near.unobserve(e.target);
          }
        });
      }, { rootMargin: "600px 0px" });
      vids.forEach(function (v) { near.observe(v); });
    } else {
      vids.forEach(showPoster);
    }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    if (vids.length && !reduce && !saveData && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) {
            if (v.preload === "none") v.preload = "auto";
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.35 });
      vids.forEach(function (v) { io.observe(v); });
    }

    // Keep the reader's place when switching language: carry the current section over as #hash.
    var sw = document.querySelector(".lang-switch a");
    if (sw) {
      sw.addEventListener("click", function () {
        var ids = ["education", "experience", "publications", "news", "projects", "join"]; // bottom-most first
        // At the very bottom the last sections can no longer reach the upper part of the screen; accept any visible one.
        var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        var limit = window.innerHeight * (atBottom ? 0.85 : 0.4);
        for (var i = 0; i < ids.length; i++) {
          var el = document.getElementById(ids[i]);
          if (el && el.getBoundingClientRect().top < limit) {
            sw.href = sw.href.split("#")[0] + "#" + ids[i];
            return;
          }
        }
      });
    }
  });
})();
