import TableLayout from "../../layouts/TableLayout";
import DndTableHeader from "./DndTableHeader";

const Dnd = () => {
    return (<div>
        <TableLayout header={<DndTableHeader/>} body={<div>body</div>} />
    </div>);
};

export default Dnd;
