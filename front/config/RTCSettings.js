export const getUserMediaContraints = {
  video: true,
  audio: true
};

export const CustomTrace = text => {
  text = text.trim();
  const now = (window.performance.now() / 1000).toFixed(3);

  console.log(now, text);
};

export const offerOptions = {
  offerToReceiveVideo: 1
};
