import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import WeekDaySelector from '../src'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 1em;
  min-width: 20vw;
  font-size: 2rem;
  flex: 1 1 auto;
`
const DatePreview = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 50px;
`
const WrapComponent = () => {
  const [date, setDate] = React.useState('Selected a date')
  const onDateChanged = (date: Date) => {
    setDate(date.toDateString())
  }

  return (
    <Content>
      <DatePreview>{date}</DatePreview>
      <WeekDaySelector onDateChanged={onDateChanged} />
    </Content>
  )
}

storiesOf('react-week-day-select', module).add('Default', () => (
  <WrapComponent />
))
