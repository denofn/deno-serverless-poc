# deno-serverless-poc

This PoC looks at the possibilities of a Serverless runtime for Deno.

- Its Dockerfile is based on [hayd/deno_docker](https://github.com/hayd/deno_docker/tree/master/alpine.dockerfile)
- It uses the basic http server example from the [std docs](https://github.com/denoland/deno_std/tree/master/http#example)
- It also uses the bundle package to increase boot times (a performant future runtime would most likely require this)

There's a Docker image available over at [denoserverless/deno-serverless-poc](https://hub.docker.com/r/denoserverless/deno-serverless-poc).

## Why do I need yarn (and thus node)?

For now - and for ease of use - script running is done through yarn.

I am thinking of something like yarn but written for deno, I'll probably replace it with that.

## Why do you have a local copy of deno???!!!???

Easy scripting, performing a `yarn` auto downloads the latest version if it's different (by comparing DENO_VERSION).

As with yarn itself, this will probably change.
