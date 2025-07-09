import React, { useEffect, useState } from 'react';
import moment from 'moment';
type Props = {
    timeTillDate: string
    timeFormat: string
}
const CountDown = (props: Props) => {
    const { timeTillDate, timeFormat } = props;
    const [timeLeft, setTimeLeft] = useState<Record<string, string | null>>({
        seconds: null,
        minutes: null,
        hours: null,
        days: null,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment.duration(then.diff(now));

            if (countdown.asMilliseconds() <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            setTimeLeft({
                days: String(Math.floor(countdown.asDays())).padStart(2, '0'),
                hours: String(countdown.hours()).padStart(2, '0'),
                minutes: String(countdown.minutes()).padStart(2, '0'),
                seconds: String(countdown.seconds()).padStart(2, '0'),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeTillDate, timeFormat]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <ul className="ps-countdown">
            <li>
                <span className="days">{days}</span>
                <p>Days</p>
            </li>
            <li>
                <span className="hours">{hours}</span>
                <p>Hours</p>
            </li>
            <li>
                <span className="minutes">{minutes}</span>
                <p>Minutes</p>
            </li>
            <li>
                <span className="seconds">{seconds}</span>
                <p>Seconds</p>
            </li>
        </ul>
    );
};

export default CountDown;
