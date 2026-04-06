export function createGameState() {
  return {
    points: 0,
    lives: 3,
    distance: 0,
    state: 'idle',
    shield: 'listo',
    stage: 1,
    maxDistance: 0,
  };
}

export function updateDistance(state, playerX) {
  state.maxDistance = Math.max(state.maxDistance, playerX);
  state.distance = Math.floor(state.maxDistance);
}
