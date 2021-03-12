import Asset from '../models/asset';

const defaultUrl = 'https://api.opensea.io/api/v1';

const ROUTES = {
    assets: '/assets',
    bundles: '/bundles'
}

export const DIRECTION = {
    asc: 'asc',
    desc: 'desc'
}

// const cache = {};

class Api {

    constructor(urlBase = defaultUrl) {
        this.urlBase = urlBase;
    }

    getAssets(direction = DIRECTION.desc, offset = 10000, limit = 50) {
        return this.getAssetsASDF([], direction, offset, limit);
    }

    getAssetsASDF(cache = [], direction = DIRECTION.desc, offset = 0) {

        // get Limit items from api
        // change using our asset class
        // test for image urls
            // if pass test, push to cache

        const url = `${this.urlBase}${ROUTES.assets}?order_direction=${direction}&offset=${offset}&limit=50`;

        return fetch(url)
            .then((res) => res.json())
            .then((res) => res.assets.map((asset) => {
                const a = new Asset(asset);
                if (a.imgUrl && a.thumbnailUrl) {
                    cache.push(a);
                }
                // store new asset in cache at index of ID
                // cache[a.id] = a;    
                return a;

            }))
            // .then(() => {
            //     if (cache.length < limit) {
            //         this.getAssetsASDF(cache, direction, offset+50, 50);
            //     }
            // })
    }
}

export default Api;