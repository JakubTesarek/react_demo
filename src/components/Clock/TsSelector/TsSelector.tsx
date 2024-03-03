import Form from 'react-bootstrap/Form';
import '@/components/Clock/TsSelector/TsSelector.scss'
import {ReactEventHandler, useEffect, useState} from "react";
import {getTimezones} from "@/services/worldtimeapi.ts";

type TsSelectorProps = {
    tzChangeHandler: ReactEventHandler<HTMLSelectElement>
    tz: string
};
const TsSelector = (props: TsSelectorProps) => {
    const [allTz, setAllTz] = useState<string[]>([]);

    useEffect(() => {
        async function listTz() {
            const available_tz = await getTimezones()
            setAllTz(available_tz)
        }

        listTz()
    }, [])

    return (
        <Form.Select onChange={props.tzChangeHandler} value={props.tz}>
             {allTz.map((tz, key) => (
                 <option key={key} value={tz}>{tz}</option>
             ))}
        </Form.Select>
    );
}

export default TsSelector;
