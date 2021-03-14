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

class Api {

    constructor(urlBase = defaultUrl) {
        this.urlBase = urlBase;
    }

    getAssets(direction = DIRECTION.desc, offset = 10000, limit = 50) {
        return this.getAssetsWithCache([], direction, offset, limit);
    }

    getAssetsWithCache(cache = [], direction = DIRECTION.desc, offset = 0) {

        const url = `${this.urlBase}${ROUTES.assets}?order_direction=${direction}&offset=${offset}&limit=50`;

        return fetch(url)
            .then((res) => res.json())
            .then((res) => res.assets.map((asset) => {
                const a = new Asset(asset);
                // if (a.imgUrl && a.thumbnailUrl) {
                //     cache.push(a);
                // }
                // store new asset in cache at index of ID
                // cache[a.id] = a;    
                return a;

            }))
            // .then(() => {
            //     if (cache.length < limit) {
            //         this.getAssetsWithCache(cache, direction, offset+50, 50);
            //     }
            // })
    }
}

export default Api;