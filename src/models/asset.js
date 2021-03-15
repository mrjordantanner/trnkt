import { getAllByTestId } from "@testing-library/dom";


// Attempts to get certain property values from the API results
function getName(asset) {
    return asset.name ? asset.name : 'untitled';
}

function getDescription(asset) {
    return asset.description ? asset.description : 'No item description.';
}

// function getImage(asset) {
//     return asset.image_url ? asset.image_url : 'No image';
// }

// Return thumbnail if there is one, or the full size image
function getThumbnail(asset) {
    // return asset.image_thumbnail_url ? asset.image_thumbnail_url : this.getImage(asset);
    return asset.image_thumbnail_url ? asset.image_thumbnail_url : null;
}

function getCreator(asset) {
    const creator = asset.creator;
    if (!creator) {
        // console.log('creator was null')
        return 'unknown creator';         
    }
    const user = creator.user;
    if (!user) {
        // console.log('user was null')
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
        // console.log('assetContract was null')
        return null;         
    }
    const address = assetContract.address;
    if (!address) {
        // console.log('address was null')
        return null;
    }
    return address;
}

function getPrice(asset) {
    const lastSale = asset.last_sale;
    if (!lastSale) {
        // console.log('lastSale was null')
        return null;     
    }
    const paymentToken = lastSale.payment_token;
    if (!paymentToken) {
        // console.log('paymentToken was null')
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
        // console.log('no traits');
        return null;
    }

    return traits.map((trait) => {

        // Each Trait is represented by an object with two properties, Type and Value
        // Map over the array of traits from the API and create an object for each trait to hold the type/value
        // Push the trait object into the traitsArray that will hold all traits

        if (trait.trait_type && trait.value) {
            const object = {
                type: trait.trait_type,
                value: trait.value
            };
            // console.log(`${object.type} / ${object.value}`);
            return object;
        }
        
        
    });


}






class Asset {

    // Asset Model

    constructor(asset) {
        
        // console.log(asset);

        // should i be creating the components here from the class?

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

    // Can use this to set certain criteria for an asset to be considered valid 
    // Invalid results can be tossed out, etc
    // 'get' allows you to say asset.valid
    get valid() {
        if (this.imgUrl) {
            return true;
        }
        return false;
    }

    // // Attempts to get certain property values from the API results
    // getName(asset) {
    //     return asset.name ? asset.name : 'untitled';
    // }

    // getDescription(asset) {
    //     return asset.description ? asset.description : 'No item description.';
    // }

    // getImage(asset) {
    //     return asset.image_url ? asset.image_url : 'No image';
    // }

    // // Return thumbnail if there is one, or the full size image
    // getThumbnail(asset) {
    //     // return asset.image_thumbnail_url ? asset.image_thumbnail_url : this.getImage(asset);
    //     return asset.image_thumbnail_url ? asset.image_thumbnail_url : null;
    // }

    // getCreator(asset) {
    //     const creator = asset.creator;
    //     if (!creator) {
    //         // console.log('creator was null')
    //         return 'unknown creator';         
    //     }
    //     const user = creator.user;
    //     if (!user) {
    //         // console.log('user was null')
    //         return 'unknown creator';
    //     }
    //     const username = user.username;
    //     if (username) {
    //         return username;
    //     }
    //     else {
    //         return 'unknown creator';
    //     }
    // }

    // getContractAddress(asset) {
    //     const assetContract = asset.asset_contract;
    //     if (!assetContract) {
    //         // console.log('assetContract was null')
    //         return null;         
    //     }
    //     const address = assetContract.address;
    //     if (!address) {
    //         // console.log('address was null')
    //         return null;
    //     }
    //     return address;
    // }

    // getPrice(asset) {
    //     const lastSale = asset.last_sale;
    //     if (!lastSale) {
    //         // console.log('lastSale was null')
    //         return null;     
    //     }
    //     const paymentToken = lastSale.payment_token;
    //     if (!paymentToken) {
    //         // console.log('paymentToken was null')
    //         return null;
    //     }
    //     const price = paymentToken.eth_price;
    //     if (price) {
    //         return price;
    //     }
    //     return null;
    // }

    // getTraits(asset) {
    //     const traits = asset.traits;
    //     if (!traits || traits.length === 0) {
    //         // console.log('no traits');
    //         return null;
    //     }

    //     return traits.map((trait) => {

    //         // Each Trait is represented by an object with two properties, Type and Value
    //         // Map over the array of traits from the API and create an object for each trait to hold the type/value
    //         // Push the trait object into the traitsArray that will hold all traits

    //         if (trait.trait_type && trait.value) {
    //             const object = {
    //                 type: trait.trait_type,
    //                 value: trait.value
    //             };
    //             // console.log(`${object.type} / ${object.value}`);
    //             return object;
    //         }
           
           
    //     });


    // }

}

export default Asset;
