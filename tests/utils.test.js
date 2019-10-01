import { addDays, getDatesOfWeek, getWeekDayOfCurrentYear } from '../src/utils'

describe('addDays', () => {
  it('should return valid date', () => {
    expect(
      addDays(
        'Sat Jan 05 2019 00:00:00 GMT+0700 (Indochina Time)',
        1,
      ).toString(),
    ).toEqual('Sun Jan 06 2019 00:00:00 GMT+0700 (Indochina Time)')
    expect(
      addDays(
        'Sat Jan 05 2019 00:00:00 GMT+0700 (Indochina Time)',
        10,
      ).toString(),
    ).toEqual('Tue Jan 15 2019 00:00:00 GMT+0700 (Indochina Time)')
  })
})

describe('getDatesOfWeek', () => {
  it('should return valid array Date of week', () => {
    var dates = getDatesOfWeek(2, 2019).map(item => item.toISOString())

    expect(dates).toHaveLength(7)
    expect(dates).toContain('2019-01-05T17:00:00.000Z')
    expect(dates).toContain('2019-01-06T17:00:00.000Z')
    expect(dates).toContain('2019-01-06T17:00:00.000Z')
    expect(dates).toContain('2019-01-07T17:00:00.000Z')
    expect(dates).toContain('2019-01-08T17:00:00.000Z')
    expect(dates).toContain('2019-01-09T17:00:00.000Z')
    expect(dates).toContain('2019-01-10T17:00:00.000Z')
    expect(dates).toContain('2019-01-11T17:00:00.000Z')
  })
})

describe('getWeekCurrentYear', () => {
  it('should return correct week of Date', () => {
    expect(getWeekDayOfCurrentYear(new Date("2019-1-1"))).toEqual(1);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-2"))).toEqual(1);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-3"))).toEqual(1);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-4"))).toEqual(1);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-5"))).toEqual(1);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-6"))).toEqual(2);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-7"))).toEqual(2);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-11"))).toEqual(2);
    expect(getWeekDayOfCurrentYear(new Date("2019-1-12"))).toEqual(2);
    expect(getWeekDayOfCurrentYear(new Date("2019-12-21"))).toEqual(51);    
    expect(getWeekDayOfCurrentYear(new Date("2019-12-22"))).toEqual(52);    
    expect(getWeekDayOfCurrentYear(new Date("2019-12-28"))).toEqual(52);
    expect(getWeekDayOfCurrentYear(new Date("2019-12-29"))).toEqual(53);
    expect(getWeekDayOfCurrentYear(new Date("2019-12-30"))).toEqual(53);
    expect(getWeekDayOfCurrentYear(new Date("2019-12-31"))).toEqual(53);
  })
})