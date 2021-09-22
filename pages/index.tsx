import React from "react";
import useGithubClientId from "~/misc/useGithubClientId.ts";
import getGithubAuthorizeUrl from "~/misc/getGithubAuthorizeUrl.ts";
import IndexScreen, { Phase } from "~/screens/index/index.tsx";

export default function Page() {
  const githubClientId = useGithubClientId();
  const phase: Phase = {
    type: "before-login",
    githubAuthorizeUrl: getGithubAuthorizeUrl(githubClientId),
  };
  return <IndexScreen phase={phase} />;
}
