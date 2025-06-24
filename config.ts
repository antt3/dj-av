import type { AvailabilitySlotsMap } from "./lib/types"

export const ALLOWED_DURATIONS = [...Array(6).keys()].map((v) => (v + 1) * 15);

export const DEFAULT_DURATION = 30

export const CALENDARS_TO_CHECK = ["primary"]
export const SLOT_PADDING = 15
export const OWNER_TIMEZONE = "America/Los_Angeles"
export const LEAD_TIME = 0

const DEFAULT_WORKDAY = [
  {
    start: {
      hour: 0,
    },
    end: {
      hour: 24,
    },
  },
]

export const OWNER_AVAILABILITY: AvailabilitySlotsMap = {
  0: DEFAULT_WORKDAY,
  1: DEFAULT_WORKDAY,
  2: DEFAULT_WORKDAY,
  3: DEFAULT_WORKDAY,
  4: DEFAULT_WORKDAY,
  5: DEFAULT_WORKDAY,
  6: DEFAULT_WORKDAY,
}

export const LOCAL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
}

export const LOCAL_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
}
