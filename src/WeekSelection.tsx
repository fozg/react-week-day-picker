import React from 'react'
import styled from 'styled-components'
import { getWeekDayOfCurrentYear } from './utils'
import { $redorange } from './WeekDaysPicker'

type Props = {
  onWeekSelected: (week: number) => void
  year?: Number,
  selectedWeek: Number
}

export default function({
  year = new Date().getFullYear(),
  onWeekSelected = () => {},
  selectedWeek = getWeekDayOfCurrentYear(new Date())
}: Props) {
  const totalWeek = getWeekDayOfCurrentYear(new Date(`${year}-12-31`))
  const currentWeek = getWeekDayOfCurrentYear(new Date())

  const onWeekClicked = (week: number) => {
    onWeekSelected(week)
  }

  return (
    <Wrapper>
      {Array(totalWeek)
        .fill(0)
        .map((_, idx) => (
          <Week
            key={idx}
            selected={selectedWeek === idx + 1}
            current={currentWeek === idx + 1}
            onClick={() => onWeekClicked(idx + 1)}
          >
            {idx + 1}
          </Week>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div({
  display: ' grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gridGap: 5,
  padding: 10,
})

const Week = styled.div(
  {
    fontSize: 14,
    color: '#ddd',
    // width: "7%",
    padding: 9,
    margin: 1,
    borderRadius: 5,
    textAlign: 'center',
    ':hover': {
      cursor: 'pointer',
      background: 'rgba(255,255,255,.1)',
    },
  },
  ({ selected, current }: { selected: Boolean; current: Boolean }) => ({
    ...(current
      ? {
          color: $redorange,
          fontWeight: 800,
        }
      : null),
    ...(selected
      ? {
          color: '#fff',
          background: 'rgba(255,255,255,.1)',
          fontWeight: 'bolder',
        }
      : null),
  }),
)
