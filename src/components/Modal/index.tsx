import styled from "styled-components";

interface Props {
  winner: "X" | "O" | "DRAW";
  restartGame: () => void;
}

function Modal({ winner, restartGame }: Props) {
  return (
    <BackDrop>
      <Container>
        <h2> {winner !== "DRAW" ? "Congratulation" : "OOPS!!"}</h2>
        <Text>{winner !== "DRAW" ? `${winner} Wins the Game` : "DRAW"}</Text>
        <Button onClick={restartGame}>Restart The Game</Button>
      </Container>
    </BackDrop>
  );
}

export default Modal;

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  ${({ theme }) => theme.utils.grid__center};

  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
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

const Button = styled.button`
  padding: 2em 3em;
  border-radius: 1em;
  box-shadow: 0 0 10px 1px gray;
  cursor: pointer;
  transition: all 350ms ease-out;

  &:hover {
    background-color: grey;
    color: #fff;
  }
`;
