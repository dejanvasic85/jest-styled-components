import React from "react";
import { render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
`;

describe("Button", () => {
  it("should render a button with red background", () => {
    render(<Button style={{ margin: "20px" }}>Click me</Button>);
    const button = screen.getByText("Click me");
    debug();
    expect(button).toHaveStyle({ margin: "20px" });
    expect(button).toHaveStyle({ padding: "10px" });
  });
});
