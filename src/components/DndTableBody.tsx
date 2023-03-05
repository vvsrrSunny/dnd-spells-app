
import { DndFavouriteState } from '../features/dnd-favourite/dndFavouriteSlice';
import { DndResult, DndState } from '../features/dnd/dndSlice';
import ShowHeartIcon from './ShowHeartIcon';
import TableCell from './TableCell';
import TableCellEdit from './TableCellEdit';
import TableCellUrl from './TableCellUrl';

interface Props {
    dndState: DndState,
    dndFavList: DndFavouriteState,
}


const DndTableBody = (props: Props) => {

    return (<>
        {props.dndState.results.map((result: DndResult) => (
            <tr key={result.index}>
                <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{result.index}</TableCell>
                <TableCell>{result.name}</TableCell>
                <TableCellUrl href={`https://www.dnd5eapi.co${result.url}`} name={result.url} />
                <TableCell paddingXAxis="pr-4 sm:pr-6" classNames='flex justify-center'>{props.dndFavList.results.includes(result.index) ? <ShowHeartIcon/> : <ShowHeartIcon color='text-gray-200'/>}</TableCell>
                <TableCellEdit value={result.url}/>
            </tr>
        ))}
    </>);
}

export default DndTableBody;