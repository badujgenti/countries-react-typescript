import React from "react";
import styled from "styled-components";
import Moon from "../assets/Moon.png";
import Moon2 from "../assets/Moon-dark.png";

export default function Header({ light, setLight }: any) {
  return (
    <Div light={light}>
      <p>Where in the world?</p>

      <p onClick={() => setLight(!light)}>
        {" "}
        {light ? <img src={Moon} alt="" /> : <img src={Moon2} alt="" />}
        Dark mode
      </p>
    </Div>
  );
}

const Div = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${(props) => (props.light ? "#FAFAFA" : "#171823")};
`;
