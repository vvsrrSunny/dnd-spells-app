import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const Label = (props: Props) => {
    return (
        <div className="w-1/2 sm:w-1/4 whitespace-normal py-4 px-3 text-sm font-medium text-gray-900">
            {props.children}
        </div>
    );
};

export default Label;
