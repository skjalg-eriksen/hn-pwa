import { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { Story } from './types';
import { fetchStories, fetchTopStoriesIds } from './utils/api';

export const Body = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [stories, setStories] = useState([] as Story[]);
    const [, setTopStoriesIds] = useState([] as number[]);

    const loadStories = async () => {
        const topStoriesIdsData = await fetchTopStoriesIds();
        setTopStoriesIds(topStoriesIdsData);

        const StoriesData = await fetchStories(topStoriesIdsData.slice(0, 10));
        setStories(StoriesData);

        setIsLoaded(true);
    };

    useEffect(() => {
        loadStories();
    }, []);
    return (
        <div>
            {!isLoaded && <p>LOADING...</p>}
            {!isLoaded && (
                <div className="flex animate-spin-slow items-center justify-center">
                    <svg width="192" height="192">
                        <polyline points="27,27 57,57" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="137,137 167,167" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="57,137 27,167" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="137,57 167,27" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="96,5 96,43" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="96,149 96,187" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="5,96 43,96" fill="black" strokeWidth="15" stroke="black" />
                        <polyline points="149,96 187,96" fill="black" strokeWidth="15" stroke="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
            )}
            {stories.map((it, index) => (
                // <div key={it.id}>{it.title}</div> 32,785
                <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} index={index + 1} />
            ))}
        </div>
    );
};
