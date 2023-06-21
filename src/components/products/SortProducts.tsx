import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};
export default function SortProducts({ sort, setSort }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Sort by</InputLabel>
      <Select value={sort} label="SortBy" onChange={handleChange}>
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="ascending">A-Z</MenuItem>
        <MenuItem value="descending">Z-A</MenuItem>
        <MenuItem value="priceDown">Price up</MenuItem>
        <MenuItem value="priceUp">Price down</MenuItem>
      </Select>
    </FormControl>
  );
}
