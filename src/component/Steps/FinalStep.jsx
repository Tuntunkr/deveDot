import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import Rcard from "../../Pages/Rcard";

const FinalStep = ({ data }) => {
  console.log(data)
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>

        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <ul>
        <li>{data.Title}</li>
        
      </ul>


      {JSON.stringify(data, null, 4)}
      <Rcard/>
    </Paper>
  );
};

export default FinalStep;
