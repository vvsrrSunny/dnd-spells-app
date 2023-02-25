import { useEffect } from "react";
import TableLayout from "../../components/TableLayout";
import DndTableHeader from "../../components/DndTableHeader";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import axios, { AxiosResponse } from "axios";
import {
    DndState,
    setState,
} from './dndSlice';
import DndTableBody from "./DndTableBody";

const Dnd = () => {
    // run as component did mount. 
    useEffect(() => {
        getDndData();
    }, []);

    const dispatch = useAppDispatch();

    const getDndData = (): void => {
        console.log("component did mount is executing")
        axios.get<DndState>("https://www.dnd5eapi.co/api/spells").then((response: AxiosResponse<DndState>) => {
            const dndState: DndState = response.data;
            dispatch(setState(dndState));
        });
    }

    return (<div>
        <TableLayout header={<DndTableHeader />} body={<DndTableBody people='people' />} />
    </div>);
};

export default Dnd;
