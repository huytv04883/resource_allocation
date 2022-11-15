import styled from "styled-components";

export const Avatar = styled("div")(
  () => `
  color: #7367f0;
  background-color: rgba(115,103,240,.12);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  `
);

export const AcountText = styled("span")(
  () => `
  color: #6e6b7b;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0.5rem;
  `
);

export const AcountWrapper = styled("ul")(
  () => `
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  max-width: 200px;
  float: right;
  margin: 0;
  `
);
