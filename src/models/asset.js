// Attempts to get certain property values from the API results
function getName(asset) {
    return asset.name ? asset.name : 'untitled';
}

function getDescription(asset) {
    return asset.description ? asset.description : 'No item description.';
}

function getThumbnail(asset) {
    // return asset.image_thumbnail_url ? asset.image_thumbnail_url : this.getImage(asset);
    return asset.image_thumbnail_url ? asset.image_thumbnail_url : null;
}

function getCreator(asset) {
    const creator = asset.creator;
    if (!creator) {
        return 'unknown creator';         
    }
    const user = creator.user;
    if (!user) {
        return 'unknown creator';
    }
    const username = user.username;
    if (username) {
        return username;
    }
    else {
        return 'unknown creator';
    }
}

function getContractAddress(asset) {
    const assetContract = asset.asset_contract;
    if (!assetContract) {
        return null;         
    }
    const address = assetContract.address;
    if (!address) {
        return null;
    }
    return address;
}

function getPrice(asset) {
    const lastSale = asset.last_sale;
    if (!lastSale) {
        return null;     
    }
    const paymentToken = lastSale.payment_token;
    if (!paymentToken) {
        return null;
    }
    const price = paymentToken.eth_price;
    if (price) {
        return price;
    }
    return null;
}

function getTraits(asset) {
    const traits = asset.traits;
    if (!traits || traits.length === 0) {
        return null;
    }

    return traits.map((trait) => {

        if (trait.trait_type && trait.value) {
            const object = {
                type: trait.trait_type,
                value: trait.value
            };
            return object;
        }
                
    });


}

class Asset {

    constructor(asset) {
        this.id = asset.id;
        this.tokenID = asset.token_id;
        this.contractAddress = getContractAddress(asset);
        this.imgUrl = asset.image_url;
        this.thumbnailUrl = getThumbnail(asset);
        this.name = getName(asset);
        this.description = getDescription(asset);
        this.creator = getCreator(asset);
        this.price = getPrice(asset);
        this.traits = getTraits(asset);

    }

    get valid() {
        if (this.imgUrl) {
            return true;
        }
        return false;
    }
}

export default Asset;
