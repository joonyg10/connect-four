import styled from "styled-components";
import { motion } from "framer-motion";

import { Button } from "../Button";
import { popUp, backDrop } from "../../constant/variants";

interface Props {
  winner: "X" | "O" | "DRAW";
  restartGame: () => void;
}

function Modal({ winner, restartGame }: Props) {
  return (
    <>
      <BackDrop />
      <Container>
        <h2> {winner !== "DRAW" ? "Congratulation" : "OOPS!!"}</h2>
        <Text>{winner !== "DRAW" ? `${winner} Wins the Game` : "DRAW"}</Text>
        <Button onClick={restartGame}>Restart The Game</Button>
      </Container>
    </>
  );
}

export default Modal;

const BackDrop = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "animate",
  variants: backDrop,
}))`
  position: fixed;
  inset: 0;
  z-index: -1;
  ${({ theme }) => theme.utils.grid__center};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "pop",
  variants: popUp,
}))`
  ${({ theme }) => theme.utils.grid__center};
  width: 40vw;
  height: 30vh;
  padding: 2.5em 2em;

  background-color: #fff;
  box-shadow: 0 0 10px 1px grey;
  border-radius: 2em;
  text-align: center;
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
