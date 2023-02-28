import { ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DndSpellResult, selectDndSpellState, setState } from "./dndSpellSlice";
import axios, { AxiosResponse } from "axios";
import AppLoader from "../../components/AppLoader";
import DndSpellStringKeyValues from "../../components/DndSpellStringKeyValues";
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
            <div className="grid  grid-cols-1  md:grid-cols-2 divide-x gap-4 md:gap-6">
                <DndSpellStringKeyValues dndSpellResult={dndSpellState.data} />
                <div>
                    {Object.keys(dndSpellState.data).map((key: string, index: any) => (
                        <p key={key}>{key}</p>
                    ))}
                </div>
            </div>
        </div>
        <AppLoader show={dndSpellState.data.index !== index} />
    </>
    );
}


export default DndSpell;