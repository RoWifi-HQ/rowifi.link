import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export function changelogDate(dateString: string) {
    const day = dayjs(dateString);
    const date = day.format('dddd, MMMM Do YYYY');
    const relative = day.fromNow();
    return date + " (" + relative + ")";
}