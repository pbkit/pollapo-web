import type { APIHandler } from "aleph/types.d.ts";
import { getGithubClientId, getGithubClientSecret } from "~/misc/env.ts";

export const handler: APIHandler = async ({ router, response }) => {
  const data = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: getGithubClientId(),
      client_secret: getGithubClientSecret(),
      code: router.query.get("code") || "",
    }),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
  response.json(data);
};
