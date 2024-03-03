import '@/components/Clock/Time/Time.scss'

type TimeProps = {
    time: string
    tz: string
};

const Time = (props: TimeProps) => {
    return (
        <div id={'Time'}>
            It's {props.time} in {props.tz}
        </div>
    );
}

export default Time;
