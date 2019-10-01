# react-week-day-picker


React component that allow selecting week per year

## Features

<img src="https://raw.githubusercontent.com/fozg/react-week-day-picker/example/react-week-day-picker.png" />

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add react-week-day-picker
```

or NPM:

```sh
npm install react-week-day-picker --save
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