
import { Loader } from '@mantine/core';
const DndTableBody = (props: any) => {
    return (<>
        <tr className='h-30'>
            <Loader color="dark" size="xl" variant="dots" />
        </tr>
    </>);
}

export default DndTableBody;