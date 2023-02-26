
import { Loader } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    show: Boolean,
}

const AppLoader = (props: Props) => {
    return (
        <div className={`container justify-center py-20 ${props.show ? 'flex' : 'hidden'}`}>
            <Loader size="xl" variant="dots" />
        </div>
    );
}

AppLoader.defaultProps = {
    show: false,
  };

export default AppLoader;