import styled, { css } from "styled-components";

export const LogoTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  ${(props) =>
    props.white
      ? css`
          color: var(--light);
        `
      : css`
          color: var(--dark);
        `}
`;

export const Typography = styled.p`
  font-size: 14px;
  text-transform: capitalize;
  text-align: center;
  line-height: 25px;
  font-style: italic;
  padding: 0 5px;
  ${(props) =>
    props.txt
      ? css`
          color: var(--${props.txt});
        `
      : css`
          color: var(--light);
        `}
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
`;
