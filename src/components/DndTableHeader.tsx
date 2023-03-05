import { ReactNode } from "react";
import TableHeaderCell from "./TableHeaderCell";
interface Props {
    children?: ReactNode;
    showViewButton: Boolean;
}
const DndTableHeader = (props:Props) => {
    return (
        <>
            <TableHeaderCell>Index</TableHeaderCell>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>url</TableHeaderCell>
            <TableHeaderCell>My Favourite</TableHeaderCell>
            <th scope="col" className={`relative py-3 pl-3 pr-4 sm:pr-6 ${props.showViewButton ? 'block' : 'hidden'}`}>
                <span className="sr-only">view</span>
            </th>
        </>
    );
}

DndTableHeader.defaultProps = {
    showViewButton: true,
  };

export default DndTableHeader;