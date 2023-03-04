import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const Value = (props: Props) => {
    return (
        <div className="w-1/2 sm:w-3/4 whitespace-normal py-4 px-3">
            <p className="text-sm text-gray-600 text-ellipsis overflow-hidden">{props.children}
            </p>
        </div>
    );
};

export default Value;
