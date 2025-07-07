import { test, expect } from "@playwright/test"
import { Header } from "../components/header" 
import { MainPage } from "../pages/main_page"; 


test('User can search through search input', async ({page}) => {
    const header = new Header(page);
    await header.navigateTo(header.mainPageUrl);
    await header.inputSearchOnHeader('test');
    await header.clickOnSignInButton();
})

test('On main page visible 4 banners', async ({page}) => {
    const main_page = new MainPage(page);
    await main_page.navigateTo(main_page.mainPageUrl);
    const countOfElements = await main_page.getCountOfElement(main_page.bannersOnMainPage);
    await expect(countOfElements, 'Count of visible banner != 4').toEqual(4);
})

test('Region-switcher content is visible after click on |No, go to another| button', async({page})=> {
    const main_page = new MainPage(page);
    await main_page.navigateTo(main_page.mainPageUrl)
    await main_page.selectAnotherRegionInPopup();
    await expect(main_page.regionSwitcherContent, 'Dropdown with list of country doesnt appear after -No- in popup').toBeVisible();
})

test('Logo in header is visible', async({page}) => {
    const header = new Header(page);
    await header.navigateTo(header.mainPageUrl)
    const currentUrl = await page.url()
    await expect(header.logotip, `The logo is not visible on the page: ${currentUrl}`).toBeVisible();
})

test('Dropdown with categories visible after click in Category ', async({page})=> {
    const header = new Header(page);
    await header.navigateTo(header.mainPageUrl);
    await header.selectYesOnRegionPopup();
    await header.clickOnCategoryButton(); 
    await expect(header.catalogDropdown, 'Dropdown with categories is not visible').toBeVisible();

})

test('User sees login/register popup after click on Sign in button', async({page})=> {
    const header = new Header(page);
    await header.navigateTo(header.mainPageUrl);
    await header.clickOnSignInButton();
    await expect(header.titlePopupLoginOrRegister,'Title of Login/register popup is not visible').toBeVisible();


})

test(' Check that main page looks normal', async ({page})=> {
    const main_page = new MainPage(page);
    await main_page.navigateTo(main_page.mainPageUrl)
    await expect(page, 'Last screenshot does not match the reference one').toHaveScreenshot('main_page.png', {fullPage : true})
})

