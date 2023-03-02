
import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const DisplayResultLayout = ({ children }: Props) => {
    return (
        <div className="overflow-hidden rounded-md bg-gray-50 shadow">
            {children}
        </div>
    );
};

export default DisplayResultLayout;
