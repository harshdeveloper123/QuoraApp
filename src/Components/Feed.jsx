//this code is totally dedicated to post section on the home page of quora app. The post are static.
import React, { useState } from 'react';
import './Feed.css'; // Make sure to create appropriate styles
//created array of objects and add the post into this.
const posts = [
    {
        id: 1,
        user: 'Harsh',
        date: '2024-05-27',
        content: 'IPL 2024: While other teams employed wide-of-off-stump lines to thwart marauding batters, Kolkata went the other way, scalping most wickets while bowling the most dot balls. IPL champions Kolkata Knight Riders bowling coach Bharat Arun recalls a bowlers meeting mid-way through the tournament.',
        image: '/Kkr.avif',
    },
    {
        id: 2,
        user: 'News Align',
        date: '2024-05-27',
        content: 'The BJP is fighting the Lok Sabha polls alone in Punjab after almost three decades. Why is the BJP, which ruled Punjab in coalition with the Shiromani Akali Dal for 15 years, finding it difficult to make inroads in the state? Which of the 13 seats looks favourable for it?',
        image: '/election.avif',
    },
    {
        id: 3,
        user: 'Charlie',
        date: '2024-05-26',
        content: 'As many as 1.12 crore tourists have visited Ayodhya in over two months since the newly constructed Ram temple opened its doors for devotees on Jan 23. The tourism department said Thursday an average 1.25 lakh pilgrims visit the temple town daily to seek the blessings of Ram Lalla',
        image:'/ramMandir.avif'
    }
];
//code for expand the post text like click on read more to expand the post and read less to make the default view of post
const Feed = () => {
    const [expandedPostIds, setExpandedPostIds] = useState([]);

    const handleReadMoreClick = (postId) => {
        setExpandedPostIds((prev) => {
            if (prev.includes(postId)) {
                return prev.filter((id) => id !== postId);
            } else {
                return [...prev, postId];
            }
        });
    };

    return (
        <>
        {/* mapping on post to make the post in the form of list  */}
        <div className="feed">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <div className="post-header">
                        <div className="user-icon">
                            {post.user[0]}
                        </div>
                        <div className="user-details">
                            <span className="user-name">{post.user}</span>
                            <span className="post-date">{post.date}</span>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>
                            {/* logic to read more the to expand the text of post  */}
                            {expandedPostIds.includes(post.id) ? post.content : `${post.content.substring(0, 100)}... `}
                            <span className="read-more" onClick={() => handleReadMoreClick(post.id)}>
                                {expandedPostIds.includes(post.id) ? 'Read less' : 'Read more'}
                            </span>
                        </p>
                    </div>
                    {post.image && <img src={post.image} alt="Post" className="post-image" />}
                </div>
            ))}
        </div>
        </>
    );
};

export default Feed;
