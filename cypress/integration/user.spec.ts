describe('testing api call', () => {



  it('Fetch User List Api Testing', () => {
    const options = {
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/users`,
    
      failOnStatusCode: false,
    };
    cy.request(options).then((response) => {
     
      expect(response.status).eq(200);
      return response;
    });
  });

  it('Regualr User detail Api Teting', () => {

    const options = {
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/users/1`,
      failOnStatusCode: false,
    };
    cy.request(options).then((response) => {
    
      expect(response.status).eq(200);
      return response;
    });
  });

  it('Regualr Update User detail Api Teting', () => {
    
    const UpdateData ={
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
}
    const options = {
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/users/${UpdateData.id}`,
      body: UpdateData,
  
      failOnStatusCode: false,
    };
    cy.request(options).then((response) => {
     
      expect(response.status).eq(200);
      return response;
    });
  });
});



describe('UI for User api with token', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Update USer', () => {
    cy.get('[data-cy="edit_1"]').click({ multiple: true, force: true });

    cy.location('pathname', { timeout: 10000 }).should('eq', '/update/1');

    cy.get('[data-cy="username"]').clear().type(`Ervin Howel;`);
    cy.get('[data-cy="email"]').clear().type(`Ervin@gmail.com`);
    cy.get('[data-cy="phone"]').clear().type(`093212312`);
    cy.get('[data-cy="website"]').clear().type(`domain.com`);
    // Fill the password

    cy.get('[data-cy="UpdateUser"]').click({ multiple: true, force: true });
    cy.location('pathname', { timeout: 10000 }).should('eq', '/');
  });
});