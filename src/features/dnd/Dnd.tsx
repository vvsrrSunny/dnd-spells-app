import TableLayout from "../../components/TableLayout";
import DndTableHeader from "../../components/DndTableHeader";

const Dnd = () => {
    return (<div>
        <TableLayout header={<DndTableHeader/>} body={<div>body</div>} />
    </div>);
};

export default Dnd;
