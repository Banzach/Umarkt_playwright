import { Locator, test, Page, expect} from "@playwright/test"

export class BasePage {

    protected page: Page;
    readonly addToCartButton: Locator;
    readonly mainPageUrl: string = 'https://umarkt.com/'
    readonly yesButtonPopupSelectLanguage: Locator;
    readonly noButtonPopupSelectLanguage: Locator;
    readonly regionSwitcherContent: Locator;

    constructor(page: Page) {


        // Locators
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart'});
        this.yesButtonPopupSelectLanguage = page.getByRole('button', {name:'Yes'})
        this.noButtonPopupSelectLanguage = page.getByRole('button', {name: 'No, go to another'})
        this.regionSwitcherContent = page.locator('#region-switcher-2\\:content')
    }

    // Methods
    async navigateTo(url: string): Promise<void>{
        await test.step(`Navigate to ${url}`, async()=> {
            await this.page.goto(url);
        });

    }
    async getPageTitle() {
        await test.step('Get page title', async() => {
            return await this.page.title();
        })

    }

    async getText(selector: string): Promise<string> {
        return await test.step('Get text of element', async() => {
            return await this.page.textContent(selector) || '';
        })

    }


    async getAttribute(selector:string, attribute:string) : Promise<string> {
        return await test.step(`Getting value of attribute: ${attribute} in element: ${selector} `, async() => {
            return await this.page.locator(selector).getAttribute(attribute) || '';
        })

    }
    async getUrl() {
        return await test.step('Get current URL', async() => {
            return await this.page.url();
        })

    }
    
    async hoverOnElement(selector:string): Promise<void> {
        await test.step(`Hover on element: ${selector}`, async() => {
            await this.page.locator(selector).hover()
        })

    }
    async closeSelectLanguagePopup(): Promise<void> {
        await test.step('Close popup Select Language if visible', async() => {
            await this.yesButtonPopupSelectLanguage.click();
        })
    }

    async getCountOfElement(selector: Locator): Promise<number> {
        return await test.step('Check count of element', async()=> {
            return await selector.count()
        })
    }

    async selectAnotherRegionInPopup(): Promise<void>{
        await test.step('Select |No, go to another| in select language popup', async()=>{
            await this.noButtonPopupSelectLanguage.click();
        })
    }

    async selectYesOnRegionPopup(): Promise<void>{
        await test.step('Select |Yes| in select region popup', async()=> {
            await this.yesButtonPopupSelectLanguage.click();
        })
    }
    async compareScreenshot(
        screenshotName: string,
        options?: {
            locator?: Locator,         // если нужен скриншот только элемента
            mask?: Locator[],          // массив локаторов для маскировки
            fullPage?: boolean,        // полный скриншот страницы
            message?: string           // кастомное сообщение
        }
    ) {
        const { locator, mask, fullPage, message } = options || {};

        if (locator) {
            await expect(locator, message).toHaveScreenshot(screenshotName, {
                mask,
            });
        } else {
            await expect(this.page, message).toHaveScreenshot(screenshotName, {
                mask,
                fullPage,
            });
        }
}
    
    


}