import { useState, useContext } from 'react';

import SliderEntity from '../../../entity/sliderEntity.js'
import { SplideSlide } from "@splidejs/react-splide";
import LocaleContext from '../../context/localeContext.js';
export default function SliderDetail({post}) {
    const { locale } = useContext(LocaleContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const cardStyle = {
        backgroundImage: `url('${post.image}')`,
        minHeight: '360px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        opacity: isHovered ? 0.9 : 1,
        transition: 'opacity 0.3s ease'
    };

    const labelStyle = {
        backgroundColor: '#FFFFFF80',
        opacity: isHovered ? 0.8 : 0,
        transition: 'opacity 0.3s ease'
    };

    //const displayClass = isHovered ? "d-block" : "d-none"

    const label = locale == "ja" ? post.label : post.label_en

    return (
        <SplideSlide key={post.title}>
            <div className="card relative" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="p-3 absolute bottom-0 left-0 w-full" style={labelStyle} >
                    <h5 className="text-[#333333]">{label}</h5>
                </div>
            </div>
        </SplideSlide>
    );
}


