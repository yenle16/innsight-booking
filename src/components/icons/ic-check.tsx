import React from 'react'

const IcCheck = ({ width, height, color }:IconType)  => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width}
            height={height}
            viewBox="0 0 448 512"
            >
                <path 
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    fill={color}
                />
        </svg>

    )
}
IcCheck.defaultProps = {
    width: 26,
    height: 22,
    color: "#48BA63",
}
export default IcCheck