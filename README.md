# Knights Travails

A JavaScript solution for The Odin Project's Knights Travails assignment.

The `knightMoves` function uses breadth-first search to find the shortest path a knight can take between two squares on an 8x8 chessboard.

## Features

- Finds the shortest valid knight path between two coordinates
- Uses BFS with a queue
- Tracks visited squares to avoid unnecessary repeats
- Includes Jest tests for valid paths and shortest move counts

## Usage

```js
import { knightMoves } from "./knightMoves.js";

console.log(knightMoves([0, 0], [3, 3]));
// Example: [[0, 0], [1, 2], [3, 3]]
```

## Run Tests

```bash
npm test
```

## Project Structure

```text
.
├── README.md
├── knightMoves.js
├── knightMoves.test.js
├── package-lock.json
└── package.json
```
