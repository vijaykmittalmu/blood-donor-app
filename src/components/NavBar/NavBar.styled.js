import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const NavBarSection = styled.section`
  width: ${({ leftSection, midSection, rightSection }) =>
    leftSection ? "18%" : midSection ? "74%" : rightSection ? "8%" : "100%"};
  height: auto;
  background-color: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.midSection &&
    css`
      text-transform: uppercase;
      justify-content: flex-start;
      a {
        color: var(--light) !important;
        text-decoration: none;
        font-size: 1.125rem;
        font-weight: 400;
        &:hover {
          text-decoration: underline;
        }
      }
    `}
`;

export const NavWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;
