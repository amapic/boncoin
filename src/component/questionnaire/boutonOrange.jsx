import React from "react";
import styled from "styled-components";
// import { media } from 'styled-bootstrap-grid';
import { map, breakpoint } from "styled-components-breakpoint";
import { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
const Comp = styled.div`
  display: none;
  ${breakpoint("md")`
    font-size: 16px;
    display: block;
  `}

  ${breakpoint("xl")`
    font-size: 24px;
    display: block;
  `}
`;

const SomeComponent = (props) => (
  <ThemeProvider theme={theme}>
    <Comp>Hide if not md</Comp>
  </ThemeProvider>
);

export default SomeComponent;
