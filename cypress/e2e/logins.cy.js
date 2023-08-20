
describe('Тестирование формы логинa', function () {
    
    it('Ввожу верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })



    it('Нажимаю забыла пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.wait(5000);
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it('Ввожу правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it('Ввожу неправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                
    })


    it('Ввожу некорректный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german1dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                
    })



    it('Ввожу некорректный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('404').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
})