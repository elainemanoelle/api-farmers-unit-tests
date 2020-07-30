'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('farmers', 
    [
      {
        id: 1,
        name: 'Roberta Assunção',
        street: 'Rua Manoel Ferreira de Morais, 85',
        city: 'Recife',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '84186021473',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Mariana Silva',
        street: 'Rua Rio Formoso, 247',
        city: 'Jaboatão',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '62807703038',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Paulo Araújo da Silva',
        street: 'Rua Primavera, 43',
        city: 'Paulista',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '54644526053',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Fernando Araujo',
        street: 'Rua João Souto Maior, 28',
        city: 'Camaragibe',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '32595457004',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: 'Renata Santos',
        street: 'Rua Alto do Eucalipto, 109',
        city: 'Abreu e Lima',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '02145591060',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        name: 'Maria Souza',
        street: 'Rua Doutor Paulo Ramos, 756',
        city: 'Ipojuca',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '91942217072',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        name: 'Silvana Azevedo',
        street: 'Avenida Manoel Borba, 258',
        city: 'Tamandaré',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '96883338080',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        name: 'Marília Monteiro',
        street: 'Avenida Manoel Borba, 258',
        city: 'Caruaru',
        state: 'Pernambuco',
        country: 'Brasil',
        document_type: 'CPF',
        document_number: '42467872050',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('farmers', null, {});
  }
};
