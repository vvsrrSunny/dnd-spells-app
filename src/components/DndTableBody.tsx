
import { DndResult, DndState } from '../features/dnd/dndSlice';
import TableCell from './TableCell';
import TableCellEdit from './TableCellEdit';
import TableCellUrl from './TableCellUrl';

interface Props {
    dndState: DndState
}


const DndTableBody = (props: Props) => {

    const onClickView = (value: string | null) => {
        console.log(value);
    }

    return (<>
        {props.dndState.results.map((result: DndResult) => (
            <tr key={result.index}>
                <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{result.index}</TableCell>
                <TableCell>{result.name}</TableCell>
                <TableCellUrl href={`https://www.dnd5eapi.co${result.url}`} name={result.url} />
                <TableCellEdit value={result.url} onClick={onClickView} />
            </tr>
        ))}
    </>);
}

export default DndTableBody;