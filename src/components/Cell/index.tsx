import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { cellPopUp } from "../../constant/variants";

interface Props {
  flag: string;
}

const Cell = ({ flag }: Props) => {
  return <>{flag && <Container flag={flag}>{flag}</Container>}</>;
};

export default React.memo(Cell);

const Container = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "pop",
  variants: cellPopUp,
}))<{ flag: string }>`
  position: relative;
  ${({ theme }) => theme.utils.grid__center};
  width: 80px;
  height: 80px;
  border-radius: 0.5em;
  font-size: 1.5rem;
  font-weight: bold;

  background-color: ${({ theme, flag }) =>
    !flag ? "" : flag === "X" ? theme.color.red : theme.color.blue};
`;
