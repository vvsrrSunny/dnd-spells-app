import TableHeaderCell from "./TableHeaderCell";

const TableLayoutHeader = () => {
    return (
        <tr>
            <TableHeaderCell>Index</TableHeaderCell>
            <TableHeaderCell>name</TableHeaderCell>
            <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">view</span>
            </th>
        </tr>
    );
}

export default TableLayoutHeader;