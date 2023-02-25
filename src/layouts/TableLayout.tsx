export default function TableLayout(props: any) {
    return (<div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                            {props.header ? props.header : null}
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {props.body ? props.body : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}