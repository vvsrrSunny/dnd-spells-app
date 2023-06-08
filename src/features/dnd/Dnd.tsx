import { useEffect } from "react";
import TableLayout from "../../components/TableLayout";
import DndTableHeader from "../../components/DndTableHeader";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import axios, { AxiosResponse } from "axios";
import {
    DndState,
    setState,
    selectDndState,
    DndResult,
} from './dndSlice';
import DndTableBody from "../../components/DndTableBody";
import AppLoader from "../../components/AppLoader";
import { selectDndFavouriteState } from "../dnd-favourite/dndFavouriteSlice";
import TheCheckBox from "../../components/TheCheckBox";

const Dnd = () => {
    // run as component did mount. 
    useEffect(() => {
        getDndData();
    }, []);

    const dispatch = useAppDispatch();

    const dndState = useAppSelector(selectDndState);

    const dndFavList = useAppSelector(selectDndFavouriteState);

    const getDndData = async () => {
        // axios.get<DndState>("https://www.dnd5eapi.co/api/spells").then((response: AxiosResponse<DndState>) => {
        //     const dndState: DndState = response.data;
        //     dispatch(setState(dndState));
        // }).catch((error) => {
        //     console.log(error);
        // });
        try {
            const response: AxiosResponse<DndState> = await axios.get<DndState>("https://www.dnd5eapi.co/api/spells");
            const dndState: DndState = response.data;
            dispatch(setState(dndState));
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {

            const myFavSpells: Array<DndResult> = dndState.results.filter((spell) => dndFavList.results.includes(spell.index));

            dispatch(setState({ count: myFavSpells.length, results: myFavSpells }));

            return;
        }

        dispatch(setState({ count: 0, results: [] }));

        getDndData();
    }

    return (<div>
        <TheCheckBox shouldDisabled={!!(dndState.count && dndFavList.count)} handleCheckboxChange={handleCheckboxChange} />
        <TableLayout header={<DndTableHeader />} body={<DndTableBody dndState={dndState} dndFavList={dndFavList} />} />
        <AppLoader show={dndState.count === 0} />
    </div>);
};

export default Dnd;
