import React from 'react'

const IcAvatar = ({ width, height, color }:IconType)  => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <path
                d="M14 0C6.26613 0 0 6.26613 0 14C0 21.7339 6.26613 28 14 28C21.7339 28 28 21.7339 28 14C28 6.26613 21.7339 0 14 0ZM14 5.41935C16.7435 5.41935 18.9677 7.64355 18.9677 10.3871C18.9677 13.1306 16.7435 15.3548 14 15.3548C11.2565 15.3548 9.03226 13.1306 9.03226 10.3871C9.03226 7.64355 11.2565 5.41935 14 5.41935ZM14 24.8387C10.6863 24.8387 7.71694 23.3371 5.72984 20.9887C6.79113 18.9903 8.86855 17.6129 11.2903 17.6129C11.4258 17.6129 11.5613 17.6355 11.6911 17.675C12.425 17.9121 13.1927 18.0645 14 18.0645C14.8073 18.0645 15.5806 17.9121 16.3089 17.675C16.4387 17.6355 16.5742 17.6129 16.7097 17.6129C19.1315 17.6129 21.2089 18.9903 22.2702 20.9887C20.2831 23.3371 17.3137 24.8387 14 24.8387Z"
                fill={color}
            />
        </svg>

    )
}
IcAvatar.defaultProps = {
    width: 26,
    height: 22,
    color: "#1B395B",
}

export default IcAvatar