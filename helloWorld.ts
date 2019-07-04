// @ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts";

const PORT = 8080;

(async () => {
  const app = new Application();

  app.use(ctx => {
    ctx.response.body = "Hello World!";
  });

  console.log("Listening on localhost:" + PORT);
  await app.listen("127.0.0.1:" + 8080);
})();
