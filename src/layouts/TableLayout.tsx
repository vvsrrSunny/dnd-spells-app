import { Component } from "react";


function Header() {
    return null
}

function Body() {
    return null
}

interface Element {
    type?: any,
}

export default class TableLayout extends Component {
    static Header = Header;
    static Body = Body;

    render() {
        const { children }: any = this.props;
        const header = children.find((el: Element) => el.type === Header);
        const body = children.find((el: Element) => el.type === Body);

        return (<div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    {header ? header.props.children : null}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {body ? body.props.children : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}