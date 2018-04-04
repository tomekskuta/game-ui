const circleMenuRandomData1 = [
  { 
    name: 'Marzena',
    action: () => console.log('Marzena'),
    shouldCloseAfterClick: true,
  },
  { 
    name: 'Mariusz',
    action: () => console.log('Mariusz'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Mariusz 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Mariusz 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Mariusz 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Mariusz 4'),
      }
    ],

  },
  { 
    name: 'Dorota',
    action: () => console.log('Dorota'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Dorota 1'),
        shouldCloseAfterClick: true,
      }, 
      {
        name: '2',
        action: () => console.log('Dorota 2'),
        shouldCloseAfterClick: true,
      }, 
      {
        name: '3',
        action: () => console.log('Dorota 3'),
      }
    ],

  },
  { 
    name: 'Andrzej',
    action: () => console.log('Andrzej'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Andrzej 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Andrzej 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Andrzej 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Andrzej 4'),
      }, 
      {
        name: '5',
        action: () => console.log('Andrzej 5'),
      }
    ],

  },
  { 
    name: 'Paweł',
    action: () => console.log('Paweł'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Paweł 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Paweł 2'),
      }
    ],

  },
  { 
    name: 'Monika',
    action: () => console.log('Monika'), 
    subMenu: [
      {
        name: '1',
        action: () => console.log('Monika 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Monika 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Monika 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Monika 4'),
      }, 
      {
        name: '5',
        action: () => console.log('Monika 5'),
      }, 
      {
        name: '6',
        action: () => console.log('Monika 6'),
      }
    ],

  }
];

const circleMenuRandomData2 = [
  { 
    name: 'Marzena',
    action: () => console.log('Marzena'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Marzena 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Marzena 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Marzena 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Marzena 4'),
      }
    ],
  },
  { 
    name: 'Mariusz',
    action: () => console.log('Mariusz'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Mariusz 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Mariusz 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Mariusz 3'),
      }
    ],

  },
  { 
    name: 'Dorota',
    action: () => console.log('Dorota'), 
    subMenu: [
      {
        name: '1',
        action: () => console.log('Dorota 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Dorota 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Dorota 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Dorota 4'),
      }, 
      {
        name: '5',
        action: () => console.log('Dorota 5'),
      }, 
      {
        name: '6',
        action: () => console.log('Dorota 6'),
      }, 
      {
        name: '7',
        action: () => console.log('Dorota 7'),
      }
    ],

  },
  { 
    name: 'Andrzej',
    action: () => console.log('Andrzej'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Andrzej 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Andrzej 2'),
      }
    ],

  },
  { 
    name: 'Paweł',
    action: () => console.log('Paweł'),
    subMenu: [
      {
        name: '1',
        action: () => console.log('Paweł 1'),
      }, 
      {
        name: '2',
        action: () => console.log('Paweł 2'),
      }, 
      {
        name: '3',
        action: () => console.log('Paweł 3'),
      }, 
      {
        name: '4',
        action: () => console.log('Paweł 4'),
      }
    ],
  },
]

export { circleMenuRandomData1, circleMenuRandomData2 };