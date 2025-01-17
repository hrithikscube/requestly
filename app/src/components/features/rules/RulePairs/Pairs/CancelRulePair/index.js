import React from "react";
import RequestSourceRow from "../Rows/RowsMarkup/RequestSourceRow";

const CancelRulePair = ({ pair, pairIndex, helperFunctions, ruleDetails, isInputDisabled }) => (
  <RequestSourceRow
    rowIndex={1}
    pair={pair}
    pairIndex={pairIndex}
    helperFunctions={helperFunctions}
    ruleDetails={ruleDetails}
    isInputDisabled={isInputDisabled}
  />
);

export default CancelRulePair;
