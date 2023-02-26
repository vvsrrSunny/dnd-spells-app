import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  href: string;
  isUrl: boolean;
  name: string;
  value: string | null;
  onClick?: (value: string | null) => void;
}



const TableCellEdit = (props: Props) => {

  const clickedNow = () => {
    if (typeof props.onClick !== 'undefined') {
      props.onClick(props.value);
    }
  }

  return (
    <td className={` text-sm whitespace-nowrap ${props.isUrl ? 'px-3 py-4 null underline text-gray-500' : 'relative py-4 pl-3 pr-4 text-right font-medium sm:pr-6'}`}>
      {/* <a href={props.href} target={props.isUrl ? '_blank' : ''} className={`${props.isUrl ? 'text-indigo-600 hover:text-indigo-900' : 'inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}>
        {props.name}<span className="sr-only">dnd</span>
      </a> */}
      <a href={props.href} target={props.isUrl ? '_blank' : ''} rel="noreferrer" onClick={clickedNow} className={`${props.isUrl ? 'text-indigo-600 hover:text-indigo-900' : 'inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}>
        {props.name}<span className="sr-only">dnd</span>
      </a>
    </td>
  );
};

TableCellEdit.defaultProps = {
  href: "#",
  isUrl: false,
  name: 'View',
  value: null,
};

export default TableCellEdit;
