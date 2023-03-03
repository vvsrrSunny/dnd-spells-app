import { ReactNode } from "react";
import { School } from "../features/dndspell/dndSpellSlice";
import DisplayResultLayout from "./DisplayResultLayout";
import LabelAndValue from "./LabelAndValue";
import ResultHeaderLayout from "./ResultHeaderLayout";

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
                        <LabelAndValue  label="Index" value={props.school?.index} />
                    )}
                    {shouldRenderIndex(props.school?.name) && (
                        <LabelAndValue label="Name" value={props.school?.name} />
                    )}
                    {shouldRenderIndex(props.school?.url) && (
                        <LabelAndValue label="Url" value={props.school?.url} />
                    )}
                </ResultHeaderLayout>
            </DisplayResultLayout>
        );
    }

    return (<></>);

}

export default ShowSchool;