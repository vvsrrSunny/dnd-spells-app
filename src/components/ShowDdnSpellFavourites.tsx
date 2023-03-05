
import { ReactNode, useState } from "react";
import FavButton from "./FavButton";
import ShowHeartIcon from "./ShowHeartIcon";
import ThePrompt from "./ThePrompt";


interface Props {
    children?: ReactNode,
    isFavourite: Boolean,
    onClickFavouriteButton: () => void,
}

const ShowDdnSpellFavourites = ({ children, ...props }: Props) => {

    const [promptOpen, setPromptOpen] = useState(false);

    const onFavouriteButtonClick = () => {
        setPromptOpen(true);
    }
    return (<>
        <div className="flex justify-between items-center pb-6">
            {props.isFavourite && (<ShowHeartIcon height="sm:h-8" width="sm:w-8" classNames="w-7 h-7" />)}
            <FavButton onFavouriteButtonClick={onFavouriteButtonClick} isFavourite={props.isFavourite} />
        </div>

        <ThePrompt promptOpen={promptOpen} promptOpenedCallback={() => setPromptOpen(false)} onClickAccept={props.onClickFavouriteButton}></ThePrompt>
    </>
    );
}

export default ShowDdnSpellFavourites;