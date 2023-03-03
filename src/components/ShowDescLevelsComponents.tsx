import { Fragment, ReactNode, useState } from "react";
import SetAccordion from "./SetAccordion";
import DisplayResultLayout from "./DisplayResultLayout";
import ListStringArray from "./ListStringArray";

interface Props {
    children?: ReactNode;
    desc: string[] | undefined;
    higher_level: string[] | undefined;
    components: string[] | undefined;
}
export default function ShowDescLevelsComponents(props: Props) {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number): void => {
        setOpen(open === value ? 0 : value);
    };

    const shouldRenderIndex = (value: string[] | undefined): boolean => {
        if (value === undefined) {
            return false;
        }

        if (value.length === 0) {
            return false;
        }

        return true;
    };

    return (
        <DisplayResultLayout>
            <div className="px-3">
                <Fragment>
                    {shouldRenderIndex(props.desc) && (
                        <SetAccordion open={open} accordionNumber={2} accordionClick={handleOpen} header={"Desc"}>
                            <ListStringArray stringArray={props.desc} />
                        </SetAccordion>
                    )}
                    {shouldRenderIndex(props.higher_level) && (
                        <SetAccordion open={open} accordionNumber={3} accordionClick={handleOpen} header={"Higher Level"}>
                            <ListStringArray stringArray={props.higher_level} />
                        </SetAccordion>
                    )}
                    {shouldRenderIndex(props.components) && (
                        <SetAccordion open={open} accordionNumber={4} accordionClick={handleOpen} header={"Components"}>
                            <ListStringArray isAttackTypeEnum = {true} stringArray={props.components} />
                        </SetAccordion>
                    )}
                </Fragment>
            </div>
        </DisplayResultLayout>
    );
}