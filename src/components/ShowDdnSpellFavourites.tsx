
import { HeartIcon } from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";
import ShowHeartIcon from "./ShowHeartIcon";
import ThePrompt from "./ThePrompt";


interface Props {
    children?: ReactNode,
    isFavourite: Boolean,
    onClickFavouriteButton: () => void,
}

const ShowDdnSpellFavourites = ({ children, ...props }: Props) => {

    const [promptOpen, setPromptOpen] = useState(false);

    const OnFavouriteButtonClick = () => {
        setPromptOpen(true);
    }
    return (<>
        <div className="flex justify-between items-center pb-6">
            {props.isFavourite && (<ShowHeartIcon height="sm:h-8" width="sm:w-8" classNames="w-7 h-7"/>)}
            <button onClick={OnFavouriteButtonClick} className="flex flex-row space-x-1 items-center bg-transparent hover:bg-indigo-500 text-indigo-700 font-thin text-sm hover:text-white py-2 px-2 border border-indigo-500 hover:border-transparent rounded">
                <ShowHeartIcon color={`${props.isFavourite ? 'text-gray-400' : 'text-red-500'}`}/>
                <span> {`${props.isFavourite ? 'Remove from favourites' : 'Add to favourites'}`}</span>
            </button>
        </div>

        <ThePrompt promptOpen={promptOpen} promptOpenedCallback={() => setPromptOpen(false)} onClickAccept={props.onClickFavouriteButton}></ThePrompt>
    </>
    );
}

export default ShowDdnSpellFavourites;