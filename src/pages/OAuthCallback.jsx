import React, { useEffect } from "react";

const OAuthCallback = () => {
  const FRONT_URL = import.meta.env.VITE_FRONT_URL;
  useEffect(() => {
    window.opener.postMessage(
      {
        type: "oauthCallback",
        success: true,
      },
      `${FRONT_URL}`
    );
    window.close();
  }, []);

  return <div>OAuth 처리 중...</div>;
};

export default OAuthCallback;
