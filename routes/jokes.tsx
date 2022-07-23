/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import "dotenv";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const host = Deno.env.get("HOST");
    const resp = await fetch(`${host}/api/joke`);
    const joke = await resp.text();
    return ctx.render(joke);
  },
};

export default function jokes({ data }: PageProps<string>) {
  return (
    <div>
      {data}
    </div>
  );
}
