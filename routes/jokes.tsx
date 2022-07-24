/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import "dotenv";

const host = Deno.env.get("HOST");

export const handler: Handlers<string | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`${host}/api/joke`);
    const joke = await resp.text();
    if (resp.status === 404) {
      return ctx.render(null);
    }
    return ctx.render(joke);
  },
};

export default function jokes({ data }: PageProps<string | null>) {
  if (!data) {
    return <h1>not data</h1>;
  }

  return (
    <div>
      {data}
      <p>{host}</p>
    </div>
  );
}
