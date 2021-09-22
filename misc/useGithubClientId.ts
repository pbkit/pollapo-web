import { useDeno } from "aleph/react";
import { getGithubClientId } from "~/misc/env.ts";

export default function useGithubClientId() {
  const githubClientId = useDeno(() => getGithubClientId());
  return githubClientId;
}
