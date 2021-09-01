import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();

  return (
    <>
      <IconButton
        onClick={() => history.goBack()}
        // disabled={!isHistoryRoot(history)}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={() => history.goForward()}
        // disabled={!isHistoryLeaf(history)}
      >
        <NavigateNextIcon />
      </IconButton>
    </>
  );
}