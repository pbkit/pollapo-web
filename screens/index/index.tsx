import React from "react";

export interface Props {
  phase: Phase;
}
export type Phase = BeforeLogin | AfterLogin;
interface PhaseBase<T extends string> {
  type: T;
}
interface BeforeLogin extends PhaseBase<"before-login"> {
  githubAuthorizeUrl: string;
}
interface AfterLogin extends PhaseBase<"after-login"> {
}
export default function Screen({ phase }: Props) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        />
        <link rel="stylesheet" href="./index.css" />
      </head>
      <main className="px-4 py-5 my-5 text-center">
        <h1>Pollapo</h1>
        <p>A package manager for protobuf</p>
        {phase.type === "before-login" &&
          (
            <a href={phase.githubAuthorizeUrl} className="btn btn-primary">
              Login
            </a>
          )}
      </main>
    </>
  );
}
