import React from "react";
import Video from "../components/video/Video";

import "./styles.scss";

if (typeof window !== "undefined") {
  var adapter = require("webrtc-adapter");
}

const index = () => {
  return (
    <div>
      <h1>react video chat</h1>
      <Video />
    </div>
  );
};

export default index;
