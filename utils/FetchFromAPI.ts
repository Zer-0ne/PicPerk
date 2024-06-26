import { Item } from "@/app/(tabs)";

const apiKey = '6f102c62f41998d151e5a1b48713cf13';
export const searchQuery = async (queries: { [key: string]: string | number }) => {
    try {
        const { query, page } = queries
        // Base URL for the Flickr API
        const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';

        // Search parameters
        const searchParams = {
            api_key: apiKey,
            format: 'json',
            nojsoncallback: 1,
            extras: 'url_s',
            text: query,
            page// Specify the page number here
        };

        // Construct the full URL
        const url = baseUrl + '&' + new URLSearchParams(searchParams as unknown as Record<string, string>);
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const allImage = async (query: { [key: string]: string | number }) => {
    try {
        const { page } = query;
        const FLICKR_API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&format=json&nojsoncallback=1`;
        const searchParams = {
            api_key: apiKey,
            format: 'json',
            nojsoncallback: 1,
            extras: 'url_s',
            page// Specify the page number here
        };
        const url = FLICKR_API_URL + '&' + new URLSearchParams(searchParams as unknown as Record<string, string>);
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}