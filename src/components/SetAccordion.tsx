
import { ReactNode } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

interface Props {
    children?: ReactNode,
    open: number,
    accordionNumber: number,
    header: string,
    accordionClick: (value: number) => void;
}

const SetAccordion = ({ children, ...props }: Props) => {
    return (
        <>
            {/* @ts-ignore */}
            <Accordion open={props.open === props.accordionNumber} className="text-sm font-normal">
                {/* @ts-ignore */}
                <AccordionHeader className="text-sm" onClick={() => props.accordionClick(props.accordionNumber)}>
                    {props.header}
                </AccordionHeader>
                <AccordionBody>
                    {children}
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default SetAccordion;