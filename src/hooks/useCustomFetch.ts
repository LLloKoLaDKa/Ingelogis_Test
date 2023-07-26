import useFetch from "http-react";

const fetcher = (url: string, config: any) => fetch(url, config)

export function UseCustomFetch(url: string) {
    return useFetch(url, { fetcher })
}