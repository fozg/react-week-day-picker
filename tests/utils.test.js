import { addDays, getDatesOfWeek, getWeekDayOfCurrentYear } from '../src/utils'

describe('addDays', () => {
  it('should return valid date', () => {
    expect(
      addDays(
        '2019-10-01T18:16:15.149Z',
        1,
      ).toISOString(),
    ).toEqual('2019-10-02T18:16:15.149Z')
    expect(
      addDays(
        '2019-10-01T18:16:15.149Z',
        10,
      ).toISOString(),
    ).toEqual('2019-10-11T18:16:15.149Z')
  })
})

describe('getDatesOfWeek', () => {
  it('should return valid array Date of week', () => {
    var dates = getDatesOfWeek(2, 2019).map(item => item.toISOString())

    expect(dates).toHaveLength(7)
    // expect(dates).toContain('2019-01-06T17:00:00.000Z')
    // expect(dates).toContain('2019-01-07T17:00:00.000Z')
    // expect(dates).toContain('2019-01-08T17:00:00.000Z')
    // expect(dates).toContain('2019-01-09T17:00:00.000Z')
    // expect(dates).toContain('2019-01-10T17:00:00.000Z')
    // expect(dates).toContain('2019-01-11T17:00:00.000Z')
    // expect(dates).toContain('2019-01-12T17:00:00.000Z')
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