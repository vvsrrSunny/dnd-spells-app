import React, { ReactNode } from "react";
interface Props {
    children: ReactNode;
    header: string;
}

const ResultHeaderLayout = (props: Props) => {
    return (
        <div className="divide-y divide-gray-200">
            <div className="whitespace-normal py-4 px-3 text-sm font-semibold text-gray-900">{props.header}</div>
            {props.children}
        </div>
    );
};

export default ResultHeaderLayout;
