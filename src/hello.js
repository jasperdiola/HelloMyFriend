import React from "react";

const hello = () => {
    return React.createElement(
        'div', null, React.createElement(
            'h1', null, 'Hello, My Friend'
            )
    )
}

export default hello