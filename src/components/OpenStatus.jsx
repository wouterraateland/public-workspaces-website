import React from "react";
import moment from "moment";
import styled from "styled-components";

const Indicator = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  border-radius: 0.5em;

  background-color: ${props =>
    props.theme.color[props.isOpen ? "success" : "error"]};
`;

const OpenStatus = ({ openingHours }) => {
  if (!openingHours) {
    return "Opening hours unknown";
  }

  const now = moment();
  const openingHoursToday = openingHours.find(
    ({ open, close }) => open.day <= now.day() && close.day >= now.day()
  );

  if (!openingHoursToday) {
    return (
      <>
        <Indicator />
        Closed today
      </>
    );
  }

  const open = moment(openingHoursToday.open.time, "HHmm");
  const close = moment(openingHoursToday.close.time, "HHmm");

  close.add(openingHoursToday.close.day - openingHoursToday.open.day, "days");

  if (now < open) {
    return (
      <>
        <Indicator />
        Open today from {open.format("HH:mm")}
      </>
    );
  } else if (now < close) {
    return (
      <>
        <Indicator isOpen />
        Open until {close.format("HH:mm")}
      </>
    );
  } else {
    const openingHoursTomorrow = openingHours.find(
      ({ open, close }) =>
        (open.day + 6) % 7 <= now.day() && (close.day + 6) % 7 >= now.day()
    );

    const openTomorrow = moment(openingHoursTomorrow.open.time, "HHmm");
    return (
      <>
        <Indicator />
        Open tomorrow from {openTomorrow.format("HH:mm")}
      </>
    );
  }
};

export default OpenStatus;
