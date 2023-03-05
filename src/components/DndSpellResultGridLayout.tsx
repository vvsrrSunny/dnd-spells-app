
import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    dndSpellLeftCol?: ReactNode,
    dndSpellRightCol?: ReactNode,
}

const DndSpellResultGridLayout = ({ children, ...props }: Props) => {
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y gap-4 sm:gap-6">
            <div className="flex flex-col space-y-4 md:space-y-8">
                {props.dndSpellLeftCol}
            </div>
            <div className="flex flex-col space-y-4 md:space-y-8">
                {props.dndSpellRightCol}
            </div>
        </div>
    </>
    );
}

export default DndSpellResultGridLayout;