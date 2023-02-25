import { useEffect } from "react";
import TableLayout from "../../components/TableLayout";
import DndTableHeader from "../../components/DndTableHeader";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import axios, { AxiosResponse } from "axios";
import {
    DndState,
    setState,
    selectDndState,
} from './dndSlice';
import DndTableBody from "../../components/DndTableBody";

const Dnd = () => {
    // run as component did mount. 
    useEffect(() => {
        setTimeout(() => {
            getDndData();
          }, 5000);
    }, []);

    const dispatch = useAppDispatch();
    const dndState = useAppSelector(selectDndState);
    const getDndData = (): void => {
        axios.get<DndState>("https://www.dnd5eapi.co/api/spells").then((response: AxiosResponse<DndState>) => {
            const dndState: DndState = response.data;
            dispatch(setState(dndState));
        });
    }

    return (<div>
        <TableLayout header={<DndTableHeader />} body={<DndTableBody dndState={dndState} />} />
    </div>);
};

export default Dnd;
