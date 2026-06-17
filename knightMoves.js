export function knightMoves(start, end) {
  const queue = [[start]];
  const visited = new Set();

  visited.add(positionKey(start));

  while (queue.length > 0) {
    const path = queue.shift();
    const cur = path.at(-1);

    if (cur[0] === end[0] && cur[1] === end[1]) {
      return path;
    }

    const nextMoves = findPossibleMoves(cur);

    nextMoves.forEach((move) => {
      const key = positionKey(move);

      if (!visited.has(key)) {
        visited.add(key);
        queue.push([...path, move]);
      }
    });
  }

  return false;
}

function positionKey([x, y]) {
  return `${x}, ${y}`;
}

function findPossibleMoves([x, y]) {
  const possibleMoves = [];
  const actualMoves = [];

  possibleMoves.push([x + 1, y + 2]);
  possibleMoves.push([x + 2, y + 1]);
  possibleMoves.push([x + 2, y - 1]);
  possibleMoves.push([x + 1, y - 2]);
  possibleMoves.push([x - 1, y - 2]);
  possibleMoves.push([x - 2, y - 1]);
  possibleMoves.push([x - 2, y + 1]);
  possibleMoves.push([x - 1, y + 2]);

  for (const move of possibleMoves) {
    if (move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8) {
      actualMoves.push(move);
    }
  }

  return actualMoves;
}
