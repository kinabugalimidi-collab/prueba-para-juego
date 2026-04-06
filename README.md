# prueba-para-juego

## Titi Galimidi Futbol

Juego 2D lateral en **HTML + CSS + JavaScript puro**, ejecutable directamente en navegador.

## Cómo jugar

1. Abre `index.html` en tu navegador.
2. Controles:
   - `→`: correr / avanzar.
   - `↑`: saltar.
   - `↓`: agacharse.
   - `←`: acostarse.
   - `A`: disparar proyectil.
   - `S`: activar escudo.
   - `D`: reservado (sin función).
3. Objetivo:
   - Esquivar o destruir balones enemigos.
   - Eliminar a los jugadores enemigos (con proyectil o escudo).

## Reglas de puntuación

- `+100` puntos por cada enemigo eliminado.
- `+200` puntos por cada balón eliminado.
- Saltar balones **no** da puntos.

## Vidas y fin de partida

- Empiezas con **3 vidas**.
- Si te golpea un balón sin defensa correcta, o un enemigo te toca, pierdes una vida.
- Al perder una vida se pausa 5 segundos con mensaje motivacional.
- Si pierdes las 3 vidas, aparece **Game Over** con puntuación final y pregunta para jugar de nuevo:
  - **Sí** reinicia la partida.
  - **No** muestra “Bye Bye”.


## Imagen motivacional (Titi)

Para usar tu foto local (`C:\Users\alejandro.galimidi\Downloads\WhatsApp Image titiman.jpeg`) en el juego:

1. Copia esa imagen dentro del repo en `assets/titiman.jpeg`.
2. Abre `index.html` y el overlay de pérdida de vida mostrará esa foto durante 5 segundos.

## Ritmo de lanzamiento de balones

- El intervalo inicial entre lanzamientos es de **2 segundos**.
- Si sobrevives sin perder vidas, por cada minuto el ritmo aumenta un **10%**.
- El intervalo mínimo está limitado a **1 segundo** (nunca baja de eso).
- Durante el primer minuto hay un máximo de 1 balón activo en pantalla.
- Después del primer minuto, puede aparecer un segundo balón aleatorio, con separación suficiente para que sea esquivable/destruible (nunca lluvia simultánea injusta).


## Etapas y nivel cada 5000 puntos

- Al llegar a cada múltiplo de **5000 puntos**, el juego se pausa 5 segundos con aviso multicolor de felicitación.
- Al volver, cambia el color de camiseta del jugador y de los lanzadores.
- En las graderías aparece un cartel publicitario con mensajes sobre Titi que cambian por etapa.

## Detalles visuales nuevos

- La cabeza del jugador y de los lanzadores incluye una carita visible.
- Los lanzadores muestran número de camiseta aleatorio entre **1 y 9**.
- El cielo ahora incluye nubes animadas.


## Controles en celular

- Abajo a la izquierda: botones de **Disparo** y **Escudo**.
- Abajo a la derecha: botones digitales en forma de flechas para **avanzar (→)**, **saltar (↑)** y **agacharse (↓)**.
- También se incluye **←** táctil para acostarse, igual que en teclado.


## Audio del juego

- Se agregaron efectos de sonido para disparo, escudo, impactos, pérdida de vida y cambio de etapa.
- El botón `🔊 Audio` permite activar/desactivar audio en cualquier momento.
- En móviles y algunos navegadores, el audio inicia al primer toque/tecla por políticas del navegador.

## Base 2.5D paralela (Babylon.js)

Se agregó una base nueva y **no destructiva** en `babylon25d/` para migración incremental del juego 2D actual.

### Estructura

- `babylon25d/index.html`
- `babylon25d/style.css`
- `babylon25d/js/main.js`
- `babylon25d/js/scene.js`
- `babylon25d/js/player.js`
- `babylon25d/js/controls.js`
- `babylon25d/js/hud.js`
- `babylon25d/js/gameState.js`

### Ejecutar

1. Mantén el juego 2D original como está (`index.html` en raíz).
2. Para la base 2.5D abre `babylon25d/index.html`.
3. Recomendado: usar servidor local para móviles y módulos ES:
   - `python3 -m http.server 8080`
   - abrir `http://localhost:8080/babylon25d/`

### Controles base 2.5D

- Teclado: `←`/`→` mover, `↑` o espacio saltar.
- Móvil: botones táctiles (izquierda/derecha y salto).

### Alcance de esta base

Incluye escena 2.5D, cámara lateral fija, gravedad, colisión con suelo, movimiento lateral, salto, HUD (puntos/vidas/distancia/estado/escudo/etapa) y controles táctiles.
Queda lista para añadir luego: disparo, escudo funcional, enemigos, obstáculos y etapas avanzadas.
