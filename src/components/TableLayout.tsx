import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    header?: ReactNode,
    body?: ReactNode,
    isRoundedOnTop: Boolean,
    maxHeight: string,
    isMainTable: Boolean
}
export default function TableLayout(props: Props) {
    return (<div className="flex flex-col">
        <div className={`-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ${props.isMainTable ? '-mx-4' : ''}`}>
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className={`overflow-hidden shadow ring-1 ring-black ring-opacity-5 ${props.isRoundedOnTop ? 'md:rounded-lg' : 'md:rounded-b-lg'}`}>
                    <div className={`overflow-y-auto ${props.maxHeight}`}>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    {props.header ? props.header : null}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {props.body ? props.body : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

TableLayout.defaultProps = {
    isRoundedOnTop: true,
    maxHeight: 'h-full',
    isMainTable: true,
};