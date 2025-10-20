'use client'

import styled from "styled-components"

const Widget = styled.footer`
  width: 100%;
  display: flex;
  height: 70px;
`

type FooterProps = {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <Widget>
      MyLog {name}
    </Widget>
  )
}