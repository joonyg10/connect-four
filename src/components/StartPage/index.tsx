import { useState } from "react";
import { InitTurn, Turn } from "../../Types";

// @@ [components]
import { Button } from "../Button";

// @@ [styles]
import styled from "styled-components";
import { motion } from "framer-motion";

// @@ [constant]
import { swirlFadeOut } from "../../constant/variants";
const BTN: [Turn, string][] = [
  ["O", "blue"],
  ["X", "red"],
];

interface Props {
  startGame: (turn: InitTurn) => void;
}

export const StartPage = ({ startGame }: Props) => {
  const [selectedBtn, setSelectedBtn] = useState<InitTurn>(null);

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

const Container = styled(motion.section).attrs(() => ({
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: swirlFadeOut,
}))`
  ${({ theme }) => theme.utils.grid__center};
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;
