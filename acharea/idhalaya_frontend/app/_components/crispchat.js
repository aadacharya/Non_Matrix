"use client"
import React, { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "1e263cfc-35ab-45dd-a2f4-d66afa9f2374";

    (function() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null; // The component doesn't render anything
};
export default CrispChat;
