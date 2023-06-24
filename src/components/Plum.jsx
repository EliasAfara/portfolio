import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import drawPlum from "../utils/drawPlum";

const Plum = () => {
  const canvasRef = useRef();
  const size = useWindowSize();
  const start = useRef(() => {});
  const MIN_BRANCH = 30;
  const len = useRef(6);
  const stopped = useRef(false);
  const isActive = useRef(false);

  useLayoutEffect(() => {
    drawPlum(canvasRef, size, start, MIN_BRANCH, len, stopped, isActive);
  }, [size.width]);

  return (
    <StyledCanvasContainer>
      <canvas ref={canvasRef} width='400' height='400' />
    </StyledCanvasContainer>
  );
};

const StyledCanvasContainer = styled.div`
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: -2;
  mask-image: radial-gradient(circle, transparent, #00000054);
  -webkit-mask-image: radial-gradient(circle, transparent, #00000054);
`;

export default Plum;
