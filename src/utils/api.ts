export const HN_HOST = 'https://hacker-news.firebase.io.com/v0';

export const fetchTopStoriesIds = async () => {
    const response = await fetch(`${HN_HOST}/topstories.json`);
    const topstoriesIds = await response.json();
    console.log(topstoriesIds);
    return topstoriesIds;
};

fetchTopStoriesIds();
