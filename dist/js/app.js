/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/app.js":
      /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
      /***/ () => {
        var app = new Vue({
          el: "#app",
          data: {
            menuLinks: [
              {
                path: "#",
                title: "home",
              },
              {
                path: "#",
                title: "mission",
              },
              {
                path: "#",
                title: "causes",
              },
              {
                path: "#",
                title: "journal",
              },
              {
                path: "#",
                title: "donate",
              },
            ],
            liveStats: [
              {
                icon: "far fa-heart",
                stat: 2032,
                desc: "Volunteers Worldwide",
              },
              {
                icon: "fas fa-globe",
                stat: 132,
                desc: "Active projects",
              },
              {
                icon: "fas fa-dollar-sign",
                stat: "3.8M",
                desc: "Donated",
              },
            ],
            values: [
              {
                icon: "fas fa-tint",
                title: "Clean Water",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
              },
              {
                icon: "fas fa-stethoscope",
                title: "Vaccinations",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
              },
              {
                icon: "fas fa-graduation-cap",
                title: "Education",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
              },
              {
                icon: "fab fa-pagelines",
                title: "Farming",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
              },
            ],
            articles: [
              /*  {
      image: "./dist/img/photo-1444213007800-cff19e1677ac.jpg",
      title: "Understanding community complexities",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
    }, */
              {
                image:
                  "./dist/img/photo-1444664597500-035db93e2323-177x142.jpg",
                title: "The human story of uniqueness",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
              },
              {
                image:
                  "./dist/img/photo-1447430617419-95715602278e-177x142.jpg",
                title: "Sustainable trade tactis",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
              },
              {
                image:
                  "./dist/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
                title: "Farmers making a difference",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
              },
              {
                image:
                  "./dist/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
                title: "Meeting remote tribes in Perù",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
              },
            ],
            socialLinks: [
              {
                path: "#",
                icon: "fab fa-facebook-f",
              },
              {
                path: "#",
                icon: "fab fa-instagram",
              },
              {
                path: "#",
                icon: "fab fa-twitter",
              },
              {
                path: "#",
                icon: "fab fa-youtube",
              },
            ],
          },
          methods: {},
          computed: {},
          mounted: function mounted() {},
        });

        /***/
      },

    /***/ "./src/app.scss":
      /*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ result = fn();
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ "/js/app": 0,
      /******/ "css/app": 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = (chunkId) =>
      installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ for (moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) var result = runtime(__webpack_require__);
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkIds[i]] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self["webpackChunkproj_html_vuejs"] =
      self["webpackChunkproj_html_vuejs"] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/ __webpack_require__.O(undefined, ["css/app"], () =>
    __webpack_require__("./src/app.js")
  );
  /******/ var __webpack_exports__ = __webpack_require__.O(
    undefined,
    ["css/app"],
    () => __webpack_require__("./src/app.scss")
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
