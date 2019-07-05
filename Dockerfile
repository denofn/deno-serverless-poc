FROM hayd/deno:alpine-0.10.0

WORKDIR /app

ENV DENO_DIR /cache/

ADD . /app

# compile and bundle the source
RUN deno bundle src/index.ts out.js

# cache the bundle runner
RUN deno fetch https://deno.land/std/bundle/run.ts

ENTRYPOINT ["deno", "-A", "https://deno.land/std/bundle/run.ts", "out.js"]
