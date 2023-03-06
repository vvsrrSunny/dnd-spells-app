
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DisplayResultLayout from "./DisplayResultLayout";
import LabelAndValue from "./LabelAndValue";
import ResultHeaderLayout from "./ResultHeaderLayout";

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
            <ResultHeaderLayout header="Basic Information">
                {filteredStringKeyValues.map(([key, value]) => (
                    <LabelAndValue key={key} label={titleCase(key)} value={value} />
                ))}
            </ResultHeaderLayout>
        </DisplayResultLayout>
    );
}

export default DndSpellStringKeyValues;