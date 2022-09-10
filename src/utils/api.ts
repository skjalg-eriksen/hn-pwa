import { Story } from '../types';

/* https://github.com/HackerNews/API */
export const HN_HOST = 'https://hacker-news.firebaseio.com/v0';

export const fetchTopStoriesIds = async (): Promise<number[]> => {
    const response = await fetch(`${HN_HOST}/topstories.json`);
    const topStoriesIds = await response.json();
    return topStoriesIds;
};

export const fetchStory = async (id: number): Promise<Story> => {
    const response = await fetch(`${HN_HOST}/item/${id}.json`);
    const storyData = await response.json();

    const story: Story = {
        id: storyData.id,
        by: storyData.by,
        title: storyData.title,
        url: storyData.url,
    };
    return story;
};

export const fetchStories = async (ids: number[]) => {
    const stories = await Promise.all(ids.map(fetchStory));
    return stories;
};
