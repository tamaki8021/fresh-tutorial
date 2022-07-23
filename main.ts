import { serve } from "./deps.ts";

serve((req) => new Response("Hello world from Deno!"), { addr: ":8000" });

console.log(`HTTP server is running at: http://localhost:8080/`);
