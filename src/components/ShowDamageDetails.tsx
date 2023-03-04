import { Fragment, ReactNode, useState } from "react";
import SetAccordion from "./SetAccordion";
import DisplayResultLayout from "./DisplayResultLayout";
import { Damage, DamageType } from "../features/dndspell/dndSpellSlice";
import ShowDamageType from "./ShowDamageType";
import ShowDamageChildLevel from "./ShowDamageChildLevel";

interface Props {
    children?: ReactNode;
    damage: Damage | undefined;
}
export default function ShowDamageDetails(props: Props) {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number): void => {
        setOpen(open === value ? 0 : value);
    };

    const shouldRenderIndex = (value: DamageType | undefined): boolean => {
        if (value === undefined) {
            return false;
        }

        return true;
    };

    if (typeof props.damage !== 'undefined') {
        return (
            <DisplayResultLayout>
                <div className="px-3">
                    <Fragment>
                        {shouldRenderIndex(props.damage.damage_type) && (
                            <SetAccordion open={open} accordionNumber={2} accordionClick={handleOpen} header={"Damage"}>
                                <DisplayResultLayout>
                                    <div className="divide-y-2">
                                        <ShowDamageType damage_type={props.damage.damage_type} />
                                        <ShowDamageChildLevel damage_at_character_level={props.damage?.damage_at_character_level} damage_at_slot_level={props.damage?.damage_at_slot_level} />
                                    </div>
                                </DisplayResultLayout>
                            </SetAccordion>
                        )}
                    </Fragment>
                </div>
            </DisplayResultLayout>
        );
    }
    return (<></>);
}