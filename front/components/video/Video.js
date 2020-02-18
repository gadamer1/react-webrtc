import React, { Component, createRef, PureComponent } from "react";
import io from "socket.io-client";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.localVideo = createRef();
    this.remoteVideo = createRef();
    this.textref = createRef();
  }

  componentDidMount() {
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {
        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }
    this.socket = io("https://f0eb8df0.ngrok.io/webrtcPeer", {
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

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then(mediaStream => {
        this.localVideo.current.srcObject = mediaStream;
        console.log("my stream", mediaStream);
        mediaStream.getTracks().map(track => {
          this.pc.addTrack(track, mediaStream);
          console.log(track);
        });
      })
      .catch(err => console.error(err));
  }

  _onOfferButton = () => {
    console.log("Offer");

    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer
    // initiates the creation of SDP
    this.pc.createOffer({ offerToReceiveVideo: 1 }).then(sdp => {
      // console.log(JSON.stringify(sdp))

      // set offer sdp as local description
      this.pc.setLocalDescription(sdp);
      this.sendToPeer("offerOrAnswer", sdp);
    });
  };
  _onAnswerButton = () => {
    console.log("Answer");
    this.pc.createAnswer({ offerToReceiveVideo: 1 }).then(sdp => {
      // console.log(JSON.stringify(sdp))

      // set answer sdp as local description
      this.pc.setLocalDescription(sdp);

      this.sendToPeer("offerOrAnswer", sdp);
    });
  };
  sendToPeer = (messageType, payload) => {
    this.socket.emit(messageType, {
      socketID: this.socket.id,
      payload
    });
  };

  render() {
    return (
      <div>
        <video
          style={{ width: 100, height: 100, backgroundColor: "black" }}
          ref={this.localVideo}
          autoPlay
          playsInline
        />
        <video
          style={{
            width: 100,
            height: 100,
            marginLeft: 10,
            backgroundColor: "black"
          }}
          ref={this.remoteVideo}
          autoPlay
          playsInline
        />
        <button onClick={this._onOfferButton}>offer button</button>
        <button onClick={this._onAnswerButton}>answer button</button>
        <textarea
          style={{ width: 450, height: 40 }}
          ref={ref => {
            this.textref = ref;
          }}
        />
      </div>
    );
  }
}

export default Video;
