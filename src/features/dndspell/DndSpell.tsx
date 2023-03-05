import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DndSpellResult, selectDndSpellState, setState } from "./dndSpellSlice";
import axios, { AxiosResponse } from "axios";
import AppLoader from "../../components/AppLoader";
import ShowDndSpellResult from "../../components/ShowDndSpellResult";
import { addState, selectDndFavouriteState } from "../dnd-favourite/dndFavouriteSlice";
interface Props {
    children?: ReactNode,
}

const DndSpell = (props: Props) => {
    // run as component did mount.
    useEffect(() => {
        getDndSpellData();
    }, []);

    const { index } = useParams();

    const dispatch = useAppDispatch();

    const [isFavourite, setIsFavourite] = useState(false)

    const dndFavList = useAppSelector(selectDndFavouriteState);

    // get the dnd spell store
    const dndSpellState = useAppSelector(selectDndSpellState);

    const getDndSpellData = (): void => {
        // already we have the current result in the store. 
        if (dndSpellState.data.index === index) {
            return;
        }

        axios.get<DndSpellResult>(`https://www.dnd5eapi.co/api/spells/${index}`).then((response: AxiosResponse<DndSpellResult>) => {
            const dndSpellResult: DndSpellResult = response.data;

            dispatch(setState(dndSpellResult));

            setIsFavourite(isFavouriteDndSpell())
        });
    }

    const isFavouriteDndSpell = () => {
        if (dndFavList.results.includes(dndSpellState.data.index)) {
            return true;
        }

        return false;
    }

    const onClickFavouriteButton = () => {
        // add current index to the favourites
        dispatch(addState(dndSpellState.data.index));

        setIsFavourite(true);
    };

    return (<>
        <div className={dndSpellState.data.index === index ? 'show' : 'hidden'}>
            <ShowDndSpellResult onClickFavouriteButton={onClickFavouriteButton} dndSpellResult={dndSpellState.data} isFavourite={isFavourite} />
        </div>
        <AppLoader show={dndSpellState.data.index !== index} />
    </>
    );
}


export default DndSpell;