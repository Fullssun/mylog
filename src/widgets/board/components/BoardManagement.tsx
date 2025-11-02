'use client'

import { BoardDate, BoardName, BoardTitle } from "@/features"
import { timeAgo } from "@/shares/lib/date"
import styled from "styled-components"

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 3rem;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--white-lightgray);
`

const BoardOtherBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

const BoardDot = styled.div`
  border: 1px solid var(--white-lightgray);
  height: 1px;
  border-radius: 50%;
`

type Props = {
  name: string;
  title: string;
  date: string;
}

export function BoardManagement({ name, title, date }: Props) {
  return (
    <Widget>
      <BoardTitle>{title}</BoardTitle>
      <BoardOtherBox>
        <BoardName>{name}</BoardName>
        <BoardDot />
        <BoardDate>{timeAgo(date)}</BoardDate>
      </BoardOtherBox>
    </Widget>
  )
}