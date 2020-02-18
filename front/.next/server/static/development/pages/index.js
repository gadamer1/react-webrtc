module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/video/Video.js":
/*!***********************************!*\
  !*** ./components/video/Video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/gadamer1/Documents/webdev/react-webrtc/front/components/video/Video.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Video extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_onOfferButton", () => {
      console.log("Offer"); // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer
      // initiates the creation of SDP

      this.pc.createOffer({
        offerToReceiveVideo: 1
      }).then(sdp => {
        // console.log(JSON.stringify(sdp))
        // set offer sdp as local description
        this.pc.setLocalDescription(sdp);
        this.sendToPeer("offerOrAnswer", sdp);
      });
    });

    _defineProperty(this, "_onAnswerButton", () => {
      console.log("Answer");
      this.pc.createAnswer({
        offerToReceiveVideo: 1
      }).then(sdp => {
        // console.log(JSON.stringify(sdp))
        // set answer sdp as local description
        this.pc.setLocalDescription(sdp);
        this.sendToPeer("offerOrAnswer", sdp);
      });
    });

    _defineProperty(this, "sendToPeer", (messageType, payload) => {
      this.socket.emit(messageType, {
        socketID: this.socket.id,
        payload
      });
    });

    this.state = {};
    this.localVideo = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    this.remoteVideo = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    this.textref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  }

  componentDidMount() {
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    } // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.


    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
        } // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise


        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()("https://f0eb8df0.ngrok.io/webrtcPeer", {
      path: "/webrtc"
    });
    this.socket.on("connection-success", success => {
      console.log(success);
    });
    this.socket.on("offerOrAnswer", sdp => {
      this.pc.setRemoteDescription(new RTCSessionDescription(sdp));
      this.textref.value = JSON.stringify(sdp);
    });
    this.socket.on("candidate", candidate => {
      this.pc.addIceCandidate(new RTCIceCandidate(candidate));
    });
    const pc_config = {
      urls: "stun:stun.l.google.com:19302"
    };
    this.pc = new RTCPeerConnection(pc_config);

    this.pc.onicecandidate = e => {
      if (e.candidate) {
        this.socket.emit("candidate", {
          socketID: this.socket.id,
          payload: e.candidate
        });
      }
    };

    this.pc.onconnectionstatechange = e => {
      console.log("onconnectionstatechange", e);
    };

    this.pc.ontrack = e => {
      console.log("ontrack", e.streams[0]);

      if (e.streams && e.streams[0]) {
        this.remoteVideo.current.srcObject = e.streams[0];
      }
    };

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(mediaStream => {
      this.localVideo.current.srcObject = mediaStream;
      console.log("my stream", mediaStream);
      mediaStream.getTracks().map(track => {
        this.pc.addTrack(track, mediaStream);
        console.log(track);
      });
    }).catch(err => console.error(err));
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("video", {
      style: {
        width: 100,
        height: 100,
        backgroundColor: "black"
      },
      ref: this.localVideo,
      autoPlay: true,
      playsInline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), __jsx("video", {
      style: {
        width: 100,
        height: 100,
        marginLeft: 10,
        backgroundColor: "black"
      },
      ref: this.remoteVideo,
      autoPlay: true,
      playsInline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), __jsx("button", {
      onClick: this._onOfferButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "offer button"), __jsx("button", {
      onClick: this._onAnswerButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "answer button"), __jsx("textarea", {
      style: {
        width: 450,
        height: 40
      },
      ref: ref => {
        this.textref = ref;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_video_Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/video/Video */ "./components/video/Video.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gadamer1/Documents/webdev/react-webrtc/front/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




if (false) { var adapter; }

const index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "react video chat"), __jsx(_components_video_Video__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./pages/styles.scss":
/*!***************************!*\
  !*** ./pages/styles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gadamer1/Documents/webdev/react-webrtc/front/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map