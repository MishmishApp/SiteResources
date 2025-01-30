var resources = {
  misc: {
    background: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/background.png'
  },
  icons: {
    options: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>',
    history: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3\' /></svg>',
    tabs: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
    downloads: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>',
    channel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>',
    comment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z" /></svg>',
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
    next: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>',
    reload: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>',
    fileword: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-word</title><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,20H13.8L12,13.2L10.2,20H8.8L6.6,11H8.1L9.5,17.8L11.3,11H12.6L14.4,17.8L15.8,11H17.3L15.2,20M13,9V3.5L18.5,9H13Z" /></svg>',
    filepowerpoint: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-powerpoint</title><path d="M12.6,12.3H10.6V15.5H12.7C13.3,15.5 13.6,15.3 13.9,15C14.2,14.7 14.3,14.4 14.3,13.9C14.3,13.4 14.2,13.1 13.9,12.8C13.6,12.5 13.2,12.3 12.6,12.3M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,16C14.6,16.5 14.1,16.7 12.8,16.7H10.6V20H9V11H12.8C14.1,11 14.7,11.3 15.2,11.8C15.8,12.4 16,13 16,13.9C16,14.8 15.8,15.5 15.2,16M13,9V3.5L18.5,9H13Z" /></svg>',
    filedocument: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-document</title><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>',
    fileexcel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-excel</title><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.8,20H14L12,16.6L10,20H8.2L11.1,15.5L8.2,11H10L12,14.4L14,11H15.8L12.9,15.5L15.8,20M13,9V3.5L18.5,9H13Z" /></svg>',
    filepdf: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-pdf-box</title><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z" /></svg>'
  },
  favicons: {
    google: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/google.png',
    cntraveler: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/cntraveler.png',
    galeriacolonna: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/galleriacolonna.png',
    manvsglobe: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/manvsglobe.png',
    rometickets: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/rometickets.png',
    turismoroma: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/turismoroma.png',
    michelin: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/michelin.png',
    kayak: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/kayak.jfif',
    tripadvisor: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/tripadvisor.png',
    booking: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/booking.png',
    outsideonline: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/outsideonline.png',
    bbc: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/bbc.png',
    nationalgeographic: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/nationalgeographic.png',
    buzzfeed: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/buzzfeed.png',
    economist: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/economist.png',
    theverge: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/theverge.png',
    chicagomag: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/chicagomag.png',
    noemamag: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/noemamag.png',
    wired: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/wired.png',
    technologyreview: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/technologyreview.png',
    thewalrus: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/thewalrus.png',
    nytimes: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/nytimes.png',
    harpers: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/harpers.png',
    thenewyorker: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/thenewyorker.png',
    theatlantic: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/theatlantic.png',
    scientificamerican: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/scientificamerican.png',
    theguardian: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/theguardian.png',
    aeon: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/aeon.png',
    youtube: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/youtube.png',
    x: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/x.png',
    reddit: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/reddit.png',
    instagram: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/instagram.png',
    pinterest: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/pinterest.png',
    linkedin: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/linkedin.png',
    spotify: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/spotify.png',
    netflix: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/netflix.png',
    dribble: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/dribble.png',
    twitch: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/twitch.png',
    duolingo: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/duolingo.png',
    canva: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/canva.png',
    addapinch: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/addapinch.png',
    sallysbakingaddiction: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/sallysbakingaddiction.png',
    hersheyland: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/hersheyland.png',
    allrecipes: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/allrecipes.png',
    bbcgoodfood: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/bbcgoodfood.png',
    foodnetwork: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/foodnetwork.png',
    healthyrecipesblog: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/healthyrecipesblog.png',
    joyfoodsunshine: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/joyfoodsunshine.png',
    loveandlemons: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/loveandlemons.png',
    recipetineats: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/recipetineats.png',
    parischezsharon: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/parischezsharon.png',
    jamieoliver: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/favicons/jamieoliver.png'
  },
  links: {
    cntraveler: {
      title: '26 Best Things to Do in Rome, According to Our Local Expert | Condé Nast Traveler',
      url: 'https://www.cntraveler.com/gallery/best-things-to-do-in-rome',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/cntraveler.png'
    },
    galeriacolonna: {
      title: 'Home - Colonna Palace',
      url: 'https://www.galleriacolonna.it/en/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/galleriacolonna.png'
    },
    manvsglobe: {
      title: "Trastevere: A Guide to Rome's Bohemian Neighbourhood - Man Vs Globe",
      url: 'https://www.manvsglobe.com/trastevere-guide-rome-italy-cool-hipster-bohemian-neighbourhood/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/manvsglobe.png'
    },
    rometickets: {
      title: 'Buy your Colosseum, Roman Forum and Palatine hill tickets',
      url: 'https://colosseum.rome-tickets.org/colosseum-tickets/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/rometickets.png'
    },
    turismoroma: {
      title: 'The Trevi Fountain | Turismo Roma',
      url: 'https://www.turismoroma.it/en/places/trevi-fountain',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/turismoroma.png'
    },
    michelin: {
      title: 'Rome MICHELIN Restaurants - The MICHELIN Guide',
      url: 'https://guide.michelin.com/en/it/lazio/roma/restaurants',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/michelin.png'
    },
    kayak: {
      title: 'JFK to ROM, 1/1 \– 1/7',
      url: 'https://www.kayak.com/flights/JFK-ROM/2026-01-01/2026-01-07',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/kayak.png'
    },
    tripadvisor: {
      title: 'THE 15 BEST Things to Do in Rome (2025) - Must-See Attractions',
      url: 'https://www.tripadvisor.com/Attractions-g187791-Activities-Rome_Lazio.html',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/tripadvisor.png'
    },
    booking: {
      title: 'The St. Regis Rome, Rome (updated prices 2025)',
      url: 'https://www.booking.com/hotel/it/stregisgrandroma.html',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/booking.png'
    },
    outsideonline: {
      title: 'Inside the Mad, Mad World of TripAdvisor',
      url: 'https://www.outsideonline.com/adventure-travel/advice/inside-mad-mad-world-tripadvisor',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/outsideonline.png'
    },
    bbc: {
      title: 'Will we ever… understand why music makes us feel good?',
      url: 'https://www.bbc.com/future/article/20130418-why-does-music-make-us-feel-good',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/bbc.png'
    },
    nationalgeographic: {
      title: 'Carnivore’s Dilemma - National Geographic',
      url: 'https://www.nationalgeographic.com/foodfeatures/meat/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/nationalgeographic.png'
    },
    buzzfeed: {
      title: 'The Notorious MSG\'s Unlikely Formula For Success',
      url: 'https://www.buzzfeed.com/johnmahoney/the-notorious-msgs-unlikely-formula-for-success',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/buzzfeed.png'
    },
    economist: {
      title: 'Death of the calorie',
      url: 'https://www.economist.com/1843/2019/02/28/death-of-the-calorie',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/economist.png'
    },
    theverge: {
      title: 'The invisible seafaring industry that keeps the internet afloat',
      url: 'https://www.theverge.com/c/24070570/internet-cables-undersea-deep-repair-ships',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/theverge.png'
    },
    chicagomag: {
      title: 'A Knife Forged in Fire – Chicago Magazine',
      url: 'https://www.chicagomag.com/chicago-magazine/january-2024/a-knife-forged-in-fire/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/chicagomag.png'
    },
    noemamag: {
      title: 'The Secret, Magical Life Of Lithium - NOEMA',
      url: 'https://www.noemamag.com/the-secret-magical-life-of-lithium/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/noemamag.png'
    },
    wired: {
      title: 'Scientists Have an Audacious Plan to Map the Ancient World Before It Disappears | WIRED',
      url: 'https://www.wired.com/story/scientists-have-an-audacious-plan-to-map-the-ancient-world-before-it-disappears/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/wired.png'
    },
    technologyreview: {
      title: 'The decade-long quest to hack the body’s immune system with electricity | MIT Technology Review',
      url: 'https://www.technologyreview.com/2024/05/30/1092937/the-messy-quest-to-replace-drugs-with-electricity/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/technologyreview.png'
    },
    thewalrus: {
      title: 'The Benefits of Solitude | The Walrus',
      url: 'https://thewalrus.ca/the-benefits-of-solitude/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/thewalrus.png'
    },
    nytimes: {
      title: 'The Brilliant Inventor Who Made Two of History’s Biggest Mistakes - The New York Times',
      url: 'https://www.nytimes.com/2023/03/15/magazine/cfcs-inventor.html',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/nytimes.png'
    },
    harpers: {
      title: 'In Search of Lost Time, by Tom Vanderbilt',
      url: 'https://harpers.org/archive/2023/04/the-science-of-the-perfect-second/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/harpers.png'
    },
    thenewyorker: {
      title: 'Crooks’ Mistaken Bet on Encrypted Phones | The New Yorker',
      url: 'https://www.newyorker.com/magazine/2023/04/24/crooks-mistaken-bet-on-encrypted-phones',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/thenewyorker.png'
    },
    theatlantic: {
      title: 'Wall Street’s Short Kings - The Atlantic',
      url: 'https://www.theatlantic.com/magazine/archive/2023/03/wall-street-muddy-waters-activist-short-sellers-tesla-gamestop/672774/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/theatlantic.png'
    },
    scientificamerican: {
      title: 'Synthetic Morphology Lets Scientists Create New Life-Forms | Scientific American',
      url: 'https://www.scientificamerican.com/article/synthetic-morphology-lets-scientists-create-new-life-forms/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/scientificamerican.png'
    },
    theguardian: {
      title: '‘We are just getting started’: the plastic-eating bacteria that could change the world | Plastics | The Guardian',
      url: 'https://www.theguardian.com/environment/2023/sep/28/plastic-eating-bacteria-enzyme-recycling-waste',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/theguardian.png'
    },
    aeon: {
      title: 'What was it like to grow up in the last Ice Age? | Aeon Essays',
      url: 'https://aeon.co/essays/what-was-it-like-to-grow-up-in-the-last-ice-age',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/aeon.png'
    },
    addapinch: {
      title: 'The Best Chocolate Cake Recipe {Ever} - Add a Pinch',
      subtitle: 'Best Chocolate Cake Recipe: A one bowl chocolate cake recipe that is quick, easy, and delicious! Gluten-free, dairy-free, egg-free options!',
      url: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/addapinch2.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/addapinch.png'
    },
    sallysbakingaddiction:  {
      title: 'Chocolate Layer Cake (Popular Recipe!) - Sally\'s Baking Addiction',
      subtitle: 'This is my favorite homemade chocolate cake recipe. Top with creamy chocolate buttercream and chocolate chips for 3x the flavor!',
      url: 'https://sallysbakingaddiction.com/triple-chocolate-layer-cake/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/sallysbakingaddiction2.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/sallysbakingaddiction.png'
    },
    allrecipes:  {
      title: 'One Bowl Chocolate Cake Recipe',
      url: 'https://www.allrecipes.com/recipe/17981/one-bowl-chocolate-cake-iii/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/allrecipes.png'
    },
    healthyrecipesblog:  {
      title: 'Homemade Chocolate Recipe - Healthy Recipes Blog',
      subtitle: 'This ultra-rich and decadent homemade chocolate is made with cocoa powder, coconut oil, honey, and chopped nuts.',
      url: 'https://healthyrecipesblogs.com/homemade-chocolate/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/healthyrecipesblog3.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/healthyrecipesblog.png'
    },
    joyfoodsunshine:  {
      title: 'The Best Chocolate Chip Cookie Recipe Ever - JoyFoodSunshine',
      url: 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/joyfoodsunshine.png'
    },
    loveandlemons:  {
      title: 'Best Homemade Brownies - Love and Lemons',
      subtitle: 'The best brownie recipe! Made with cocoa powder and chocolate chips, these homemade brownies are fudgy, gooey, super chocolaty, and easy to make!',
      url: 'https://www.loveandlemons.com/brownies-recipe/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/loveandlemons3.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/loveandlemons.png'
    },
    recipetineats:  {
      title: 'Chocolate Mousse',
      subtitle: 'Chocolate Mousse - the ultimate chocolate fix. It\'s rich yet light and fluffy, and you\'re just five ingredients away from these little pots of heaven!',
      url: 'https://www.recipetineats.com/chocolate-mousse/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/recipetineats2.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/recipetineats.png'
    },
    parischezsharon:  {
      title: 'The Best Chocolate Soufflé Ever - Paris chez Sharon',
      url: 'https://parischezsharon.com/2022/10/the-best-chocolate-souffle-ever.html',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/parischezsharon.png'
    },
    jamieoliver:  {
      title: 'Simple chocolate tart | Jamie Oliver chocolate recipes',
      subtitle: 'A beautiful chocolate dessert recipe that will wow your guest. This Jamie Oliver dessert recipe is great on its own, or served with sweet seasonal berries.',
      url: 'https://www.jamieoliver.com/recipes/chocolate/simple-chocolate-tart/',
      image: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/jamieoliver2.png',
      snapshot: 'https://cdn.jsdelivr.net/gh/MishmishApp/SiteResources/images/jamieoliver.png'
    }
  }
};
