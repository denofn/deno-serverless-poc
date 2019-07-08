# deno-serverless-poc

This PoC looks at the possibilities of a Serverless runtime for Deno.

- [hayd/deno_docker](https://github.com/hayd/deno_docker/tree/master/alpine.dockerfile) Alpine Dockerfile
- basic http server example from the [std docs](https://github.com/denoland/deno_std/tree/master/http#example)
- bundles your source for extra fast runtimes, very necessary if you're creating a serverless runtime!

There's a Docker image available over at [denoserverless/deno-serverless-poc](https://hub.docker.com/r/denoserverless/deno-serverless-poc).

## Getting started

**Make sure Docker, git, node and yarn are installed**

```bash
git clone https://github.com/denoserverless/deno-serverless-poc myProject && cd myProject && yarn
# Edit the index.ts, building the Dockerfile will now compile and bundle your source (and keeps an internal cache of all needed dependencies)
docker build -t my-docker-image .
docker run -it --init -p 8080:8080 my-docker-image
```
