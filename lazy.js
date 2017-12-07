import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazy-load';
class Lazy_img extends React.Component{
    render() {
        return (
            <div className="list">
                Scroll to load images.
                <LazyLoad height={762}>
                    <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
                </LazyLoad>
                <LazyLoad height={683}>
                    <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
                </LazyLoad>
                <LazyLoad height={480}>
                    <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
                </LazyLoad>
                <LazyLoad
                    height={720}
                    offset={400} // 在视口底部400的距离就加载
                    onContentVisible={() => console.log('look ma I have been lazyloaded!')}
                >
                    <img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
                </LazyLoad>
            </div>
        )
    }
}
export default Lazy_img