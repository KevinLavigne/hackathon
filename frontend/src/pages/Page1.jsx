import React from "react";
import ExportContext from "../contexts/Context";

function Page1() {
  const { actionsList } = React.useContext(ExportContext.Context);

  console.warn(actionsList);
  return <div>Page1</div>;
}
export default Page1;
