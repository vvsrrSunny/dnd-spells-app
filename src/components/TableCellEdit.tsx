import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  children?: ReactNode;
  name: string;
  value: string;
  onClick?: (value: string) => void;
}



const TableCellEdit = (props: Props) => {

  const clickedNow = () => {
    if (typeof props.onClick !== 'undefined') {
      props.onClick(props.value);
    }
  }

  return (
    <td className="text-sm whitespace-nowrap relative py-4 pl-3 pr-4 text-right font-medium sm:pr-6">
      <Link onClick={clickedNow} to={props.value} className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {props.name}<span className="sr-only">dnd</span>
      </Link>

    </td>
  );
};

TableCellEdit.defaultProps = {
  name: 'View',
  value: "",
};

export default TableCellEdit;
