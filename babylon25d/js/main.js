import { createScene } from './scene.js';
import { createPlayer, updatePlayer } from './player.js';
import { createControls } from './controls.js';
import { createHudBindings, renderHud } from './hud.js';
import { createGameState, updateDistance } from './gameState.js';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

const { scene, camera, groundY } = createScene(engine, canvas);
const player = createPlayer(scene, groundY);
const controls = createControls();
const hud = createHudBindings();
const gameState = createGameState();

scene.registerBeforeRender(() => {
  const dt = Math.min(0.033, engine.getDeltaTime() / 1000);

  // Mantener cámara lateral fija que sigue al jugador en X, sin cámara libre.
  camera.position.x = player.node.position.x;
  camera.setTarget(new BABYLON.Vector3(player.node.position.x, 2.2, 0));

  updatePlayer(player, controls.state, dt, gameState);
  updateDistance(gameState, player.node.position.x);
  renderHud(hud, gameState);

  controls.consumeFrameFlags();
});

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener('resize', () => {
  engine.resize();
});
