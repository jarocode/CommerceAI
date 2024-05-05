"use client";

import React from "react";
import { JSX, ElementType, ClassAttributes, InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface InputProps {
  variant?: string;
  suffix?: JSX.Element;
  preffix?: JSX.Element;
}

// eslint-disable-next-line react/display-name
const AppInput = React.forwardRef(
  (
    props: JSX.IntrinsicAttributes &
      InputProps & {
        theme?: Theme | undefined;
        as?: ElementType<any, keyof JSX.IntrinsicElements> | undefined;
      } & ClassAttributes<HTMLInputElement> &
      InputHTMLAttributes<HTMLInputElement>,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <Container>
        {props.preffix}
        <Input ref={ref} {...props} />
        {props.suffix}
      </Container>
    );
  }
);

export default AppInput;

const Container = styled.div`
  width: 100%;
  border: 1px solid #b2a1d5;
  height: 56px;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  &::placeholder {
    color: #1c1b1f80;
  }
`;
