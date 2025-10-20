'use client'

import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--white);
`

const Box = styled.div`
  width: 1000px;
`

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Box>
        {children}
      </Box>
    </Wrapper>
  )
}