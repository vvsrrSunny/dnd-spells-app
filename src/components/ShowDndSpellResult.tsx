
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DndSpellStringKeyValues from "./DndSpellStringKeyValues";
import ShowDescLevelsComponents from "./ShowDescLevelsComponents";

interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult,
}

const ShowDndSpellResult = ({ children, ...props }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-y gap-4 sm:gap-6">
            <div>
                <DndSpellStringKeyValues dndSpellResult={props.dndSpellResult} />
                <ShowDescLevelsComponents desc={props.dndSpellResult.desc} higher_level={props.dndSpellResult.higher_level} components={props.dndSpellResult.components}/>
            </div>
            
            <div>
                {Object.keys(props.dndSpellResult).map((key: string, index: any) => (
                    <p key={key}>{key}</p>
                ))}
            </div>
        </div>
    );
}

export default ShowDndSpellResult;