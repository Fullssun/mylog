'use client'

import styled from "styled-components"

const Widget = styled.div`

`

type Props = {
  name: string;
  email: string;
}

export function BoardComment({ name, email }: Props) {
  return (
    <Widget>
      이 포스트에 대해 이야기를 나누고 싶다면,
      {name} 님에게 이메일 보내기
    </Widget>
  )
}