import {test, expect} from "@playwright/test";
import { ProductPage } from "../pages/productPage";
import { Header } from "../components/header"



test('Product article appears on product page', async ({page}) => {
    const product_Page = new ProductPage(page);
    await product_Page.navigateTo('https://umarkt.com/product/krossovki-begovye-nike-downshifter-12-dd9293-001-sportivnaya-obuv-original-A22224217#V61374782')
    await product_Page.getProductArticle();
})

test('User can add product to cart', async ({page}) => {
    const product_Page = new ProductPage(page);
    const header = new Header(page);

    await product_Page.navigateTo('https://umarkt.com/product/krossovki-begovye-nike-downshifter-12-dd9293-001-sportivnaya-obuv-original-A22224217#V61374782');
    await product_Page.closeSelectLanguagePopup();
    await product_Page.AddToCart();
    await expect(header.cartItemCount, 'Cart item count != 1').toHaveText('1');
})

test(' Check that product page looks normal', async ({page})=> {
    const product_page = new ProductPage(page);
    await product_page.navigateTo(product_page.mainPageUrl)
    await expect(page, 'Last screenshot does not match the reference one').toHaveScreenshot('product_page.png', { fullPage: true } )
})

