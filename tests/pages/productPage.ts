import {Locator, Page, test} from "@playwright/test";
import {BasePage} from "./base_page";

export class ProductPage extends BasePage {
    readonly nameOfProduct: Locator;
    readonly productArticle: Locator;
    readonly addToCartButton: Locator;
    readonly productPrice: Locator;
    constructor(page:Page) {
        super(page);
        
        // Locators
        this.nameOfProduct = page.locator('#name');
        this.productArticle = page.locator('.card-product-layout__article-value')
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart'}).first();
        

    }

    // Methods
    async AddToCart(): Promise<void> {
        await test.step('Add to cart', async() =>{
            await this.addToCartButton.click();
        })
        
    }

    async getProductArticle(): Promise<string> {
       return await test.step('Getting product article from product page', async() =>{
            return await this.productArticle.textContent() || '';
        })
    }



}