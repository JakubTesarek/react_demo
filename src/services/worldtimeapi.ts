export async function getTimezones(): Promise<string[]> {
    const url = `http://worldtimeapi.org/api/timezone`;
    const response = await fetch(url);
    return await response.json();
}

export async function detectTimezone(): Promise<string> {
    const url = `http://worldtimeapi.org/api/ip`;
    const response = await fetch(url);

    const tz_info = await response.json()
    return tz_info.timezone
}

export async function getTime(tz: string): Promise<string> {
    const url = `http://worldtimeapi.org/api/timezone/${tz}`;
    const response = await fetch(url);

    const tz_info = await response.json()
    return tz_info.datetime
}