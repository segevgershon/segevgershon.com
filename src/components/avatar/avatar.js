import Me from '~/assets/images/main-avatar.png';
import { get_random_item } from '~/util';
import React, { useRef , useState, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './avatar.css';

const containerStyle = {
    maxHeight : "60vh",
    marginTop : "5vh",
    marginBottom : "10vh",
    marginLeft: "auto",
    marginRight: "auto",

    position: "relative",
    align: "center",

    width:  "33vh",
    height: "60vh",

    maxWidth: "100%"
};

const avatarStyle = {
    zIndex: "100",
    top:    "20%",
    left:   "15%",
    position: "absolute",
};

const gradients = [
    // "#000428, #004e92", // Frost
    // "#02aab0, #00cdac", // Green Beach
    "#eecda3, #ef629f", // Tranquil
    "#7b4397, #dc2430", // Virgin America
    "#43cea2, #185a9d", // Endless River
    "#ff512f, #dd2476", // Bloody Mary
    "#ff5f6d, #ffc371", // Sweet Morning
    "#c33764, #1d2671", // Celestial
    "#141e30, #243b55", // Royal
    "#3a1c71, #d76d77, #ffaf7b", // Relay
];

const aurora = {
    zIndex: "1",
    top:    "0",
    left:   "0",
    position: "absolute",

    width:      "100%",
    paddingTop: "100%",

    backgroundImage: `radial-gradient(
        at top left,
        ${get_random_item(gradients)}
        )`,
};

const moveVerically = (from, to) => keyframes`
    0%, 100% {
        top: ${from}
    }

    50% {
        top: ${to}
    }
`

const AuroraLine = styled.div`
    animation:                 ${props =>
                moveVerically('0%', `${(100 - props.height) / 2 + 5}%`)};
    animation-delay:           ${props => props.index / 10}s;
    animation-duration:        5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    background-color:          white;
    border-radius:             99999999999px;
    box-shadow:                inset rgba(0,0,0,0.8) 0 0 0;
    height:                    ${props => props.height}%;
    left:                      1px;
    position:                  absolute;
    width:                     60%;
`

function useDimensions (ref) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const getDimensions = () => ({
            width: ref.current.getBoundingClientRect().width,
            height: ref.current.getBoundingClientRect().height,
        });

        const handleResize = () => {
            setDimensions(getDimensions());
        }

        if (ref.current) {
            setDimensions(getDimensions());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [ref, ref?.current?.offsetWidth]);

    return dimensions;
};

function Avatar() {
    const aurora_bg =  useRef(null);
    const { width, height } = useDimensions(aurora_bg);

    const item_width = 17;
    const item_offsets = () => ([...[...Array(Math.ceil(width / item_width))
                                .keys()]
                                .map(i => `${i * item_width}px`)]);
    const max_height = 90;
    const min_height = 6 / 4; // In percentage

    const index_to_height = index =>
        max_height - (index / (width / item_width)) * max_height / min_height;

    return (
        <div style={ containerStyle }>
            <div style={ aurora } ref={ aurora_bg }> </div>
            { item_offsets().map((value, index) => {
                return <div className="aurora-line-container"
                            key={ `aurora-line-${index}` }
                            style={{ "left":value,
                                     "width":`${item_width}px`,
                                     "height":`${height}px` }}>
                       { index !== Math.ceil(width / item_width) - 1 ||
                         width % item_width === 0 ?
                            <AuroraLine height={ index_to_height(index) }
                                        index={ index }/>
                             : <div/> }
                    </div>
            })}
            <img style={ avatarStyle } alt="Failed to load avatar" src={ Me }/>
        </div>
    );
}

export default Avatar;
