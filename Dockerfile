FROM hayd/deno:alpine-0.10.0

EXPOSE 8080

WORKDIR /app

ENV DENO_DIR /cache/

# cache the bundle runner
RUN deno fetch https://deno.land/std/bundle/run.ts

ADD . /app

CMD ["deno", "run", "-A", "out.js"]
