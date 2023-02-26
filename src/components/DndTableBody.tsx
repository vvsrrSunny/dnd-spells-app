
import { Loader } from '@mantine/core';
import { DndState } from '../features/dnd/dndSlice';
import TableCell from './TableCell';
import TableCellEdit from './TableCellEdit';

interface Props {
dndState : DndState
} 
const DndTableBody = (props: Props) => {

    const onClickView = (value: string | null) => {
        console.log(value);
    }
    return (<>
            {props.dndState.results.map((result: any) => (
                <tr key={result.index}>
                    <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{result.index}</TableCell>
                    <TableCell>{result.name}</TableCell>
                    <TableCellEdit href={`https://www.dnd5eapi.co${result.url}`} isUrl={true} name={result.url}>{result.url}</TableCellEdit>
                    <TableCellEdit value={result.url} onClick={onClickView}></TableCellEdit>
                </tr>
            ))}
    </>);
}

export default DndTableBody;