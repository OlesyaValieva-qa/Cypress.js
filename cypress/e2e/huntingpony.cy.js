
describe('Тестирование покупки на HuntingPony.com', function () {
    
    it('Нужно добавить заказ в корзину', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').should('be.visible');
        cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(1000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(2000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(2000);
        cy.get('.header__cart > .icon').click();
        cy.contains('Оформить заказ').should('be.visible');
        cy.get('.cart-controls > .button').click();
        })
})
