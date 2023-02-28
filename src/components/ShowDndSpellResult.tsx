
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DndSpellStringKeyValues from "./DndSpellStringKeyValues";

interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult,
}

const ShowDndSpellResult = ({ children, ...props }: Props) => {
    return (
        <div className="grid  grid-cols-1  md:grid-cols-2 divide-x gap-4 md:gap-6">
        <DndSpellStringKeyValues dndSpellResult={props.dndSpellResult} />
        <div>
            {Object.keys(props.dndSpellResult).map((key: string, index: any) => (
                <p key={key}>{key}</p>
            ))}
        </div>
    </div>
    );
}

export default ShowDndSpellResult;