class Asset {

    // Asset Model

    constructor(asset) {
        
        this.name = asset.name;
        this.description = asset.description;
        this.id = asset.id;
        // this.username = asset.creator.user.username;
        this.imgUrl = asset.image_url;
        this.thumbnailUrl = asset.image_thumbnail_url;

        this.username = null;
        const creator = asset.creator;
        if (creator === null) {
            return;
        }
        const user = creator.user;
        if (user === null) {
            return;
        }
        this.username = user.username;


        if (!this.description) {
            this.description="No item description."
        }

        // nullchecks
        // if (!this.username) {
        //     this.username = 'Unknown';
        // }


       // const lastSalePrice = asset.last_sale.payment_token.eth_price;
       this.price = null;
       const lastSale = asset.last_sale;
       if (lastSale === null) {
           return;
       }
       const paymentToken = lastSale.payment_token;
       if (paymentToken === null) {
           return;
       }
       if (this.price) {
        this.price = paymentToken.eth_price.toFixed(2);
       }
       else {
           this.price = '--';
       }
     



    }


}
export default Asset;