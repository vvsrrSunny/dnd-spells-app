
import { ReactNode } from "react";
import { DndSpellResult } from "../features/dndspell/dndSpellSlice";
import DndSpellLeftCol from "./DndSpellLeftCol";
import DndSpellResultGridLayout from "./DndSpellResultGridLayout";
import DndSpellRightCol from "./DndSpellRightCol";
import ShowDdnSpellFavourites from "./ShowDdnSpellFavourites";


interface Props {
    children?: ReactNode,
    dndSpellResult: DndSpellResult,
    isFavourite: Boolean,
    onClickFavouriteButton: () => void,
}

const ShowDndSpellResult = ({ children, ...props }: Props) => {
    return (<>
        <ShowDdnSpellFavourites onClickFavouriteButton={props.onClickFavouriteButton} isFavourite={props.isFavourite}></ShowDdnSpellFavourites>
        <DndSpellResultGridLayout dndSpellLeftCol={<DndSpellLeftCol dndSpellResult={props.dndSpellResult} />} dndSpellRightCol={<DndSpellRightCol dndSpellResult={props.dndSpellResult} />}></DndSpellResultGridLayout>
    </>
    );
}

export default ShowDndSpellResult;