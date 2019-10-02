import React, { useState } from 'react'
import styled from 'styled-components'

import WeekSelection from './WeekSelection'

import {
  getWeekDayOfCurrentYear,
  getDatesOfWeek,
  getWeekDay,
  getMonthString,
} from './utils'

export type Props = {
  onDateChanged: (date: Date) => void
  selectedDate?: Date
}

const currentWeek = getWeekDayOfCurrentYear()

export default function({ onDateChanged, selectedDate = new Date() }: Props) {
  const [selected, setSelected] = useState(selectedDate)
  const [week, setWeek] = useState(currentWeek)
  const [dates, setDates] = useState(getDatesOfWeek(week))
  const [weekSelecting, setWeekSelecting] = useState(false)
  const [seletedDay, setSeletedDay] = useState(selectedDate.getDay())
  const totalWeek = getWeekDayOfCurrentYear(
    new Date(`${selectedDate.getFullYear()}-12-31`),
  )
  const todayString = new Date().toDateString()
  const isToday = selected.toDateString() === todayString

  const onDayClick = (date: Date) => {
    setSeletedDay(date.getDay())
    onDateChanged(date)
    setSelected(date)
  }
  const onWeekSelected = (week: number) => {
    const newDates = getDatesOfWeek(week)
    setWeek(week)
    setDates(newDates)
    onDateChanged(newDates[seletedDay])
    setSelected(newDates[seletedDay])
  }
  const onBackToTodayClick = () => {
    setWeek(currentWeek)
    setSelected(new Date())
    setWeek(getWeekDayOfCurrentYear())
    setSeletedDay(new Date().getDay())
    setWeekSelecting(false)
  }

  return (
    <Relative>
      <BackToToday isToday={isToday} onClick={onBackToTodayClick}>
        Back to Today
      </BackToToday>
      <Wrapper bottomRadius={!weekSelecting}>
        {dates.map(date => (
          <Day
            key={date.getUTCDay()}
            selected={seletedDay === date.getDay()}
            onClick={() => {
              onDayClick(date)
            }}
            isToday={date.toDateString() === todayString}
          >
            <div className="weekDay">{getWeekDay(date)}</div>
            <Month>
              {getMonthString(date)} {date.getDate()}
            </Month>
          </Day>
        ))}
        <Week onClick={() => setWeekSelecting(!weekSelecting)}>
          <div>
            <strong>{week}</strong>/{totalWeek}
          </div>
          <Year>{new Date().getFullYear()}</Year>
        </Week>
      </Wrapper>
      {weekSelecting && (
        <WeekSelectionWrapper>
          <WeekSelection onWeekSelected={onWeekSelected} selectedWeek={week} />
        </WeekSelectionWrapper>
      )}
    </Relative>
  )
}

export const $dark = '#272727'
export const $lightGray = '#EBEBEB'
export const $redorange = '#DC5758'

const Wrapper = styled.div(
  {
    display: 'flex',
    background: $lightGray,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 100,
    '::select': 'disabled',
  },
  ({ bottomRadius }: { bottomRadius: Boolean }) =>
    !bottomRadius
      ? {
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }
      : false,
)

const Day = styled.div(
  {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    minWidth: 60,
    minHeight: 50,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '.weekDay': {
      fontWeight: 600,
      lineHeight: 0.9,
    },
    ':hover': {
      background: '#cecece',
    },
  },
  (props: { selected: Boolean; isToday: Boolean }) => ({
    ...(props.isToday
      ? {
          color: $redorange,
          fontWeight: 600,
          background: '#f3f3f3',
        }
      : null),
    ...(props.selected
      ? {
          background: $redorange,
          color: '#fff',
          ':hover': {
            background: '#c75152',
          },
        }
      : null),
  }),
)

const Month = styled.div({
  fontSize: 12,
  opacity: 0.6,
})

const Week = styled.div({
  background: $dark,
  minWidth: 80,
  fontSize: 14,
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
})

const Relative = styled.div({
  position: 'relative',
})

const WeekSelectionWrapper = styled.div({
  background: $dark,
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  position: 'absolute',
  top: '100%',
  width: '100%',
  zIndex: 99,
})

const Year = styled.div({
  fontSize: 12,
  color: 'rgba(255, 255, 255, 0.5)',
})

const BackToToday = styled.div(
  {
    background: $dark,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    color: '#bbb',
    fontSize: 11,
    position: 'absolute',
    bottom: '85%',
    padding: '5px 13px 6px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all .2s',
    left: 'calc(50% - 30px)',
    ':hover': {
      bottom: '100%',
      color: '#eee',
    },
  },
  ({ isToday }: { isToday: Boolean }) => (isToday ? { bottom: 0 } : null),
)
