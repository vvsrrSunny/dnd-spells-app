import { ReactNode } from "react";
import { ClassList } from "../features/dndspell/dndSpellSlice";
import ClassTableBody from "./ClassTableBody";
import DisplayResultLayout from "./DisplayResultLayout";
import DndTableHeader from "./DndTableHeader";
import ResultHeaderLayout from "./ResultHeaderLayout";
import TableLayout from "./TableLayout";

interface Props {
    children?: ReactNode,
    classList: ClassList[] | undefined
    name: string
}

const ShowClassDetails = (props: Props) => {
    if (typeof props.classList !== 'undefined' && props.classList?.length !== 0) {
        return (
            <DisplayResultLayout>
                <ResultHeaderLayout header={props.name}>
                    <TableLayout maxHeight="max-h-64" isMainTable={false} isRoundedOnTop={false} header={<DndTableHeader classesTableHeader={true} />} body={<ClassTableBody classList={props.classList} />} />
                </ResultHeaderLayout>
            </DisplayResultLayout>
        );
    }
    return (<></>);
}

export default ShowClassDetails;