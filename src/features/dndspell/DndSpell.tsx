import { ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DndSpellResult, selectDndSpellState, setState } from "./dndSpellSlice";
import axios, { AxiosResponse } from "axios";
import AppLoader from "../../components/AppLoader";
import DndSpellStringKeyValues from "../../components/DndSpellStringKeyValues";
import ShowDndSpellResult from "../../components/ShowDndSpellResult";
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
        });
    }
    return (<>
        <div className={dndSpellState.data.index === index ? 'show' : 'hidden'}>
            <ShowDndSpellResult dndSpellResult={dndSpellState.data} />
        </div>
        <AppLoader show={dndSpellState.data.index !== index} />
    </>
    );
}


export default DndSpell;