import React, { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import ShowClassDetails from "./ShowClassDetails";
import ShowDamageDetails from "./ShowDamageDetails";
import ShowSchool from "./ShowSchool";
interface Props {
    children?: ReactNode;
    dndSpellResult: DndSpellResult,
}

const DndSpellRightCol = (props: Props) => {
    return (
        <>
            <ShowSchool school={props.dndSpellResult.school}></ShowSchool>
            <ShowClassDetails name="Classes table" classList={props.dndSpellResult.classes}></ShowClassDetails>
            <ShowClassDetails name="Sub Classes table" classList={props.dndSpellResult.subclasses}></ShowClassDetails>
            <ShowDamageDetails damage={props.dndSpellResult.damage}></ShowDamageDetails>
        </>
    );
};

export default DndSpellRightCol;
