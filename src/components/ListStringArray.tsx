import React, { ReactNode } from "react";
import { AttackType, AttackTypeResult } from "../features/dndspell/dndSpellSlice";
interface Props {
    children?: ReactNode;
    stringArray: string[] | AttackTypeResult | undefined;
    isAttackTypeEnum: boolean
}

const ListStringArray = ({ children, ...props }: Props) => {
    return (
        <div className="flex justify-center overflow-y-auto max-h-64">
            <ul className="w-full ">
                {props.stringArray?.map((value: any, index: number) => (
                    <li key={index}
                        className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-gray-600">
                        {props.isAttackTypeEnum ? AttackType[value as keyof typeof AttackType] : value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ListStringArray.defaultProps = {
    isAttackTypeEnum: false,
};
export default ListStringArray;

