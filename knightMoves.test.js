import { knightMoves } from "./knightMoves.js";

function isValidCoordinate(position) {
  return (
    Array.isArray(position) &&
    position.length === 2 &&
    Number.isInteger(position[0]) &&
    Number.isInteger(position[1]) &&
    position[0] >= 0 &&
    position[0] <= 7 &&
    position[1] >= 0 &&
    position[1] <= 7
  );
}

function isValidKnightMove(from, to) {
  const xDiff = Math.abs(from[0] - to[0]);
  const yDiff = Math.abs(from[1] - to[1]);

  return (xDiff === 2 && yDiff === 1) || (xDiff === 1 && yDiff === 2);
}

function expectValidPath(path, start, end, expectedMoves) {
  expect(Array.isArray(path)).toBe(true);

  expect(path[0]).toEqual(start);
  expect(path[path.length - 1]).toEqual(end);

  for (const position of path) {
    expect(isValidCoordinate(position)).toBe(true);
  }

  for (let i = 0; i < path.length - 1; i++) {
    expect(isValidKnightMove(path[i], path[i + 1])).toBe(true);
  }

  expect(path.length - 1).toBe(expectedMoves);
}

describe("knightMoves", () => {
  test("returns the start position when start and end are the same", () => {
    const path = knightMoves([0, 0], [0, 0]);

    expect(path).toEqual([[0, 0]]);
  });

  test("finds a one-move path", () => {
    const path = knightMoves([0, 0], [1, 2]);

    expectValidPath(path, [0, 0], [1, 2], 1);
  });

  test("finds another one-move path", () => {
    const path = knightMoves([0, 0], [2, 1]);

    expectValidPath(path, [0, 0], [2, 1], 1);
  });

  test("finds a two-move path from [0, 0] to [3, 3]", () => {
    const path = knightMoves([0, 0], [3, 3]);

    expectValidPath(path, [0, 0], [3, 3], 2);
  });

  test("finds a two-move path from [3, 3] to [0, 0]", () => {
    const path = knightMoves([3, 3], [0, 0]);

    expectValidPath(path, [3, 3], [0, 0], 2);
  });

  test("finds the shortest path from [3, 3] to [4, 3]", () => {
    const path = knightMoves([3, 3], [4, 3]);

    expectValidPath(path, [3, 3], [4, 3], 3);
  });

  test("finds the shortest path from [0, 0] to [7, 7]", () => {
    const path = knightMoves([0, 0], [7, 7]);

    expectValidPath(path, [0, 0], [7, 7], 6);
  });

  test("finds the shortest path from one corner to the opposite corner", () => {
    const path = knightMoves([7, 0], [0, 7]);

    expectValidPath(path, [7, 0], [0, 7], 6);
  });

  test("finds the shortest path between two middle-board positions", () => {
    const path = knightMoves([4, 4], [5, 6]);

    expectValidPath(path, [4, 4], [5, 6], 1);
  });

  test("finds the shortest path from [0, 0] to [0, 1]", () => {
    const path = knightMoves([0, 0], [0, 1]);

    expectValidPath(path, [0, 0], [0, 1], 3);
  });

  test("finds the shortest path from [0, 0] to [1, 1]", () => {
    const path = knightMoves([0, 0], [1, 1]);

    expectValidPath(path, [0, 0], [1, 1], 4);
  });

  test("every step in the returned path stays on the board", () => {
    const path = knightMoves([0, 0], [7, 7]);

    for (const position of path) {
      expect(position[0]).toBeGreaterThanOrEqual(0);
      expect(position[0]).toBeLessThanOrEqual(7);
      expect(position[1]).toBeGreaterThanOrEqual(0);
      expect(position[1]).toBeLessThanOrEqual(7);
    }
  });

  test("every step in the returned path is a legal knight move", () => {
    const path = knightMoves([0, 0], [7, 7]);

    for (let i = 0; i < path.length - 1; i++) {
      expect(isValidKnightMove(path[i], path[i + 1])).toBe(true);
    }
  });
});
