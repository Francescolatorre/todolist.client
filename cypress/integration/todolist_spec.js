//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

let serverURL = 'http://localhost:3000';

describe('Todolist', function () {







    it('.should() - assert that <title> is correct', () => {
        // https://on.cypress.io/visit
        cy.visit(serverURL)
        cy.title().should('include', 'React App')
        //   ↲               ↲            ↲
        // subject        chainer      value
    })

    it('.should() - focus on the input field', () => {
        // https://on.cypress.io/visit
        cy.visit(serverURL)
        cy.focused()
            .should('have.class','inputAddNew')
    })


    it('Should have in input of type text with default value="Add todo Item"', function(){
        cy.visit('http://localhost:3000')
        cy.get('.inputAddNew')
            .should('have.attr', 'placeholder', 'Add todo item...')
    })

    it('Should be possible to enter values in input field', function(){
        cy.visit('http://localhost:3000')
        cy.get('.inputAddNew')
            .type('text')
            .should('have.value', 'text')
    })

    it('Should find a todo element by title',function(){
        cy.visit('http://localhost:3000')
        cy.get('.Element')
            .contains('Titel 1')
    })

    it('Should be possible to check Element', function(){

        let todo_name = 'neuer Eintrag'

        cy.visit('http://localhost:3000')
        cy.get('.inputAddNew')
            .type(todo_name)
        cy.get('.addBtn')
            .click()
        cy.get('.Element')
            .contains(todo_name)
    })

    it('Should be possible to delete newly created entry', function(){

        let todo_name = 'pinakolada'

        //create new Post via API Post
        cy.request('POST', 'http://localhost:8080/todos/', { "title":"pinakolada", "state":"done"})
            .then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property('title', 'pinakolada')
                expect(response.body).to.have.property('state', 'done') // true
            })

        cy.visit(serverURL)
        cy.contains(todo_name)
            .within( () => {
                cy.get('button')
                    .click()
            })
        cy.contains(todo_name)
            .should('have.length',0)

        // cy.get('.ElementChecked')
        //     .contains(todo_name)
        //     .find('button')
        //     .click()

    })


})


