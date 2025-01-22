var resources = {
  basePath: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/',
  misc: {
    background: 'images/background.png'
  },
  icons: {
    options: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>',
    history: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3\' /></svg>',
    tabs: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
    downloads: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>',
    dispose: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\' /></svg>',
    closemany: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z" /></svg>',
    remove: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\' /></svg>',
    add: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /></svg>',
    update: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z\' /></svg>',
    incognito: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.06 13C15.2 13 13.64 14.33 13.24 16.1C12.29 15.69 11.42 15.8 10.76 16.09C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17C3 19.21 4.77 21 6.94 21C9 21 10.68 19.38 10.84 17.32C11.18 17.08 12.07 16.63 13.16 17.34C13.34 19.39 15 21 17.06 21C19.23 21 21 19.21 21 17C21 14.79 19.23 13 17.06 13M6.94 19.86C5.38 19.86 4.13 18.58 4.13 17S5.39 14.14 6.94 14.14C8.5 14.14 9.75 15.42 9.75 17S8.5 19.86 6.94 19.86M17.06 19.86C15.5 19.86 14.25 18.58 14.25 17S15.5 14.14 17.06 14.14C18.62 14.14 19.88 15.42 19.88 17S18.61 19.86 17.06 19.86M22 10.5H2V12H22V10.5M15.53 2.63C15.31 2.14 14.75 1.88 14.22 2.05L12 2.79L9.77 2.05L9.72 2.04C9.19 1.89 8.63 2.17 8.43 2.68L6 9H18L15.56 2.68L15.53 2.63Z" /></svg>',
    incognitooff: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.11 21.46L2.39 1.73L1.11 3L6.31 8.2L6 9H7.11L8.61 10.5H2V12H10.11L13.5 15.37C13.38 15.61 13.3 15.85 13.24 16.1C12.29 15.69 11.41 15.8 10.76 16.09C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17C3 19.21 4.77 21 6.94 21C9 21 10.68 19.38 10.84 17.32C11.18 17.08 12.07 16.63 13.16 17.34C13.34 19.39 15 21 17.06 21C17.66 21 18.22 20.86 18.72 20.61L20.84 22.73L22.11 21.46M6.94 19.86C5.38 19.86 4.13 18.58 4.13 17C4.13 15.42 5.39 14.14 6.94 14.14C8.5 14.14 9.75 15.42 9.75 17C9.75 18.58 8.5 19.86 6.94 19.86M17.06 19.86C15.5 19.86 14.25 18.58 14.25 17C14.25 16.74 14.29 16.5 14.36 16.25L17.84 19.73C17.59 19.81 17.34 19.86 17.06 19.86M22 12H15.2L13.7 10.5H22V12M17.06 13C19.23 13 21 14.79 21 17C21 17.25 20.97 17.5 20.93 17.73L19.84 16.64C19.68 15.34 18.66 14.32 17.38 14.17L16.29 13.09C16.54 13.03 16.8 13 17.06 13M12.2 9L7.72 4.5L8.43 2.68C8.63 2.17 9.19 1.89 9.72 2.04L9.77 2.05L12 2.79L14.22 2.05C14.75 1.88 15.32 2.14 15.54 2.63L15.56 2.68L18 9H12.2Z" /></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>',
    search: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\' /></svg>',
    clipboard: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\' /></svg>',
    backward: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>',
    forward: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>',
    reload: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>'
  },
  favicons: {
    cntraveler: 'favicons/cntraveler.png',
    galeriacolonna: 'favicons/galleriacolonna.png',
    manvsglobe: 'favicons/manvsglobe.png',
    rometickets: 'favicons/rometickets.png',
    turismoroma: 'favicons/turismoroma.png',
    michelin: 'favicons/michelin.png',
    kayak: 'favicons/kayak.jfif',
    tripadvisor: 'favicons/tripadvisor.png',
    booking: 'favicons/booking.png',
    outsideonline: 'favicons/outsideonline.png',
    bbc: 'favicons/bbc.png',
    nationalgeographic: 'favicons/nationalgeographic.png',
    buzzfeed: 'favicons/buzzfeed.png',
    economist: 'favicons/economist.png',
    theverge: 'favicons/theverge.png',
    chicagomag: 'favicons/chicagomag.png',
    noemamag: 'favicons/noemamag.png',
    wired: 'favicons/wired.png',
    technologyreview: 'favicons/technologyreview.png',
    thewalrus: 'favicons/thewalrus.png',
    nytimes: 'favicons/nytimes.png',
    harpers: 'favicons/harpers.png',
    thenewyorker: 'favicons/thenewyorker.png',
    theatlantic: 'favicons/theatlantic.png',
    scientificamerican: 'favicons/scientificamerican.png',
    theguardian: 'favicons/theguardian.png',
    aeon: 'favicons/aeon.png',
    youtube: 'favicons/youtube.png',
    x: 'favicons/x.png',
    reddit: 'favicons/reddit.png',
    instagram: 'favicons/instagram.png',
    pinterest: 'favicons/pinterest.png',
    linkedin: 'favicons/linkedin.png',
    spotify: 'favicons/spotify.png',
    netflix: 'favicons/netflix.png',
    dribble: 'favicons/dribble.png',
    twitch: 'favicons/twitch.png',
    duolingo: 'favicons/duolingo.png',
    canva: 'favicons/canva.png',
    addapinch: 'favicons/addapinch.png',
    sallysbakingaddiction: 'favicons/sallysbakingaddiction.png',
    hersheyland: 'favicons/hersheyland.png',
    allrecipes: 'favicons/allrecipes.png',
    bbcgoodfood: 'favicons/bbcgoodfood.png',
    foodnetwork: 'favicons/foodnetwork.png',
    healthyrecipesblog: 'favicons/healthyrecipesblog.png',
    joyfoodsunshine: 'favicons/joyfoodsunshine.png',
    loveandlemons: 'favicons/loveandlemons.png',
    recipetineats: 'favicons/recipetineats.png',
    parischezsharon: 'favicons/parischezsharon.png',
    jamieoliver: 'favicons/jamieoliver.png'
  },
  snapshots: {
    cntraveler: {
      title: '26 Best Things to Do in Rome, According to Our Local Expert | Condé Nast Traveler',
      url: 'https://www.cntraveler.com/gallery/best-things-to-do-in-rome',
      data: 'images/cntraveler.png'
    },
    galeriacolonna: {
      title: 'Home - Colonna Palace',
      url: 'https://www.galleriacolonna.it/en/',
      data: 'images/galleriacolonna.png'
    },
    manvsglobe: {
      title: "Trastevere: A Guide to Rome's Bohemian Neighbourhood - Man Vs Globe",
      url: 'https://www.manvsglobe.com/trastevere-guide-rome-italy-cool-hipster-bohemian-neighbourhood/',
      data: 'images/manvsglobe.png'
    },
    rometickets: {
      title: 'Buy your Colosseum, Roman Forum and Palatine hill tickets',
      url: 'https://colosseum.rome-tickets.org/colosseum-tickets/',
      data: 'images/rometickets.png'
    },
    turismoroma: {
      title: 'The Trevi Fountain | Turismo Roma',
      url: 'https://www.turismoroma.it/en/places/trevi-fountain',
      data: 'images/turismoroma.png'
    },
    michelin: {
      title: 'Rome MICHELIN Restaurants - The MICHELIN Guide',
      url: 'https://guide.michelin.com/en/it/lazio/roma/restaurants',
      data: 'images/michelin.png'
    },
    kayak: {
      title: 'JFK to ROM, 1/1 \– 1/7',
      url: 'https://www.kayak.com/flights/JFK-ROM/2026-01-01/2026-01-07',
      data: 'images/kayak.png'
    },
    tripadvisor: {
      title: 'THE 15 BEST Things to Do in Rome (2025) - Must-See Attractions',
      url: 'https://www.tripadvisor.com/Attractions-g187791-Activities-Rome_Lazio.html',
      data: 'images/tripadvisor.png'
    },
    booking: {
      title: 'The St. Regis Rome, Rome (updated prices 2025)',
      url: 'https://www.booking.com/hotel/it/stregisgrandroma.html',
      data: 'images/booking.png'
    },
    outsideonline: {
      title: 'Inside the Mad, Mad World of TripAdvisor',
      url: 'https://www.outsideonline.com/adventure-travel/advice/inside-mad-mad-world-tripadvisor',
      data: 'images/outsideonline.png'
    },
    bbc: {
      title: 'Will we ever… understand why music makes us feel good?',
      url: 'https://www.bbc.com/future/article/20130418-why-does-music-make-us-feel-good',
      data: 'images/bbc.png'
    },
    nationalgeographic: {
      title: 'Carnivore’s Dilemma - National Geographic',
      url: 'https://www.nationalgeographic.com/foodfeatures/meat/',
      data: 'images/nationalgeographic.png'
    },
    buzzfeed: {
      title: 'The Notorious MSG\'s Unlikely Formula For Success',
      url: 'https://www.buzzfeed.com/johnmahoney/the-notorious-msgs-unlikely-formula-for-success',
      data: 'images/buzzfeed.png'
    },
    economist: {
      title: 'Death of the calorie',
      url: 'https://www.economist.com/1843/2019/02/28/death-of-the-calorie',
      data: 'images/economist.png'
    },
    theverge: {
      title: 'The invisible seafaring industry that keeps the internet afloat',
      url: 'https://www.theverge.com/c/24070570/internet-cables-undersea-deep-repair-ships',
      data: 'images/theverge.png'
    },
    chicagomag: {
      title: 'A Knife Forged in Fire – Chicago Magazine',
      url: 'https://www.chicagomag.com/chicago-magazine/january-2024/a-knife-forged-in-fire/',
      data: 'images/chicagomag.png'
    },
    noemamag: {
      title: 'The Secret, Magical Life Of Lithium - NOEMA',
      url: 'https://www.noemamag.com/the-secret-magical-life-of-lithium/',
      data: 'images/noemamag.png'
    },
    wired: {
      title: 'Scientists Have an Audacious Plan to Map the Ancient World Before It Disappears | WIRED',
      url: 'https://www.wired.com/story/scientists-have-an-audacious-plan-to-map-the-ancient-world-before-it-disappears/',
      data: 'images/wired.png'
    },
    technologyreview: {
      title: 'The decade-long quest to hack the body’s immune system with electricity | MIT Technology Review',
      url: 'https://www.technologyreview.com/2024/05/30/1092937/the-messy-quest-to-replace-drugs-with-electricity/',
      data: 'images/technologyreview.png'
    },
    thewalrus: {
      title: 'The Benefits of Solitude | The Walrus',
      url: 'https://thewalrus.ca/the-benefits-of-solitude/',
      data: 'images/thewalrus.png'
    },
    nytimes: {
      title: 'The Brilliant Inventor Who Made Two of History’s Biggest Mistakes - The New York Times',
      url: 'https://www.nytimes.com/2023/03/15/magazine/cfcs-inventor.html',
      data: 'images/nytimes.png'
    },
    harpers: {
      title: 'In Search of Lost Time, by Tom Vanderbilt',
      url: 'https://harpers.org/archive/2023/04/the-science-of-the-perfect-second/',
      data: 'images/harpers.png'
    },
    thenewyorker: {
      title: 'Crooks’ Mistaken Bet on Encrypted Phones | The New Yorker',
      url: 'https://www.newyorker.com/magazine/2023/04/24/crooks-mistaken-bet-on-encrypted-phones',
      data: 'images/thenewyorker.png'
    },
    theatlantic: {
      title: 'Wall Street’s Short Kings - The Atlantic',
      url: 'https://www.theatlantic.com/magazine/archive/2023/03/wall-street-muddy-waters-activist-short-sellers-tesla-gamestop/672774/',
      data: 'images/theatlantic.png'
    },
    scientificamerican: {
      title: 'Synthetic Morphology Lets Scientists Create New Life-Forms | Scientific American',
      url: 'https://www.scientificamerican.com/article/synthetic-morphology-lets-scientists-create-new-life-forms/',
      data: 'images/scientificamerican.png'
    },
    theguardian: {
      title: '‘We are just getting started’: the plastic-eating bacteria that could change the world | Plastics | The Guardian',
      url: 'https://www.theguardian.com/environment/2023/sep/28/plastic-eating-bacteria-enzyme-recycling-waste',
      data: 'images/theguardian.png'
    },
    aeon: {
      title: 'What was it like to grow up in the last Ice Age? | Aeon Essays',
      url: 'https://aeon.co/essays/what-was-it-like-to-grow-up-in-the-last-ice-age',
      data: 'images/aeon.png'
    },
    addapinch: {
      title: 'The Best Chocolate Cake Recipe {Ever} - Add a Pinch',
      url: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/',
      data: 'images/addapinch.png'
    },
    sallysbakingaddiction:  {
      title: 'Chocolate Layer Cake (Popular Recipe!) - Sally\'s Baking Addiction',
      url: 'https://sallysbakingaddiction.com/triple-chocolate-layer-cake/',
      data: 'images/sallysbakingaddiction.png'
    },
    allrecipes:  {
      title: 'One Bowl Chocolate Cake Recipe',
      url: 'https://www.allrecipes.com/recipe/17981/one-bowl-chocolate-cake-iii/',
      data: 'images/allrecipes.png'
    },
    healthyrecipesblog:  {
      title: 'Homemade Chocolate Recipe - Healthy Recipes Blog',
      url: 'https://healthyrecipesblogs.com/homemade-chocolate/',
      data: 'images/healthyrecipesblog.png'
    },
    joyfoodsunshine:  {
      title: 'The Best Chocolate Chip Cookie Recipe Ever - JoyFoodSunshine',
      url: 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/',
      data: 'images/joyfoodsunshine.png'
    },
    loveandlemons:  {
      title: 'Best Homemade Brownies Recipe - Love and Lemons',
      url: 'https://www.loveandlemons.com/brownies-recipe/',
      data: 'images/loveandlemons.png'
    },
    recipetineats:  {
      title: 'Chocolate Mousse - RecipeTin Eats',
      url: 'https://www.recipetineats.com/chocolate-mousse/',
      data: 'images/recipetineats.png'
    },
    parischezsharon:  {
      title: 'The Best Chocolate Soufflé Ever - Paris chez Sharon',
      url: 'https://parischezsharon.com/2022/10/the-best-chocolate-souffle-ever.html',
      data: 'images/parischezsharon.png'
    },
    jamieoliver:  {
      title: 'Simple chocolate tart | Jamie Oliver chocolate recipes',
      url: 'https://www.jamieoliver.com/recipes/chocolate/simple-chocolate-tart/',
      data: 'images/jamieoliver.png'
    }
  }
};