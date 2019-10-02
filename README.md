# react-week-day-picker

React component that allow selecting week per year

## [Demo](https://fozg.github.io/react-week-day-picker/)

## Features

<img src="https://raw.githubusercontent.com/fozg/react-week-day-picker/master/stories/react-week-day-picker.png "/>

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @fozg/react-week-day-picker
```

or NPM:

```sh
npm install npm i @fozg/react-week-day-picker --save
```

## Usage
```js
import WeekDayPicker from 'react-week-day-picker'

function Page() {
  return (
    <WeekDayPicker onDateChanged={(date: Date) => {...}} />
  )
}
```