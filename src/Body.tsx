import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { Story } from './types';
import { fetchStories, fetchTopStoriesIds } from './utils/api';

export const Body = () => {
    const [stories, setStories] = useState([] as Story[]);
    const [topStoriesIds, setTopStoriesIds] = useState([] as number[]);

    const loadStories = async () => {
        const topStoriesIdsData = await fetchTopStoriesIds();
        setTopStoriesIds(topStoriesIdsData);

        const StoriesData = await fetchStories(topStoriesIdsData.slice(0, 10));
        setStories(StoriesData);
    };

    useEffect(() => {
        loadStories();
    }, []);

    return (
        <div>
            {stories.map((it, index) => (
                // <div key={it.id}>{it.title}</div>
                <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} index={index + 1} />
            ))}
        </div>
    );
};
