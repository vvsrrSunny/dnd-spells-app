
import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    key: string
    value: string
}

const StringKeyValueLabel = ({ ...props }: Props) => {
    return (
        <div key = {props.key} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            
        </div>
    );
}


export default StringKeyValueLabel;