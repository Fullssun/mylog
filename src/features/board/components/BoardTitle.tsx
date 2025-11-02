'use client'

import styled from "styled-components"

const Component = styled.div`
  width: 100%;
  display: flex;
  color: var(--black);
  /* margin-bottom: 2rem; */
  /* padding-bottom: 10px; */

  /* justify-content: space-between; */
  /* align-items: flex-end; */

  /* background-color: var(--white); */
  /* border-bottom: 1px solid var(--white-lightgray); */
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`

type Props = {
  children: React.ReactNode;
}

export function BoardTitle({ children }: Props) {
  return (
    <Component>
      <Title>{children}</Title>
    </Component>
  )
}