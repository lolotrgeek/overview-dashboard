// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

const UrlFrame = ({ url, title }) => {
    return (
        <iframe role="iframe" src={url} title={title} />
    )
}

UrlFrame.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default UrlFrame
