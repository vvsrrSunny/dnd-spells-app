import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    href: string;
    name: string;
}



const TableCellUrl = (props: Props) => {
    return (
        <td className="text-sm whitespace-nowrap px-3 py-4 null underline text-gray-500">
            <a href={props.href} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-900">
                {props.name}<span className="sr-only">dnd</span>
            </a>
        </td>
    );
};

TableCellUrl.defaultProps = {
    href: "#",
    name: 'link',
};

export default TableCellUrl;
