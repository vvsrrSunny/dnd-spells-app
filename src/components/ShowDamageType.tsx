import { ReactNode } from "react";
import { DamageType } from "../features/dndspell/dndSpellSlice";
import LabelAndValue from "./LabelAndValue";
import ResultHeaderLayout from "./ResultHeaderLayout";

interface Props {
    children?: ReactNode,
    damage_type: DamageType | undefined
}

const ShowDamageType = (props: Props) => {

    const shouldRenderIndex = (value: string | number | undefined): boolean => {
        if (value === undefined) {
            return false;
        }

        return true;
    };

    if (typeof props.damage_type !== 'undefined') {
        return (
            <ResultHeaderLayout header="Damage Level">
                {shouldRenderIndex(props.damage_type?.index) && (
                    <LabelAndValue label="Index" value={props.damage_type?.index} />
                )}
                {shouldRenderIndex(props.damage_type?.name) && (
                    <LabelAndValue label="Name" value={props.damage_type?.name} />
                )}
                {shouldRenderIndex(props.damage_type?.url) && (
                    <LabelAndValue label="Url" value={props.damage_type?.url} />
                )}
            </ResultHeaderLayout>
        );
    }

    return (<></>);

}

export default ShowDamageType;