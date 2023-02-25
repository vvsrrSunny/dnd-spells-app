import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const TableHeaderCell = ({ children}: Props) => {
    return (
        <th
            scope="col"
            className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
        >
            {children}
        </th>
    );
}

export default TableHeaderCell;