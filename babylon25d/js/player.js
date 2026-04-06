export function createPlayer(scene, groundY) {
  const root = new BABYLON.TransformNode('playerRoot', scene);
  root.position.set(0, groundY, 0);

  const body = BABYLON.MeshBuilder.CreateBox('playerBody', { width: 1.1, height: 1.6, depth: 0.8 }, scene);
  body.parent = root;
  body.position.y = 1.2;

  const head = BABYLON.MeshBuilder.CreateSphere('playerHead', { diameter: 0.7, segments: 16 }, scene);
  head.parent = root;
  head.position.y = 2.3;

  const bodyMat = new BABYLON.StandardMaterial('playerBodyMat', scene);
  bodyMat.diffuseColor = new BABYLON.Color3(0.13, 0.36, 0.95);
  body.material = bodyMat;

  const headMat = new BABYLON.StandardMaterial('playerHeadMat', scene);
  headMat.diffuseColor = new BABYLON.Color3(0.95, 0.78, 0.62);
  head.material = headMat;

  return {
    node: root,
    velocityY: 0,
    speedX: 8,
    jumpSpeed: 12,
    gravity: -28,
    minX: -195,
    maxX: 195,
    groundY,
    isGrounded: true,
  };
}

export function updatePlayer(player, controls, dt, gameState) {
  const xInput = (controls.right ? 1 : 0) - (controls.left ? 1 : 0);
  player.node.position.x += xInput * player.speedX * dt;
  player.node.position.x = Math.min(player.maxX, Math.max(player.minX, player.node.position.x));

  if (controls.jumpPressed && player.isGrounded) {
    player.velocityY = player.jumpSpeed;
    player.isGrounded = false;
  }

  player.velocityY += player.gravity * dt;
  player.node.position.y += player.velocityY * dt;

  if (player.node.position.y <= player.groundY) {
    player.node.position.y = player.groundY;
    player.velocityY = 0;
    player.isGrounded = true;
  }

  if (!player.isGrounded) gameState.state = 'jump';
  else if (xInput !== 0) gameState.state = 'run';
  else gameState.state = 'idle';
}
