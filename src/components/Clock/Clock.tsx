import '@/components/Clock/Clock.scss'
import {useEffect, useState} from 'react';
import TsSelector from "@/components/Clock/TsSelector/TsSelector.tsx";
import Time from "@/components/Clock/Time/Time.tsx";
import {detectTimezone, getTime} from "@/services/worldtimeapi.ts";


const Clock = () => {
    const [tz, setTz] = useState<string>("Europe/Prague");
    const [time, setTime] = useState<string>("Europe/Prague");

    useEffect(() => {
        async function detectTz() {
            const detected_tz = await detectTimezone()
            changeTz(detected_tz)
        }

        detectTz()
    }, [])

    function changeTz(tz: string) {
        setTz(tz)

        async function changeTime() {
            const time = await getTime(tz)
            setTime(time)
        }
        changeTime()
    }

    function tzChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        changeTz(event.target.value)
    }


    return (
        <div id={'clock'}>
            <TsSelector tzChangeHandler={tzChangeHandler} tz={tz} />
            <Time time={time} tz={tz} />
        </div>
    );
}

export default Clock;
