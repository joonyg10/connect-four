import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { InitTurn, Turn } from "../../Types";

interface Props {
  startGame: (turn: InitTurn) => void;
}

const BTN: [Turn, string][] = [
  ["O", "red"],
  ["X", "blue"],
];

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

const Container = styled.div`
  ${({ theme }) => theme.utils.grid__center};
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;
