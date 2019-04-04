describe('Intercity', function() {
    it('Check if tickets are still unavailable', function() {

        // Open website with predefined query
        cy.visit('https://www.intercity.pl/pl/site/dla-pasazera/informacje/wyszukiwarka-polaczen.html' +
            '?stid[0]=5100065&stid[1]=5100069&category[]=eip&time=16:05&date=2019-04-05');

        // Click "Wyszukaj"
        cy.get('button[name="search"]').click();

        // Check if tickets are still unavailable
        cy.get('#trasa_9 .cena_klasa_2.cena').contains('Brak wolnych miejsc');
    });
});
