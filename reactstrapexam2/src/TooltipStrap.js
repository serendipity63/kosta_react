import { useState } from "react";
import { Tooltip } from "reactstrap";
function TooltipStrap() {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ width: "800px" }}>
            <p>Somewhere in here is a <span style={{ textDecoration: "underline", color: "blue" }} id="tooltip">tooltip</span></p>
            <Tooltip placement="bottom" isOpen={open} target="tooltip" toggle={() => setOpen(!open)}>Hello Tooltip!</Tooltip>
        </div>
    )
}
export default TooltipStrap;