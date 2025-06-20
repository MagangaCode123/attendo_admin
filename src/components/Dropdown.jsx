import { Dropdown, DropdownItem } from "flowbite-react";


export default function Mydropdown( { options}) {
 


  return (
    <Dropdown  className="bg-gray-100 border border-gray-400 mt-2 rounded-md shadow-md text-gray-600" label="Dropdown button" dismissOnClick={false}>
        {options.map((option, index) => (
            <DropdownItem key={index}>
            {option.name}
            </DropdownItem>
        ))}

    </Dropdown>
  );
}

