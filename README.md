# deno-serverless-poc

This PoC looks at the possibilities of a Serverless runtime for Deno.

- Its Dockerfile is based on [hayd/deno_docker](https://github.com/hayd/deno_docker/tree/master/alpine.dockerfile)
- It uses the basic http server example from the [std docs](https://github.com/denoland/deno_std/tree/master/http#example)
- It also uses the bundle package to increase boot times (a performant future runtime would most likely require this)

There's a Docker image available over at [denoserverless/deno-serverless-poc](https://hub.docker.com/r/denoserverless/deno-serverless-poc).

## Getting started

- Make sure Docker, git, node and yarn are installed
- `git clone https://github.com/denoserverless/deno-serverless-poc myProject && cd myProject && yarn`
- Edit the index.ts, building the Dockerfile will now compile and bundle your source (and keeps an internal cache of all needed dependencies)
- `docker build -t my-docker-image .`
- `docker run -it --init -p 8080:8080 my-docker-image`

## Why do I need yarn (and thus node)?

For now - and for ease of use - script running is done through yarn.

I am thinking of something like yarn but written for deno, I'll probably replace it with that.

Performing a `yarn` auto downloads the latest version of deno locally if it's different (by comparing DENO_VERSION).

## Why do you have a local copy of deno???!!!???

To hack around import statements and intellisense in VSCode for scripting.

As with yarn itself, this will probably change.
