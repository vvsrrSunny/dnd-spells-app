import { ReactNode } from "react";
import ShowHeartIcon from "./ShowHeartIcon";

interface Props {
    children?: ReactNode,
    isFavourite: Boolean,
    onFavouriteButtonClick: () => void,
}

const FavButton = ({ children, ...props }: Props) => {

    return (<>
        <button onClick={props.onFavouriteButtonClick} className="flex flex-row space-x-1 items-center bg-transparent hover:bg-indigo-500 text-indigo-700 font-thin text-sm hover:text-white py-2 px-2 border border-indigo-500 hover:border-transparent rounded">
            <ShowHeartIcon color={props.isFavourite ? 'text-gray-400' : 'text-red-500'} />
            <span> {props.isFavourite ? 'Remove from favourites' : 'Add to favourites'}</span>
        </button>

    </>
    );
}

export default FavButton;