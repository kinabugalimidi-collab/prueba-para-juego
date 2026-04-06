export function createScene(engine, canvas) {
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0.55, 0.78, 0.98, 1);

  const light = new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.9;

  const sun = new BABYLON.DirectionalLight('sun', new BABYLON.Vector3(-1, -1, 0), scene);
  sun.position = new BABYLON.Vector3(10, 20, -10);
  sun.intensity = 0.6;

  // Cámara lateral fija (2.5D): sin cámara libre.
  const camera = new BABYLON.FreeCamera('sideCam', new BABYLON.Vector3(0, 5, -18), scene);
  camera.setTarget(new BABYLON.Vector3(0, 2.2, 0));
  camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
  camera.minZ = 0.1;
  camera.maxZ = 200;

  function updateOrthoSize() {
    const aspect = engine.getRenderWidth() / engine.getRenderHeight();
    const halfHeight = 7;
    camera.orthoTop = halfHeight;
    camera.orthoBottom = -halfHeight;
    camera.orthoLeft = -halfHeight * aspect;
    camera.orthoRight = halfHeight * aspect;
  }
  updateOrthoSize();
  engine.onResizeObservable.add(updateOrthoSize);

  const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 400, height: 12 }, scene);
  ground.position.y = 0;
  const groundMat = new BABYLON.StandardMaterial('groundMat', scene);
  groundMat.diffuseColor = new BABYLON.Color3(0.22, 0.56, 0.24);
  ground.material = groundMat;

  const lane = BABYLON.MeshBuilder.CreateBox('lane', { width: 400, height: 0.12, depth: 4 }, scene);
  lane.position.set(0, 0.06, 0);
  const laneMat = new BABYLON.StandardMaterial('laneMat', scene);
  laneMat.diffuseColor = new BABYLON.Color3(0.65, 0.53, 0.34);
  lane.material = laneMat;

  // Fondo simple tipo estadio.
  const backWall = BABYLON.MeshBuilder.CreateBox('backWall', { width: 420, height: 30, depth: 0.6 }, scene);
  backWall.position.set(0, 12, 8.5);
  const wallMat = new BABYLON.StandardMaterial('wallMat', scene);
  wallMat.diffuseColor = new BABYLON.Color3(0.73, 0.77, 0.82);
  backWall.material = wallMat;

  const adBoard = BABYLON.MeshBuilder.CreateBox('adBoard', { width: 40, height: 2.2, depth: 0.4 }, scene);
  adBoard.position.set(0, 2.2, 6.8);
  const adMat = new BABYLON.StandardMaterial('adMat', scene);
  adMat.diffuseColor = new BABYLON.Color3(0.09, 0.2, 0.35);
  adBoard.material = adMat;

  const adTexture = new BABYLON.DynamicTexture('adTexture', { width: 1024, height: 128 }, scene, true);
  adTexture.hasAlpha = false;
  const ctx = adTexture.getContext();
  ctx.fillStyle = '#11263f';
  ctx.fillRect(0, 0, 1024, 128);
  ctx.fillStyle = '#f7f36b';
  ctx.font = 'bold 72px Arial';
  ctx.fillText('Titi Galimidi - Base 2.5D', 60, 88);
  adTexture.update();
  adMat.diffuseTexture = adTexture;

  return { scene, camera, groundY: 0, laneDepth: 4 };
}
