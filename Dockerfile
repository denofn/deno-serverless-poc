FROM frolvlad/alpine-glibc:alpine-3.8

ENV DENO_VERSION=0.10.0

RUN apk add --no-cache curl && \
  curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno_linux_x64.gz --output deno.gz && \
  gunzip deno.gz && \
  chmod 777 deno && \
  mv deno /bin/deno && \
  apk del curl

WORKDIR /app

ENV DENO_DIR /cache/

ADD . /app

# cache the bundle runner
RUN deno fetch https://deno.land/std/bundle/run.ts

CMD ["deno", "-A", "https://deno.land/std/bundle/run.ts", "out.js"]
