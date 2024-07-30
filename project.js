document.getElementById('project1').addEventListener('click', function() {
    window.open("https://devpost.com/software/lingly", "_blank");
});
document.getElementById('project2').addEventListener('click', function() {
    window.open("https://devpost.com/software/unifly", "_blank");
});
document.getElementById('project3').addEventListener('click', function() {
    window.open("https://devpost.com/software/vike", "_blank");
});
document.getElementById('project4').addEventListener('click', function() {
    window.open("https://github.com/victorliu15/random-background-generator", "_blank");
});
document.getElementById('project5').addEventListener('click', function() {
    window.open("https://github.com/victorliu15/weather-extension", "_blank");
});
let lastFactIndex = -1;

document.getElementById('generateButton').addEventListener('click', function() {
    const facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        "A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once but only 225 Earth days to orbit the Sun.",
        "Bananas are berries, but strawberries aren't. Botanically, a berry has seeds and pulp produced from the ovary of a single flower.",
        "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.",
        "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
        "A group of flamingos is called a 'flamboyance'.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Cows have best friends and can become stressed when separated from them.",
        "Wombat poop is cube-shaped. This prevents it from rolling away and helps mark their territory.",
        "Hot water freezes faster than cold water under certain conditions, known as the Mpemba effect.",
        "A single strand of spaghetti is called a 'spaghetto'.",
        "The longest time between two twins being born is 87 days.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "There are more possible iterations of a game of chess than there are atoms in the known universe.",
        "Some cats are allergic to humans.",
        "The inventor of the Pringles can is now buried in one. Fred Baur's ashes are in a Pringles can in his grave.",
        "The wood frog can hold its pee for up to eight months.",
        "A small child could swim through the veins of a blue whale.",
        "The world's largest grand piano was built by a 15-year-old in New Zealand. It is over 18 feet long and took 4 years to build.",
        "There are more stars in the universe than grains of sand on all the Earth's beaches."
    ];
    let factIndex = Math.floor(Math.random() * facts.length);
    while (factIndex === lastFactIndex) {
        factIndex = Math.floor(Math.random() * facts.length);
    }
    lastFactIndex = factIndex;
    let factElement = document.getElementById('fact');
    factElement.innerHTML = facts[factIndex];
    let button = document.getElementById('generateButton');
    button.classList.add('bounce');
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 300); 
});