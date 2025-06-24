


import { Label, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export function SearchBar() {
  return (
    <div className="flex  gap-4">
      <div className="relative">
        <TextInput  id="small" type="text"  sizing="sm" placeholder="Search Employee..."  />
        <CiSearch className="absolute top-2" />
      </div>
     
    </div>
  );
}
