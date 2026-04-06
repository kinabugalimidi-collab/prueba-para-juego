export function createHudBindings() {
  return {
    score: document.getElementById('hudScore'),
    lives: document.getElementById('hudLives'),
    distance: document.getElementById('hudDistance'),
    state: document.getElementById('hudState'),
    shield: document.getElementById('hudShield'),
    stage: document.getElementById('hudStage'),
  };
}

export function renderHud(hud, gameState) {
  hud.score.textContent = gameState.points;
  hud.lives.textContent = gameState.lives;
  hud.distance.textContent = gameState.distance;
  hud.state.textContent = gameState.state;
  hud.shield.textContent = gameState.shield;
  hud.stage.textContent = gameState.stage;
}
