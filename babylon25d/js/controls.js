export function createControls() {
  const state = {
    left: false,
    right: false,
    jumpHeld: false,
    jumpPressed: false,
  };

  function setKey(key, value) {
    if (key === 'arrowleft') state.left = value;
    if (key === 'arrowright') state.right = value;
    if (key === 'arrowup' || key === ' ') {
      if (value && !state.jumpHeld) state.jumpPressed = true;
      state.jumpHeld = value;
    }
  }

  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (['arrowleft', 'arrowright', 'arrowup', ' '].includes(k)) e.preventDefault();
    setKey(k, true);
  });

  window.addEventListener('keyup', (e) => {
    setKey(e.key.toLowerCase(), false);
  });

  const touchButtons = document.querySelectorAll('[data-action]');

  function mapAction(action, value) {
    if (action === 'left') state.left = value;
    if (action === 'right') state.right = value;
    if (action === 'jump') {
      if (value && !state.jumpHeld) state.jumpPressed = true;
      state.jumpHeld = value;
    }
  }

  for (const btn of touchButtons) {
    const action = btn.getAttribute('data-action');

    const onDown = (e) => {
      e.preventDefault();
      mapAction(action, true);
    };
    const onUp = (e) => {
      e.preventDefault();
      mapAction(action, false);
    };

    btn.addEventListener('pointerdown', onDown);
    btn.addEventListener('pointerup', onUp);
    btn.addEventListener('pointerleave', onUp);
    btn.addEventListener('pointercancel', onUp);
  }

  return {
    state,
    consumeFrameFlags() {
      state.jumpPressed = false;
    },
  };
}
