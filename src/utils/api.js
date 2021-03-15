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
            // urlBase/asset/contract/tokenID
    }

// look into pagination with
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
            .catch((error) => {
                return <p>{`Error: ${error}`}</p>;
            });

    }
}

export default Api;