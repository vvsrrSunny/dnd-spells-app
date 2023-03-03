import { ReactNode } from "react";
import { DamageChildLevel } from "../features/dndspell/dndSpellSlice";
import LabelAndValue from "./LabelAndValue";
import ResultHeaderLayout from "./ResultHeaderLayout";

interface Props {
    children?: ReactNode,
    damage_at_character_level: DamageChildLevel | undefined
    damage_at_slot_level: DamageChildLevel | undefined
}



const ShowDamageChildLevel = (props: Props) => {
    const title = (): string => {
        if (typeof props.damage_at_character_level !== 'undefined') {
            return "Damage At Character Level";
        }

        return "Damage At Slot Level";
    }

    if (typeof props.damage_at_character_level !== 'undefined' || typeof props.damage_at_slot_level !== 'undefined') {
        return (
            <div className="overflow-y-auto max-h-64">
                <ResultHeaderLayout header={title()}>
                    {(props?.damage_at_character_level) && (Object.entries(props.damage_at_character_level).map(([key, value]: any) => (
                        <LabelAndValue key={key} label={key} value={value} />
                    )))}
                    {(props?.damage_at_slot_level) && (Object.entries(props.damage_at_slot_level).map(([key, value]: any) => (
                        <LabelAndValue key={key} label={key} value={value} />
                    )))}
                </ResultHeaderLayout>
            </div>
        );
    }

    return (<></>);

}

export default ShowDamageChildLevel;