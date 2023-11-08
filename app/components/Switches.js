import React from "react";
import { Switch } from "@headlessui/react";

const Switches = ({ enableOption, setEnableOption }) => {
  const [enableOption, setEnableOption] = useState(false);

  return (
    <Switch
      checked={enableOption}
      onChange={setEnableOption}
      className={`${
        enableOption ? "bg-blue-600" : "bg-neutral-400"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enableOption ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default Switches;
