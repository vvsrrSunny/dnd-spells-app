import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    stringArray: string[] | undefined;
}

const ListStringArray = ({ children, ...props }: Props) => {
    return (
        <div className="flex justify-center">
            <ul className="w-full">
                {props.stringArray?.map((value: string) => (
                    <li
                        className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-gray-600">
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListStringArray;

