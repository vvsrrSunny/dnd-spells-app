
import { Loader } from '@mantine/core';
import TableCell from './TableCell';
const DndTableBody = (props: any) => {
    return (<>
            {props.dndState.results.map((result: any) => (
                <tr key={result.index}>
                    <TableCell>{result.index}</TableCell>
                    <TableCell>{result.name}</TableCell>
                    <TableCell>{result.url}</TableCell>
                </tr>
            ))}
    </>);
}

export default DndTableBody;