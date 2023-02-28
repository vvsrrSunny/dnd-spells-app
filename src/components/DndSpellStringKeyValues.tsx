
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
        <div className="px-4 sm:px-6 lg:px-8" >
            <div className=" flow-root">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y divide-gray-200">
                                    {filteredStringKeyValues.map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900">
                                                {key} :
                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{String(value)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DndSpellStringKeyValues;