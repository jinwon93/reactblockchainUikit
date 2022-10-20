import React from "react";
import styled from "styled-components";

function SoonBtn() {
  return (
    <SoonBtnStyle>
      <p>Soon</p>
    </SoonBtnStyle>
  );
}

const SoonBtnStyle = styled.div`
  position: absolute;
  top: 0.8px;
  right: -4.8px;
  padding: 1.12px 3.8px;
  background-color: rgba(238, 72, 72, 0.4);
  color: whitesmoke;
  border-radius: 7px;
  font-size: 9.6px;
  border: 0.8px solid lightgray;
  z-index: 1;
  line-height: 1.4;
  @media screen and (max-width: 700px) {
    right: -19.8px;
  }
`;

export default SoonBtn;
