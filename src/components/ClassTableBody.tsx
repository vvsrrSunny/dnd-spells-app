
import { ReactNode } from 'react';
import { ClassList } from '../features/dndspell/dndSpellSlice';
import TableCell from './TableCell';
import TableCellEdit from './TableCellEdit';
import TableCellUrl from './TableCellUrl';

interface Props {
    children?: ReactNode,
    classList: ClassList[]
}

const ClassTableBody = (props: Props) => {

    return (<>
        {props.classList.map((result: ClassList) => (
            <tr key={result.index}>
                <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{result.index}</TableCell>
                <TableCell>{result.name}</TableCell>
                <TableCellUrl href={`https://www.dnd5eapi.co${result.url}`} name={result.url} />
            </tr>
        ))}
    </>);
}

export default ClassTableBody;