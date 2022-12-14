import styled from "styled-components";
import { setBorder } from "../../utils/styled-config";

export const Card = styled.div`
  width: 23%;
  height: 320px;
  background-color: var(--light);
  border: ${setBorder()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CardHeader = styled.section`
  width: 100%;
  height: 50px;
  border-bottom: ${setBorder()};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.section`
  width: 100%;
`;

export const CardFooter = styled(CardHeader)`
  border-bottom: ${setBorder(0)};
  padding: 7px 0;
`;
