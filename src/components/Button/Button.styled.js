import styled, { css } from "styled-components";
import { setBorder } from "../../utils/styled-config";

export const Button = styled.button.attrs((props) => {
  return {
    type: props.type || "button",
  };
})`
  max-width: 6.25rem;
  height: auto;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border: ${setBorder(0)};
  ${(props) =>
    props.bg &&
    css`
      background-color: var(--${props.bg});
    `}
  ${(props) =>
    props.txt &&
    css`
      color: var(--${props.txt});
    `}
`;

export const ALink = styled.a`
  width: ${(props) => (!props.link ? "50px" : "auto")};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: var(--light);
  border-radius: 50%;
  ${(props) =>
    props.link &&
    css`
      text-decoration: none;
    `}
  ${(props) =>
    props.facebook &&
    css`
      background-color: var(--facebook);
    `};
  ${(props) =>
    props.twitter &&
    css`
      background-color: var(--twitter);
    `};
`;
