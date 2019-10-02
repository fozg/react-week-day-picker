# react-weekdays-picker

React component that allow selecting week per year

## [Demo](https://fozg.github.io/react-weekdays-picker/)

## Features

<img src="https://raw.githubusercontent.com/fozg/react-weekdays-picker/master/stories/react-weekdays-picker.png "/>

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @fozg/react-weekdays-picker
```

or NPM:

```sh
npm install npm i @fozg/react-weekdays-picker --save
```

## Usage
```js
import WeekDayPicker from 'react-weekdays-picker'

function Page() {
  return (
    <WeekDayPicker onDateChanged={(date: Date) => {...}} />
  )
}
```