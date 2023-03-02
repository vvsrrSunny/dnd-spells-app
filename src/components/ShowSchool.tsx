import { ReactNode } from "react";
import { School } from "../features/dndspell/dndSpellSlice";
import DisplayResultLayout from "./DisplayResultLayout";
import Label from "./Label";
import ResultHeaderLayout from "./ResultHeaderLayout";
import Value from "./Value";

interface Props {
    children?: ReactNode,
    school: School | undefined
}

const ShowSchool = (props: Props) => {

    const shouldRenderIndex = (value: string | number | undefined): boolean => {
        if (value === undefined) {
            return false;
        }

        return true;
    };

    if (typeof props.school !== 'undefined') {
        return (
            <DisplayResultLayout>
                <ResultHeaderLayout header="School">
                    {shouldRenderIndex(props.school?.index) && (
                        <div className="flex flex-row">
                            <Label>
                                Index :
                            </Label>
                            <Value>{String(props.school?.index)}</Value>
                        </div>
                    )}
                    {shouldRenderIndex(props.school?.name) && (
                        <div className="flex flex-row">
                            <Label>
                                Name :
                            </Label>
                            <Value>{props.school?.name}</Value>
                        </div>
                    )}
                    {shouldRenderIndex(props.school?.url) && (
                        <div className="flex flex-row">
                            <Label>
                                Url :
                            </Label>
                            <Value>{props.school?.url}</Value>
                        </div>
                    )}
                </ResultHeaderLayout>
            </DisplayResultLayout>
        );
    }

    return (<></>);

}

export default ShowSchool;