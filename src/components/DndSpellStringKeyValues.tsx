
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import StringKeyValueLabel from "./StringKeyValueLabel";

interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult
}

const DndSpellStringKeyValues = (props: Props) => {

    const asArray = Object.entries(props.dndSpellResult);
    const filteredStringKeyValues = asArray.filter(([key, value]) => typeof value !== 'object');

    return (
        <div className="overflow-hidden rounded-md bg-gray-50 shadow">
            <div role="list" className="divide-y divide-gray-200">
                {filteredStringKeyValues.map(([key, value]) => (
                    <div key={key} className="flex flex-row">
                        <div className="w-1/4 whitespace-normal py-4 px-3 text-sm font-medium text-gray-900">
                            {key} :
                        </div>
                        <div className="w-3/4 whitespace-normal py-4 px-3 text-sm text-gray-500">{String(value)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default DndSpellStringKeyValues;