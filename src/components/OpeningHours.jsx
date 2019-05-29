import React from "react";
import moment from "moment";
import styled from "styled-components";

const Table = styled.table`
  & td {
    padding: 0.5em;
  }
`;

const OpeningHours = ({ openingHours }) => {
  return (
    <>
      <h3>Opening Hours</h3>
      {openingHours ? (
        <Table>
          <tbody>
            {openingHours.map(({ open, close }) => {
              const openTime = moment(open.time, "HHmm");
              const closeTime = moment(close.time, "HHmm");

              return (
                <tr key={open.day}>
                  <td>
                    {moment()
                      .day(open.day)
                      .format("dddd")}
                  </td>
                  <td>
                    <strong>
                      {openTime.format("HH:mm")} - {closeTime.format("HH:mm")}
                    </strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        "Unknown"
      )}
    </>
  );
};

export default OpeningHours;
