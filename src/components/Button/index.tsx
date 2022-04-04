import styled from "styled-components";

interface Props {
  size?: "lg" | "md";
  color?: string;
  selected?: boolean;
  onClick?: (...args: any[]) => void;
  children: React.ReactNode;
}

export const Button = ({
  size = "md",
  color,
  selected,
  onClick,
  children,
}: Props) => {
  return (
    <ButtonStyle
      size={size}
      color={color}
      selected={selected}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<Props>`
  padding: ${({ size }) => (size === "lg" ? "3em 4.5em" : " 1.5em 2em")};

  border: none;
  border-radius: 1em;
  background-color: ${({ theme, selected, color }) =>
    color && selected && theme.color[color]};
  box-shadow: 0 0 10px 1px
    ${({ theme, color }) => (color ? theme.color[color] : "lightgray")};

  font-size: ${({ size }) => (size === "lg" ? "1.75rem" : "1rem")};
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms ease-out;

  &:hover {
    background-color: ${({ theme, color }) =>
      color ? theme.color[color] : "lightgray"};
    color: #fff;
  }
`;
