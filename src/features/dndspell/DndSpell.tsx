import { ReactNode } from "react";
import {useParams } from "react-router-dom";
interface Props {
    children?: ReactNode,
}

const DndSpell = (props: Props) => {
 const {index} = useParams();
    return (
        <div>The router referring to {index}</div>
    );
}


export default DndSpell;