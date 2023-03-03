import React, { ReactNode } from "react";
import { AttackType } from "../features/dndspell/dndSpellSlice";
interface Props {
    children?: ReactNode;
    stringArray: AttackType[] | undefined;
}

const ListStringArray = ({ children, ...props }: Props) => {

    function isEnum(val: any): val is object {
        return val && typeof val === 'object' && 'name' in val && 'value' in val;
      }
      
    console.log(isEnum(props.stringArray), "test");
    return (
        <div className="flex justify-center overflow-y-auto max-h-64">
            <ul className="w-full ">
                {props.stringArray?.map((value: string, index: number) => (
                    <li key={index}
                        className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-gray-600">
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListStringArray;

