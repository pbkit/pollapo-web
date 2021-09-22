export default function getGithubAuthorizeUrl(
  githubClientId: string,
  state?: string,
  scope = "user,repo",
) {
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", githubClientId);
  state && url.searchParams.set("state", state);
  url.searchParams.set("scope", scope);
  return url.toString();
}
