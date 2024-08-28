import Page from "./page.js";

class DashboardPage extends Page {
    open() {
        return super.open("inventory.html");
    }

    get cartIcon() {
        return $("#shopping_cart_container");
    }

    get addToCartBtn() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    async validateOnPage() {
        await this.cartIcon.waitForDisplayed({ timeout: 10000 });
        expect(this.cartIcon).toBeDisplayed();
    }

    async addItemToCart() {
        await this.addToCartBtn.click();
    }
}

export default new DashboardPage();
