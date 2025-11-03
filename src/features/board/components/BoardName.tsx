'use client'

import styled from "styled-components"

const Component = styled.div`
  display: flex;
  color: var(--white-gray);
`

const Name = styled.div`
  font-size: 16px;
`

type Props = {
  children: React.ReactNode;
}

export function BoardName({ children }: Props) {
  return (
    <Component>
      <Name>{children}</Name>
    </Component>
  )
}