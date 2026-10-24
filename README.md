# @x12i/memorix-insights usage example

Pluggable insight processors for Memorix — staged fact resolution and judgment generation.

This consuming application demonstrates **resolve documented network reachability from a synthetic topology** using the published npm package, pinned to `1.32.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Resolve staged facts through a pluggable insight processor.
- Generate judgments from the resolved facts in a processing stage.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-insights)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This consumer uses authored records, local transformations or in-memory ports. It does not execute a skill/model, run a production pipeline, connect to MongoDB, materialize live relationships, acquire provider data or perform an outbound delivery. The in-memory examples do not establish durability across process restarts.
