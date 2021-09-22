import { config } from "https://deno.land/x/dotenv@v3.0.0/mod.ts";

if (typeof Deno !== "undefined") config({ export: true });
export const getGithubClientId = () => Deno.env.get("GITHUB_CLIENT_ID")!;
export const getGithubClientSecret = () =>
  Deno.env.get("GITHUB_CLIENT_SECRET")!;
