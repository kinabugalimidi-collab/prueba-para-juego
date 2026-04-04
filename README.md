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
