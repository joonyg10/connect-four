import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { InitTurn, Turn } from "../../Types";

interface Props {
  startGame: (turn: InitTurn) => void;
}

const BTN: [Turn, string][] = [
  ["O", "red"],
  ["X", "blue"],
];

const variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: [0, 0.5, 1, 1.25, 0.85, 1],
    transition: {
      type: "tween",
      duration: 0.3,
      staggerChildren: 1,
    },
  },

  exit: {
    originX: 0.5,
    originY: 1.5,
    scale: [1.25, 0.85, 1, 0.75, 0.5, 0.25, 0],
    rotate: [0, -60, -120, -180, -240, -300, -360],
    transition: {
      type: "linear",
      ease: "easeInOut",
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

export const StartPage = ({ startGame }: Props) => {
  const [selectedBtn, setSelectedBtn] = useState<InitTurn>(undefined);

  return (
    <Container>
      <h2>Choose Who Goes First</h2>
      <Stack>
        {BTN.map(([turn, color], idx) => (
          <Button
            key={idx}
            size="lg"
            color={color}
            selected={selectedBtn === turn}
            onClick={() => setSelectedBtn(turn)}
          >
            {turn}
          </Button>
        ))}
      </Stack>
      <Button onClick={() => startGame(selectedBtn)}>Start Game</Button>
    </Container>
  );
};

const Container = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants,
}))`
  ${({ theme }) => theme.utils.grid__center};
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;
