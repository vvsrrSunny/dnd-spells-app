import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    classNames: string,
}

const TableHeaderCell = ({ children , ...props}: Props) => {
    return (
        <th
            scope="col"
            className={`py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 ${props.classNames}`}
        >
            {children}
        </th>
    );
}

TableHeaderCell.defaultProps = {
    classNames: '',
}
export default TableHeaderCell;
