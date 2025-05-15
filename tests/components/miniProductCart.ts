import { Locator, Page, test} from "@playwright/test";
import { BasePage } from "../pages/base_page";

export class MiniProductCart extends BasePage {
    readonly addToCartButton: Locator;
    readonly popupContainer: Locator;
    readonly moreDetailsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.popupContainer = page.locator('.popup__content');
        this.addToCartButton = this.popupContainer.getByRole('button', { name: 'Add to Cart'});
        this.moreDetailsButton = this.popupContainer.getByRole('button', { name: 'More Details about the Product'});


    }

    async addItemToCart():Promise<void>{
        await test.step('Add item to cart', async() =>{
            await this.addToCartButton.click();
        })
        
    }




}