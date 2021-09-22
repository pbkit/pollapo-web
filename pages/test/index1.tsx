import React from "react";
import IndexScreen, { Phase } from "~/screens/index/index.tsx";

export default function Page() {
  const phase: Phase = {
    type: "before-login",
    githubAuthorizeUrl: "https://example.com",
  };
  return <IndexScreen phase={phase} />;
}
