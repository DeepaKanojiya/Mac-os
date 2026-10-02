import React, { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(() => formatDateTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 60_000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{dateTime}</div>;
}

function formatDateTime(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  );

  return `${values.weekday.toLowerCase()}  ${values.month.toLowerCase()}  ${values.day}  ${values.hour}:${values.minute}${values.dayPeriod}`;
}

export default DateTime;
