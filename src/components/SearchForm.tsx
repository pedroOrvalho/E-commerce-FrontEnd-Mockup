import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  userSearch: string;
  setUserSearch: Dispatch<SetStateAction<string>>;
};

export default function SearchForm({ userSearch, setUserSearch }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserSearch(event.target.value);
  }

  function handleClear(): void {
    setUserSearch("");
    const inputField = document.getElementById("standard-basic") as HTMLInputElement;
    if (inputField) {
      inputField.value = "";
    }
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", textAlign: "center", padding: "1rem 0rem" }}
    >
      <Box>
        <TextField
          sx={{ width: "15rem" }}
          value={userSearch}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            style: {
              borderRadius: "30px",
            },
          }}
        />
      </Box>
      <Button
        sx={{
          color: "white",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "gray",
          },
          borderRadius: "30px",
          marginLeft: "0.5rem",
        }}
        variant="contained"
      >
        <Typography variant="button">CLEAR</Typography>
      </Button>
    </Box>
  );
}
