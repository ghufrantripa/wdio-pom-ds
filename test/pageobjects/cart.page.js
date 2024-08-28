import Page from "./page.js";

class CartPage extends Page {
    open() {
        return super.open("cart.html");
    }

    get cartItem() {
        return $('.cart_item');
    }

    async isItemInCart() {
        await this.cartItem.waitForDisplayed({ timeout: 10000 });
        expect(this.cartItem).toBeDisplayed();
    }
}

export default new CartPage();
