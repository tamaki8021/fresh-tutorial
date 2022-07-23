/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
// import "dotenv";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const resp = await fetch(`${Deno.env.get("HOST")}/api/joke`);
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
