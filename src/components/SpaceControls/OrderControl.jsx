import React from "react";

const orderKeys = [
  { label: "Popularity", value: "popularity" },
  { label: "Name", value: "name" },
  { label: "WiFi Speed", value: "wifiSpeed" },
  { label: "Distance", value: "distance" }
];

const OrderControl = ({ order, onChange }) => (
  <div>
    <select
      value={order.key}
      onChange={({ target }) =>
        onChange(order => ({ ...order, key: target.value }))
      }
    >
      {orderKeys.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    <button
      onClick={() => onChange(order => ({ ...order, order: -order.order }))}
    >
      {order.order === 1 ? "↑" : "↓"}
    </button>
  </div>
);

export default OrderControl;
