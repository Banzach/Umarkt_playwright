import { Page, Locator, test } from "@playwright/test"
import { BasePage }  from "../pages/base_page"

export class MainPage extends BasePage {
    readonly firstItemAddToCartButton: Locator;
    readonly bannersOnMainPage: Locator;




    constructor(page: Page) {
        super(page);

        // Locators
        this.firstItemAddToCartButton = page.getByRole('button', { name: 'Add to cart' } ).first();
        this.bannersOnMainPage = page.locator('.carousel-promotion__link');

    }


    // Methods
    async addFirstItemToCard(): Promise<void> {
        await test.step('Add first item to card', async() => {
            await this.firstItemAddToCartButton.click();
        })

    }
    

    

}