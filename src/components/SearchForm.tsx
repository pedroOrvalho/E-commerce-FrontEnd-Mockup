import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
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
    <div className="searchForm_container">
      <div className="searchForm_content">
        <TextField
          value={userSearch}
          id="standard-basic"
          label="Enter an country..."
          variant="standard"
          onChange={handleChange}
        />
      </div>
      <div className="form_clear">
        <Button variant="text" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
}
