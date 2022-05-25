import React from 'react';
import '../../Sass/Pages/homepage.scss';
const VideoPage = () => {
    return (
        <>
            <div className="video-page">
                <video controls>
                    <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                        type="video/mp4"
                    ></source>
                    Sorry, your browser doesn't support videos.
                </video>
            </div>
        </>
    );
};

export default VideoPage;

