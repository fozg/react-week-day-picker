export function addDays(date: Date, days: number): Date {
  const cur_date = typeof date === "object" ? date : new Date(date);
  var time = cur_date.getTime();
  time += days * 86400000; // 24 * 60 * 60 * 1000
  return new Date(time);
}

export function getDatesOfWeek(week: number, year?: number): Array<Date> {
  const simple = new Date(year || new Date().getFullYear(), 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4)
    ISOweekStart.setDate(simple.getDate() - simple.getDay());
  else
    ISOweekStart.setDate(simple.getDate() + 7 - simple.getDay());

  return Array(7).fill(null).map((_, idx) => (
    addDays(ISOweekStart, idx)
  ))
}

export function getWeekDayOfCurrentYear(date: Date = new Date()): number {
  const current_year = new Date().getFullYear();
  const start_date = new Date(`1/1/${current_year}`);
  const start_year_time = start_date.getTime();
  const weekday_start_date = start_date.getDay();

  const current_time = addDays(date, - (date.getDay() - weekday_start_date)).getTime();

  return Math.floor((current_time - start_year_time) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

export function getWeekDay(date: Date): string {
  var weekday = new Array(7);
  weekday[0] = "sun";
  weekday[1] = "mon";
  weekday[2] = "tue";
  weekday[3] = "wed";
  weekday[4] = "thu";
  weekday[5] = "fri";
  weekday[6] = "sat";
  return weekday[date.getDay()]
}

export function getMonthString(date: Date): string {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return monthNames[date.getMonth()];
}