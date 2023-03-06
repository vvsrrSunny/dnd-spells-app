import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    shouldDisabled: boolean,
    title: string,
    handleCheckboxChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const TheCheckBox = ({ children , ...props}: Props) => {

    return (
        <div className="relative flex items-start justify-end pb-2">
            <div className="flex h-6 items-center">
                <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    disabled={!props.shouldDisabled}
                    onChange={props.handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            </div>
            <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                    {props.title}
                </label>
            </div>
        </div>
    );
}

TheCheckBox.defaultProps = {
    title: 'Show My Favourites',
    shouldDisabled: false,
}
export default TheCheckBox;
