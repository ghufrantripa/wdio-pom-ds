import DashboardPage from "../pageobjects/dashboard.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";

describe('SauceDemo test', () => {
    it('Successful Login', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);
        await DashboardPage.validateOnPage();
    });

    it('Add item to cart and validate', async () => {
        await DashboardPage.addItemToCart();
        await CartPage.open();
        await CartPage.isItemInCart();
    });
});
