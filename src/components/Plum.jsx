import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#xxx9d9d76";
const { random } = Math;

const initCanvas = (canvas, width = 400, height = 400, _dpi) => {
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  const dpi = _dpi || dpr / bsr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * dpi;
  canvas.height = height * dpi;
  ctx.scale(dpi, dpi);

  return { ctx, dpi };
};

const polar2cart = (x = 0, y = 0, r = 0, theta = 0) => {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
};

const Plum = () => {
  const canvasRef = useRef();
  const size = useWindowSize();
  const start = useRef(() => {});
  const MIN_BRANCH = 30;
  const len = useRef(6);
  const stopped = useRef(false);
  const isActive = useRef(false);

  const drawPlum = () => {
    const canvas = canvasRef.current;
    const { ctx } = initCanvas(canvas, size.width, size.height);
    const { width, height } = canvas;

    let steps;
    let prevSteps;

    const step = (x, y, rad, counter = { value: 0 }) => {
      const length = random() * len.current;
      counter.value += 1;

      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      // out of bounds
      if (
        nx < -100 ||
        nx > size.width + 100 ||
        ny < -100 ||
        ny > size.height + 100
      )
        return;

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      // left branch
      if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));

      // right branch
      if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    let lastTime = performance.now(); // returns a high resolution timestamp in milliseconds
    const interval = 1000 / 40; // 50fps

    const frame = () => {
      if (performance.now() - lastTime < interval) return;

      prevSteps = steps;
      steps = [];
      lastTime = performance.now();

      if (!prevSteps.length) {
        pause();
        stopped.current = true;
      }

      // Execute all the steps from the previous frame
      prevSteps.forEach((i) => {
        // 50% chance to keep the step for the next frame, to create a more organic look
        if (random() < 0.5) steps.push(i);
        else i();
      });
    };

    let previousFrameTimestamp = 0;
    let rafId = null;

    function loop(timestamp) {
      //   if (!isActive.value) return;
      const delta = timestamp - previousFrameTimestamp;
      frame({ delta, timestamp });

      previousFrameTimestamp = timestamp;
      rafId = requestAnimationFrame(loop);
    }

    function resume() {
      if (!isActive.value) {
        isActive.value = true;
        rafId = requestAnimationFrame(loop);
      }
    }

    function pause() {
      isActive.value = false;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    /**
     * 0.2 - 0.8
     */
    const randomMiddle = () => random() * 0.6 + 0.2;

    start.value = () => {
      pause();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      prevSteps = [];
      steps = [
        () => step(randomMiddle() * size.width, -5, r90),
        () => step(randomMiddle() * size.width, size.height + 5, -r90),
        () => step(-5, randomMiddle() * size.height, 0),
        () => step(size.width + 5, randomMiddle() * size.height, r180),
      ];
      if (size.width < 500) steps = steps.slice(0, 2);
      resume();
      stopped.current = false;
    };

    start.value();
  };

  useEffect(() => {
    drawPlum();
  }, [size]);

  return (
    <StyledCanvasContainer>
      <canvas ref={canvasRef} width='400' height='400' />
    </StyledCanvasContainer>
  );
};

const StyledCanvasContainer = styled.div`
  position: fixed;
  top: 72px;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: -1;
  mask-image: radial-gradient(circle, #9c454500, #00000063);
  -webkit-mask-image: radial-gradient(circle, #9c454500, #00000063);
`;

export default Plum;

// Credit: Anthony Fu
// Reference: https://github.com/antfu/antfu.me/blob/main/src/components/Plum.vue
