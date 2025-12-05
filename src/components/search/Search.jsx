import { SearchOffOutlined, SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";

const Search = () => {
  return (
    <>
      <Paper
        className="w-[30%] h-12 flex justify-between"
        component={"form"}
        sx={{}}
      >
        <input
          type="search"
          placeholder="search"
          className="outline-none ml-5 w-[90%] font-medium"
        />
        <IconButton>
          <SearchOutlined />
        </IconButton>
      </Paper>
    </>
  );
};

export default Search;
