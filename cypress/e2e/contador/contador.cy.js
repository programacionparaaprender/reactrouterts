describe("Counter Tests", ()=> {
    it("debe cargar el counter", ()=>{
        // eslint-disable-next-line no-undef
        cy.visit("http://localhost:3000/reactrouterts");
        // eslint-disable-next-line no-undef
        cy.get("h1").contains("Hello, world!");
    });

    it("probar botón", ()=>{
        // eslint-disable-next-line no-undef
        cy.visit("http://localhost:3000/reactrouterts");
        // eslint-disable-next-line no-undef
        const btnAdd = cy.get("button").contains("Agregar");
        //console.log(btnAdd);
        btnAdd.click();
        // eslint-disable-next-line no-undef
        cy.get("h2").contains("2");
    });
});