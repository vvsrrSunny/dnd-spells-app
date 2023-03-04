
import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    paddingXAxis: string,
    fontSize: string,
    textColor: string,
}

const TableCell = ({ children, ...props }: Props) => {
    return (
        <td className={`whitespace-nowrap ${props.paddingXAxis} py-4 ${props.fontSize} text-sm ${props.textColor}`}>
            {children}
        </td>
    );
}

TableCell.defaultProps = {
    fontSize: null,
    paddingXAxis: 'px-3', 
    textColor: 'text-gray-600',
    ClassName: null,
  };

export default TableCell;