
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DisplayResultLayout from "./DisplayResultLayout";
import Label from "./Label";
import ResultHeaderLayout from "./ResultHeaderLayout";
import Value from "./Value";

interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult
}

const DndSpellStringKeyValues = (props: Props) => {
    const asArray = Object.entries(props.dndSpellResult);
    const filteredStringKeyValues = asArray.filter(([key, value]) => typeof value !== 'object');
    const titleCase = (s: string) =>
        s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
            .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_
    return (
        <DisplayResultLayout>
            <ResultHeaderLayout header="Basic Info">
                {filteredStringKeyValues.map(([key, value]) => (
                    <div key={key} className="flex flex-row">
                        <Label>
                            {titleCase(key)} :
                        </Label>
                        <Value>{String(value)}</Value>
                    </div>
                ))}
            </ResultHeaderLayout>
        </DisplayResultLayout>
    );
}

export default DndSpellStringKeyValues;