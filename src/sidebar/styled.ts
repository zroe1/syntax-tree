import styled from "styled-components";

export const sideBarContainerDiv = styled.div`
  // background-color: blue;
  color: white;
  // width: 100px;
  // height: 100px;
  padding: 20px;
  box-sizing: border-box;
  flex: 1;
`;

export const sidebarContainerInnerDiv = styled.div`
  // color: white;
  width: 100%;
  height: 100%;
  background-color: #fffdf0;
  padding: 5px 20px 10px 20px;
  border: 5px solid #ccd5ae;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const divider = styled.div`
  width: 30%;
  height: 6px;
  border-radius: 3px;
  background-color: #d4a373;
  margin: 10px 0;
`;

export const sideBarTitle = styled.h1`
  color: black;
  font-family: "Roboto Slab", serif;
`;

export const sideBarSubHeader = styled.h2`
  color: black;
  font-weight: 400;
  font-family: "Roboto Slab", serif;
`;

export const sideBarSmallSubHeader = styled.h3`
  color: black;
  font-weight: 400;
  font-family: "Roboto Slab", serif;
`;
