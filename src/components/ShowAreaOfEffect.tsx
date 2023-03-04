
import { ReactNode } from "react";
import { AreaOfEffectResult } from "../features/dndspell/dndSpellSlice";
import DisplayResultLayout from "./DisplayResultLayout";
import Label from "./Label";
import ResultHeaderLayout from "./ResultHeaderLayout";
import Value from "./Value";

interface Props {
    children?: ReactNode,
    areaOfEffect: AreaOfEffectResult | undefined
}

const ShowAreaOfEffect = (props: Props) => {

    const shouldRenderIndex = (value: string | number | undefined): boolean => {
        if (value === undefined) {
            return false;
        }

        return true;
    };

    if (typeof props.areaOfEffect !== 'undefined') {
        return (
            <DisplayResultLayout>
                <ResultHeaderLayout header="Area of Effect">
                    {shouldRenderIndex(props.areaOfEffect?.size) && (
                        <div className="flex flex-row">
                            <Label>
                                Size :
                            </Label>
                            <Value>{String(props.areaOfEffect?.size)}</Value>
                        </div>
                    )}
                    {shouldRenderIndex(props.areaOfEffect?.type) && (
                        <div className="flex flex-row">
                            <Label>
                                Type :
                            </Label>
                            <Value>{props.areaOfEffect?.type}</Value>
                        </div>
                    )}
                </ResultHeaderLayout>
            </DisplayResultLayout>
        );
    }

    return (<></>);

}

export default ShowAreaOfEffect;