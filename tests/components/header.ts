import {Page, Locator, test} from "@playwright/test"
import { BasePage } from "../pages/base_page"

export class Header extends BasePage{
    readonly linkToPaymentPage: Locator;
    readonly searchInput: Locator;
    readonly loginButton: Locator;
    readonly cartItemCount: Locator;
    readonly goToCartButton: Locator;
    readonly startSearchButton: Locator;
    readonly logotip: Locator;


    constructor(page: Page) {
         super(page);

         // Локаторы//
         this.linkToPaymentPage = page.locator('header-top-menu').getByRole('link', { name: 'Payment' });
         this.searchInput = page.locator('#search-input');
         this.loginButton = page.getByRole('link', {name: 'Sign in'} );
         this.cartItemCount = page.locator('div span.btn__bage');
         this.goToCartButton = page.getByRole('link', {name: 'Go to Cart'} );
         this.startSearchButton = page.locator('button.header-search-form__button_submit');
         this.logotip = page.locator('.header-logo__img_desktop')


}
    //Методы//
    async goToPaymentPage(): Promise<void> {
        await test.step('Navigate to Payment Page', async()=> {
            await this.linkToPaymentPage.click();
        })
        
    }

    async inputSearchOnHeader(searchText: string) {
        await test.step('Input search request', async()=> {
            await this.searchInput.fill(searchText);
        })
 
    }

    async clickOnSignInButton() {
        await test.step('Click on signIn Button', async()=> {
             await this.loginButton.click();
        })

    }
    
    async getCartItemCount(): Promise<string> {
        return await test.step('Get item count in cart', async()=> {
            return await this.cartItemCount.textContent() || 'Empty cart';
        })
        
    }

    async goToCartPage(): Promise<void> {
        await test.step('navigate to Cart Page', async() => {
            await this.goToCartButton.click();
        })
        
    }


}