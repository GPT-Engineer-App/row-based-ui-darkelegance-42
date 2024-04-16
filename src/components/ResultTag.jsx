import React from "react";
import { Badge } from "@chakra-ui/react";

const ResultTag = ({ result }) => {
  let colorScheme;
  switch (result.toLowerCase()) {
    case "not accepted":
      colorScheme = "red";
      result = "denied";
      break;
    case "accepted":
      colorScheme = "green";
      result = "accepted";
      break;
    case "requires_human_attention":
      colorScheme = "yellow";
      result = "requires attention";
      break;
    default:
      colorScheme = "gray";
  }

  return (
    <Badge colorScheme={colorScheme} borderRadius="full" px={2} py={1}>
      {result}
    </Badge>
  );
};

export default ResultTag;
