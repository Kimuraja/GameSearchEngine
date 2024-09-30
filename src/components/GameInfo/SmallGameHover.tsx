import useGameDB from '../../config/useGameDB';
import styled from "styled-components";

type GameData = {
  index: number;
};

const SmallGameHover = ({ index }: GameData) => {
  const { BaseContent } = useGameDB();

  const Div = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    background: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &::before {
      content: "${BaseContent[index]?.title || "Loading title..."}";
      font-size: 1rem;
      display: none;
    }

    &:hover {
      background: linear-gradient(to top, black, rgba(0, 0, 0, .3));
    }

    &:hover::before {
      display: block;
      color: white;
    }
  `;

  return (<Div/>);
}

export default SmallGameHover;
