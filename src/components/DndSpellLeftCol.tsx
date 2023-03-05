import React, { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DndSpellStringKeyValues from "./DndSpellStringKeyValues";
import ShowAreaOfEffect from "./ShowAreaOfEffect";
import ShowDescLevelsComponents from "./ShowDescLevelsComponents";
interface Props {
    children?: ReactNode;
    dndSpellResult: DndSpellResult,
}

const DndSpellLeftCol = (props: Props) => {
    return (
        <>
            <DndSpellStringKeyValues dndSpellResult={props.dndSpellResult} />
            <ShowAreaOfEffect areaOfEffect={props.dndSpellResult.area_of_effect} />
            <ShowDescLevelsComponents desc={props.dndSpellResult.desc} higher_level={props.dndSpellResult.higher_level} components={props.dndSpellResult.components} />
        </>
    );
};

export default DndSpellLeftCol;
