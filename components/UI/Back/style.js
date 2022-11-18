import styled from "styled-components";

export const ButtonGoBack = styled("button")(
  () => `
  position: absolute;
  left: 1rem;
  bottom: 50%;
  top: auto;
  transform: translate(0, 50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
    `
);
