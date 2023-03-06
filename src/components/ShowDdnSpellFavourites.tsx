
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

    const [promptTitle, setPromptTitle] = useState('');

    const [promptAcceptButtonTitle, setPromptAcceptButtonTitle] = useState('');

    const [promptBody, setPromptBody] = useState('');
    
    const [promptAcceptButtonColor, setPromptAcceptButtonColor] = useState('indigo');

    const onFavouriteButtonClick = () => {
        setPromptOpen(true);
    }

    const updatedPromptData = () => {
        if (props.isFavourite) {
            setPromptTitle("Remove from Favourite");
            setPromptAcceptButtonTitle("Remove from Favourite");
            setPromptBody("Are you sure you want to remove from favourites ?");
            setPromptAcceptButtonColor('red');

            return;
        }

        setPromptTitle("Add to Favourite");
        setPromptAcceptButtonTitle("Add to Favourite");
        setPromptBody("Are you sure you want to add to favourites ?");
        setPromptAcceptButtonColor('indigo');
    }

    return (<>
        <div className="flex justify-between items-center pb-6">
            {props.isFavourite && (<ShowHeartIcon height="sm:h-8" width="sm:w-8" classNames="w-7 h-7" />)}
            <FavButton onFavouriteButtonClick={onFavouriteButtonClick} isFavourite={props.isFavourite} />
        </div>

        <ThePrompt title={promptTitle} acceptButtonTitle={promptAcceptButtonTitle} body={promptBody} acceptButtonColor={promptAcceptButtonColor} promptOpen={promptOpen} promptOpenedCallback={() => setPromptOpen(false)} promptClosedCallback={updatedPromptData} onClickAccept={props.onClickFavouriteButton}></ThePrompt>
    </>
    );
}

export default ShowDdnSpellFavourites;