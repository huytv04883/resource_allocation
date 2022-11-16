import styled from "styled-components";

export const Media = styled("div")(
  () => `
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
    `
);

export const Title = styled("div")(
  () => `
  font-weight: 500;
  font-size: 1.285rem;
  line-height: 1.2;
  color: #5e5873;
  margin-bottom: 1.5rem;
    `
);

export const ShortName = styled("div")(
  () => `
  width: 100px;
  height: 100px;
  border-radius: 0.6rem;
  background-color: #82868b;
  font-weight: 600;
  color: #fff;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
    `
);

export const MediaBody = styled("div")(
  () => `
  margin: auto 1.5rem auto;
  flex: 1;
    `
);

export const Name = styled("p")(
  () => `
  font-weight: 500;
  line-height: 1.2;
  color: #5e5873;
  margin-bottom: 1rem;
  font-size: 1rem;
    `
);

export const Email = styled("p")(
  () => `
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
    `
);

export const TableCustom = styled("table")(
  () => `
  width: 100%;
    `
);

export const Th = styled("th")(
  () => `
  font-weight: 400;
  text-align: left;
    `
);

export const Feild = styled("span")(
  () => `
  margin-left: 5px;
  font-size: 12px;
  font-weight: 400;
    `
);
