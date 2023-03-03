import { ReactNode } from "react";
import Label from "./Label";
import Value from "./Value";

interface Props {
    children?: ReactNode;
    label: string | number | boolean | undefined;
    value: string | number | boolean | undefined;
    key?: string | number | undefined;
}

const LabelAndValue = ({ children, ...props }: Props) => {
    return (
        <div key={props.key} className="flex flex-row">
            <Label>
                {(props?.value !== undefined) ? String(props.label) : ` index `} :
            </Label>
            <Value>{(props?.value !== undefined) ? String(props.value) : ` - `}</Value>
        </div>
    );
}

export default LabelAndValue;