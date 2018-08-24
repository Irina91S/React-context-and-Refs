describe ('My first test',function(){
    it('Find element', function(){
        cy.visit('http://localhost:3000/')
        cy.get('button').contains('Username').click()
    })
})

        //Arrange - setup initial app state
        //Act - take an action    
        //Assert - make an assertion