import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const getMetaTags = ({title, headline, description, image, path}) => {
    const metaTags = [
        {name: 'description', content: description},

        {itemprop: 'name', content: headline || 'designhub'},
        {itemprop: 'description', content: description},
        {itemprop: 'image', content: image || 'https://i.imgur.com/D0vd1RA.jpg'},

        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@dsgnhb'},
        {name: 'twitter:creator', content: '@iamblwck'},
        {name: 'twitter:title', content: headline || 'designhub'},
        {name: 'twitter:description', content: description},
        {name: 'twitter:image:src', content: image || 'https://i.imgur.com/D0vd1RA.jpg'},
        {name: 'twitter:image', content: image || 'https://i.imgur.com/D0vd1RA.jpg'},

        {property: 'og:locale', content: 'de_DE'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: `https://designhub.fun${path}`},
        {property: 'og:site_name', content: 'designhub'},
        {property: 'og:title', content: headline || 'designhub'},
        {property: 'og:description', content: description},
        {property: 'og:image', content: image || 'https://i.imgur.com/D0vd1RA.jpg'},
        {property: 'og:image:secure_url', content: image || 'https://i.imgur.com/D0vd1RA.jpg'},

        {name: 'apple-mobile-web-app-title', content: 'designhub'},
        {name: 'theme-color', content: '#478CBE'},
        {name: 'application-name', content: 'designhub'}
    ];
    return metaTags;
};

const SEO = ({title, headline, description, image, path}) => (
    <Helmet
        htmlAttributes={{
            lang: 'de',
            itemscope: undefined,
            itemtype: `http://schema.org/website`
        }}
        title={title ? `designhub | ${title}` : 'designhub'}
        link={[{rel: 'canonical', href: `https://designhub.fun${path}`}]}
        meta={getMetaTags({
            title,
            headline,
            description,
            image,
            path
        })}
    />
);

SEO.propTypes = {
    title: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string
};

export default SEO;
