import {Page, Locator, test} from "@playwright/test"
import { BasePage } from "../pages/base_page"

export class Header extends BasePage{
    readonly linkToPaymentPage: Locator;
    readonly searchInput: Locator;
    readonly loginButton: Locator;
    readonly cartItemCount: Locator;
    readonly linkToCartButton: Locator;
    readonly startSearchButton: Locator;
    readonly logotip: Locator;
    readonly linkToShippingPage: Locator;
    readonly linkToSupportPage: Locator;
    readonly linkToReturnsPage: Locator;
    readonly catalogButton: Locator;
    readonly catalogDropdown: Locator;
    readonly titlePopupLoginOrRegister: Locator;

    constructor(page: Page) {
         super(page);

         // Локаторы//
         this.linkToPaymentPage = page.locator('header-top-menu').getByRole('link', { name: 'Payment' });
         this.linkToShippingPage = page.locator('header-top-menu').getByRole('link', { name: 'Shipping' });
         this.linkToReturnsPage = page.locator('header-top-menu').getByRole('link', { name: 'Returns' });
         this.linkToSupportPage = page.locator('header-top-menu').getByRole('link', { name: 'Support' });
         this.searchInput = page.locator('#search-input');
         this.loginButton = page.getByRole('link', {name: 'Sign in'} );
         this.cartItemCount = page.locator('div span.btn__bage');
         this.linkToCartButton = page.getByRole('link', {name: 'Go to Cart'} );
         this.startSearchButton = page.locator('button.header-search-form__button_submit');
         this.logotip = page.locator('.header-logo__img_desktop')
         this.catalogButton = page.locator('#rubrics-toggle')
         this.catalogDropdown = page.locator('#rubrics')
         this.titlePopupLoginOrRegister = page.locator('.auth-form__title');
         



}
    //Методы//
    async goToPaymentPage(): Promise<void> {
        await test.step('Navigate to Payment Page', async()=> {
            await this.linkToPaymentPage.click();
        })
        
    }

    async goToShippingPage(): Promise<void> {
        await test.step('Navigate to Shipping Page', async()=> {
            await this.linkToPaymentPage.click();
        })
        
    }

    async goToReturnsPage(): Promise<void> {
        await test.step('Navigate to Returns Page', async()=> {
            await this.linkToPaymentPage.click();
        })
        
    }

    async goToSupportPage(): Promise<void> {
        await test.step('Navigate to Support Page', async()=> {
            await this.linkToPaymentPage.click();
        })
        
    }

    async inputSearchOnHeader(searchText: string) {
        await test.step('Input search request', async()=> {
            await this.searchInput.fill(searchText);
        })
 
    }
    
    async getCartItemCount(): Promise<string> {
        return await test.step('Get item count in cart', async()=> {
            return await this.cartItemCount.textContent() || 'Empty cart';
        })
        
    }

    async goToCartPage(): Promise<void> {
        await test.step('Navigate to Cart Page', async() => {
            await this.linkToCartButton.click();
        })
        
    }

    async clickOnCategoryButton(): Promise<void> {
        await test.step('Click on Category button in header', async() => {
            await this.catalogButton.click();
        })
    }

    async clickOnSignInButton(): Promise<void> {
        await test.step('Click on Sign in button in header', async() => {
            await this.loginButton.click();
        })
    }




}