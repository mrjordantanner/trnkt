import Asset from '../models/asset';

const defaultUrl = 'https://api.opensea.io/api/v1';

const ROUTES = {
    assets: '/assets',
    asset: '/asset',
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

    getSingleAsset(contract, tokenID) {

    }

//     curl --request GET \
//   --url https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/556324/

// look into this
// perPage, page, total

    getAssets(direction = DIRECTION.desc, offset = 0) {

        const url = `${this.urlBase}${ROUTES.assets}?order_direction=${direction}&offset=${offset}&limit=50`;

        return fetch(url)
            .then((res) => res.json())
            .then((res) => res.assets.map((asset) => {
                return new Asset(asset);

            }))
            .then((assets) => assets.filter((asset) => {
                return asset.valid;
            }))
    }
}

export default Api;