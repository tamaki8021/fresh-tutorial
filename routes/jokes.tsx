/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const resp = await fetch("http://localhost:8000/api/joke");
    const joke = await resp.text();
    return ctx.render(joke);
  },
};

export default function jokes({ data }: PageProps<string>) {
  return <div>{data}</div>;
}
