module.exports = Object.freeze({
    encounters: [
        {
            id: 'monster',
            text: 'You come around the corner and see a shadow. It appears to be a ',
            encounters:  [
                {
                    itemName: 'goblin',
                    monsterHealth: 5,
                    platforms: 7,
                    image: 'goblin.jpeg',
                    affects: 'health',
                    power: -1,
                    choice: 'Charge!'
                },
                {
                    itemName: 'stone golem',
                    monsterHealth: 10,
                    platforms: 4,
                    image: 'golem.jpeg',
                    affects: 'health',
                    power: -3,
                    choice: 'Charge!'
                },
                {
                    itemName: 'hellhound',
                    monsterHealth: 5,
                    platforms: 5,
                    image: 'hellhound.jpg',
                    affects: 'health',
                    power: -5,
                    choice: 'Charge!'
                },
                // {
                //     itemName: 'skeleton',
                //     monsterHealth: 5,
                //     image: 'skeleton.jpeg',
                //     affects: 'health',
                //     power: -1,
                //     choice: 'Charge!'
                // },
                // {
                //     itemName: 'troll',
                //     monsterHealth: 15,
                //     image: 'troll.jpeg',
                //     affects: 'health',
                //     power: -7,
                //     choice: 'Charge!'
                // }
            ]
        },

        // {
        //     id: 'chest',
        //     text: 'Inside is a what appears to be',
        //     encounters: [
        //         {
        //             itemName: 'a gold embossed scroll',
        //             affects: 'power',
        //             image: 'chest.jpeg',
        //             affectAmount: -2,
        //             text: 'After reading the contets, you hear a cackle, and you feel a bit weaker',
        //             choice: 'Read it?',
        //         },
        //         {
        //             itemName: 'a skull ring',
        //             affects: 'power',
        //             image: 'skullring.jpeg',
        //             affectAmount: -1,
        //             text: 'It clutches to your finger, unable to remove it, it drains a bit of your strength',
        //             choice: 'Put it on?',
        //         },
        //         {
        //             itemName: 'an old spell book',
        //             affects: 'power',
        //             image: 'spellbook.jpeg',
        //             affectAmount: 5,
        //             text: 'After reading the book, your sword glows with light. It feels lighter, stronger.',
        //             choice: 'Read it?',
        //         },
        //         {
        //             itemName: 'a blackened sword',
        //             affects: 'power',
        //             image: 'blacksword.jpeg',
        //             affectAmount: 10,
        //             text: `You've found a legendary sword, forged by most skilled dwarves, blessed by the highest elves. It's power is unmatched.`,
        //             choice: 'Pick it up?',
        //         },
        //         {
        //             itemName: 'a potion',
        //             affects: 'health',
        //             image: 'potion.jpeg',
        //             affectAmount: 5,
        //             text: 'You drink the potion and feel a bit better',
        //             choice: 'Drink it?',
        //         }
        //     ]
        // },
        // {
        //     id: 'tavern',
        //     text: `You look behind the bar for some food or drink. You find`,
        //     encounters : [
        //         {
        //             itemName: 'a hearty  beer',
        //             affects: 'health',
        //             affectAmount: 2,
        //             image: 'tavern.jpeg',
        //             text: 'Mmm delicious',
        //             choice: 'Drink it?',
        //         },
        //         {
        //             itemName: 'a golden drink',
        //             affects: 'health',
        //             image: 'tavern.jpeg',
        //             affectAmount: 15,
        //             text: `You've stumbled upon an elixer of the Gods. Lucky you`,
        //             choice: 'Drink it?',
        //         },
        //         {
        //             itemName: 'some goats milk',
        //             affects: 'health',
        //             image: 'tavern.jpeg',
        //             affectAmount: -1,
        //             text: `It's gone bad unfortunately`,
        //             choice: 'Drink it?',
        //         },
        //         {
        //             itemName: 'some fresh water',
        //             affects: 'health',
        //             affectAmount: 1,
        //             image: 'tavern.jpeg',
        //             text: `You feel refreshed`,
        //             choice: 'Drink it?',
        //         },
        //         {
        //             itemName: 'a ham',
        //             affects: 'health',
        //             affectAmount: 3,
        //             image: 'tavern.jpeg',
        //             text: `Mmm yummy ham.`,
        //             choice: 'Eat it?',
        //         },
        //         {
        //             itemName: 'a glowing potion',
        //             affects: 'health',
        //             affectAmount: -2,
        //             image: 'tavern.jpeg',
        //             text: `An unhelpful witch has created this.`,
        //             choice: 'Drink it?',
        //         },
        //         {
        //             itemName: 'some moldy bread',
        //             affects: 'health',
        //             affectAmount: -1,
        //             image: 'tavern.jpeg',
        //             text: `It's...moldy.`,
        //             choice: 'Eat it?',
        //         },
        //         {
        //             itemName: 'some mystery meat',
        //             affects: 'health',
        //             affectAmount: -2,
        //             image: 'tavern.jpeg',
        //             text: `You don't want to know what this is.`,
        //             choice: 'Eat it?',
        //         },
        //         {
        //             itemName: 'some old cheese',
        //             affects: 'health',
        //             affectAmount: -1,
        //             image: 'tavern.jpeg',
        //             text: `It's...old.`,
        //             choice: 'Eat it?',
        //         },
        //         {
        //             itemName: 'some old wine',
        //             affects: 'health',
        //             affectAmount: -1,
        //             image: 'tavern.jpeg',
        //             text: `It's...old.`,
        //             choice: 'Drink it?',
        //         }
        //     ]

        // }
    ]
})