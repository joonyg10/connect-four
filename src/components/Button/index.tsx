import styled from "styled-components";

interface Props {
  size?: "sm" | "md";
  onClick: (...args: any[]) => void;
  children: React.ReactNode;
}

export const Button = ({ size = "md", onClick, children }: Props) => {
  return (
    <ButtonStyle size={size} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ size: "sm" | "md" }>`
  padding: ${({ size }) => (size === "sm" ? "1em 2em" : " 2em 3em")};

  border-radius: 1em;
  box-shadow: 0 0 10px 1px gray;
  cursor: pointer;
  transition: all 350ms ease-out;

  &:hover {
    background-color: grey;
    color: #fff;
  }
`;
