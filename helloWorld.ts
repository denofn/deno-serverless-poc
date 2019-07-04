import { serve } from "https://deno.land/std/http/server.ts";

const port = Deno.env().PORT || 8080;
const s = serve(`:${port}`);

async function main() {
  console.info(`Listening on port ${port}`);
  for await (const req of s) {
    console.info(`New request: ${req.url}`);
    req.respond({ body: new TextEncoder().encode("Hello World\n") });
  }
}

main();
