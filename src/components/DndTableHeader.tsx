import { ReactNode } from "react";
import TableHeaderCell from "./TableHeaderCell";
interface Props {
    children?: ReactNode;
    classesTableHeader: Boolean;
}
const DndTableHeader = (props: Props) => {
    return (
        <>
            <TableHeaderCell>Index</TableHeaderCell>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>url</TableHeaderCell>

            <div className={`${props.classesTableHeader ? 'hidden' : 'block'}`}>
                <TableHeaderCell classNames='flex justify-center items-center'>My Favourite</TableHeaderCell>
                <th scope="col" className={`relative py-3 pl-3 pr-4 sm:pr-6`}>
                    <span className="sr-only">view</span>
                </th>
            </div>
        </>
    );
}

DndTableHeader.defaultProps = {
    classesTableHeader: false,
};

export default DndTableHeader;