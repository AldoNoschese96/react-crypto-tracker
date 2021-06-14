import React, { useState } from "react";

//Icons
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";

const ArrowOrderHandler = ({ onOrdering, defaultValue = false }) => {
  const [order, setOrder] = useState(defaultValue);

  const renderIconsHandler = () => {
    if (!order) {
      return (
        <ArrowDownIcon
          className="h-3 w-3"
          onClick={() => {
            setOrder(!order);
            onOrdering(order);
          }}
        />
      );
    }
    return (
      <ArrowUpIcon
        className="h-3 w-3"
        onClick={() => {
          setOrder(!order);
          onOrdering(order);
        }}
      />
    );
  };

  return renderIconsHandler();
};

export default ArrowOrderHandler;
