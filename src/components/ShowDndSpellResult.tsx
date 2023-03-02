
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DndSpellStringKeyValues from "./DndSpellStringKeyValues";
import ShowAreaOfEffect from "./ShowAreaOfEffect";
import ShowClassDetails from "./ShowClassDetails";
import ShowDescLevelsComponents from "./ShowDescLevelsComponents";
import ShowSchool from "./ShowSchool";

interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult,
}

const ShowDndSpellResult = ({ children, ...props }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y gap-4 sm:gap-6">
            <div className="flex flex-col space-y-4 md:space-y-8">
                <DndSpellStringKeyValues dndSpellResult={props.dndSpellResult} />
                <ShowAreaOfEffect areaOfEffect={props.dndSpellResult.area_of_effect} />
                <ShowDescLevelsComponents desc={props.dndSpellResult.desc} higher_level={props.dndSpellResult.higher_level} components={props.dndSpellResult.components} />
            </div>
            <div>
            <div className="flex flex-col space-y-4 md:space-y-8">
                <ShowSchool school={props.dndSpellResult.school}></ShowSchool>
                <ShowClassDetails name="Classes table"classList={props.dndSpellResult.classes}></ShowClassDetails>
                <ShowClassDetails name="Sub Classes table" classList={props.dndSpellResult.subclasses}></ShowClassDetails>
                {/* {Object.keys(props.dndSpellResult).map((key: string, index: any) => (
                    <p key={key}>{key}</p>
                ))} */}
                </div>
            </div>
        </div>
    );
}

export default ShowDndSpellResult;