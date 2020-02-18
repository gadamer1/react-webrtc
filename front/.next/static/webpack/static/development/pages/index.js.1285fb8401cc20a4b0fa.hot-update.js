webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/video/Video.js":
/*!***********************************!*\
  !*** ./components/video/Video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/gadamer1/Documents/webdev/react-webrtc/front/components/video/Video.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var Video =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Video, _PureComponent);

  function Video(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Video);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Video).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onOfferButton", function () {
      console.log("Offer"); // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer
      // initiates the creation of SDP

      _this.pc.createOffer({
        offerToReceiveVideo: 1
      }).then(function (sdp) {
        // console.log(JSON.stringify(sdp))
        // set offer sdp as local description
        _this.pc.setLocalDescription(sdp);

        _this.sendToPeer("offerOrAnswer", sdp);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onAnswerButton", function () {
      console.log("Answer");

      _this.pc.createAnswer({
        offerToReceiveVideo: 1
      }).then(function (sdp) {
        // console.log(JSON.stringify(sdp))
        // set answer sdp as local description
        _this.pc.setLocalDescription(sdp);

        _this.sendToPeer("offerOrAnswer", sdp);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "sendToPeer", function (messageType, payload) {
      _this.socket.emit(messageType, {
        socketID: _this.socket.id,
        payload: payload
      });
    });

    _this.state = {};
    _this.localVideo = Object(react__WEBPACK_IMPORTED_MODULE_9__["createRef"])();
    _this.remoteVideo = Object(react__WEBPACK_IMPORTED_MODULE_9__["createRef"])();
    _this.textref = Object(react__WEBPACK_IMPORTED_MODULE_9__["createRef"])();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

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
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(new Error("getUserMedia is not implemented in this browser"));
          } // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise


          return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }

      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_10___default()("https://f0eb8df0.ngrok.io/webrtcPeer", {
        path: "/webrtc"
      });
      this.socket.on("connection-success", function (success) {
        console.log(success);
      });
      this.socket.on("offerOrAnswer", function (sdp) {
        _this2.pc.setRemoteDescription(new RTCSessionDescription(sdp));

        _this2.textref.value = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(sdp);
      });
      this.socket.on("candidate", function (candidate) {
        _this2.pc.addIceCandidate(new RTCIceCandidate(candidate));
      });
      var pc_config = {
        urls: "stun:stun.l.google.com:19302"
      };
      this.pc = new RTCPeerConnection(pc_config);

      this.pc.onicecandidate = function (e) {
        if (e.candidate) {
          _this2.socket.emit("candidate", {
            socketID: _this2.socket.id,
            payload: e.candidate
          });
        }
      };

      this.pc.onconnectionstatechange = function (e) {
        console.log("onconnectionstatechange", e);
      };

      this.inboundStream = null;

      this.pc.ontrack = function (e) {
        console.log("ontrack", e);

        if (e.streams && e.streams[0]) {
          _this2.remoteVideo.current.srcObject = e.streams[0];
        } else {
          if (!_this2.inboundStream) {
            _this2.inboundStream = new MediaStream();
            _this2.remoteVideo.current.srcObject = _this2.inboundStream;
          }

          _this2.inboundStream.addTrack(e.track);
        }
      };

      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(function (mediaStream) {
        _this2.localVideo.current.srcObject = mediaStream;
        mediaStream.getTracks().reduce(function (track) {
          _this2.pc.addTrack(track);

          console.log(track);
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
          lineNumber: 140
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
          lineNumber: 146
        },
        __self: this
      }), __jsx("button", {
        onClick: this._onOfferButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "offer button"), __jsx("button", {
        onClick: this._onAnswerButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "answer button"), __jsx("textarea", {
        style: {
          width: 450,
          height: 40
        },
        ref: function ref(_ref) {
          _this3.textref = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }));
    }
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

})
//# sourceMappingURL=index.js.1285fb8401cc20a4b0fa.hot-update.js.map