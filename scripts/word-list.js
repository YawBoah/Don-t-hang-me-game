const wordList = [
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "experiment",
        hint: "A test or investigation to discover something new or demonstrate a known fact."
    },
    {
        word: "observation",
        hint: "The process of using your senses to gather information about the world around you."
    },
    {
        word: "hypothesis",
        hint: "An educated guess or prediction about what might happen in an experiment."
    },
    {
        word: "variables",
        hint: "Factors that can change or affect the outcome of an experiment."
    },
    {
        word: "data",
        hint: "Facts, figures, or information collected during an experiment or study."
    },
    {
        word: "scientist",
        hint: "A person who conducts scientific research and investigations."
    },
    {
        word: "biology",
        hint: "The study of living organisms and their interactions with each other and their environment."
    },
    {
        word: "chemistry",
        hint: "The study of matter, its properties, composition, and changes it undergoes."
    },
    {
        word: "physics",
        hint: "The study of the fundamental forces and laws that govern the universe."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena, such as stars and planets."
    },
    {
        word: "geology",
        hint: "The study of the Earth's structure, composition, and processes, including rocks and minerals."
    },
    {
        word: "ecology",
        hint: "The study of how organisms interact with each other and their environment."
    },
    {
        word: "microscope",
        hint: "A tool that allows you to see very small objects or organisms that are not visible to the naked eye."
    },
    {
        word: "magnet",
        hint: "An object that attracts certain materials like iron and exerts a magnetic force."
    },
    {
        word: "electricity",
        hint: "A form of energy resulting from the existence of charged particles, such as electrons."
    },
    {
        word: "gravity",
        hint: "The force that pulls objects toward one another; it is what keeps us on the Earth."
    },
    {
        word: "solar system",
        hint: "A group of planets and other celestial objects that orbit a star, like our sun."
    },
    {
        word: "evaporation",
        hint: "The process by which a liquid turns into vapor or gas, often due to heating."
    },
    {
        word: "condensation",
        hint: "The process by which a gas or vapor turns into a liquid."
    },
    {
        word: "solid",
        hint: "A state of matter with a fixed shape and volume, like ice or wood."
    },
    {
        word: "liquid",
        hint: "A state of matter with a definite volume but no fixed shape, like water."
    },
    {
        word: "gas",
        hint: "A state of matter with no definite shape or volume, like air."
    },
    {
        word: "temperature",
        hint: "A measure of how hot or cold something is, typically measured in degrees Celsius or Fahrenheit."
    },
    {
        word: "gravity",
        hint: "The force that pulls objects toward one another; it is what keeps us on the Earth."
    },
    {
        word: "moon",
        hint: "A natural satellite that orbits a planet, like the Earth's moon."
    },
    {
        word: "sun",
        hint: "The star at the center of our solar system, which provides heat and light to the planets."
    },
    {
        word: "ocean",
        hint: "A large body of saltwater that covers most of the Earth's surface."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "rain",
        hint: "Precipitation in the form of water droplets falling from the sky."
    },
    {
        word: "cloud",
        hint: "A visible mass of water droplets or ice crystals suspended in the atmosphere."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "earthquake",
        hint: "The shaking of the Earth's surface caused by the sudden release of energy in the Earth's crust."
    },
    {
        word: "species",
        hint: "A group of living organisms that share common characteristics and can reproduce with each other."
    },
    {
        word: "dinosaur",
        hint: "A group of reptiles that lived millions of years ago and are now extinct."
    },
    {
        word: "fossil",
        hint: "The remains or traces of ancient plants and animals that have turned into rock over time."
    },
    {
        word: "ecosystem",
        hint: "A community of living organisms and their interactions with each other and their environment."
    },
    {
        word: "food chain",
        hint: "A sequence of organisms, each of which serves as a source of food for the next in the chain."
    },
    {
        word: "photosynthesis",
        hint: "The process by which plants and some other organisms convert light energy into chemical energy."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "carbon dioxide",
        hint: "A gas produced by all animals when they breathe out and by the burning of fossil fuels."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "climate",
        hint: "The long-term pattern of weather conditions in a particular region."
    },
    {
        word: "pollution",
        hint: "The presence or introduction of harmful substances into the environment."
    },
    {
        word: "conservation",
        hint: "The protection and preservation of natural resources and wildlife."
    },
    {
        word: "solar energy",
        hint: "Energy from the sun that can be harnessed for various purposes, like generating electricity."
    },
    {
        word: "weather",
        hint: "The day-to-day conditions of the atmosphere, including temperature, humidity, and precipitation."
    },
    {
        word: "star",
        hint: "A massive, luminous sphere of plasma held together by gravity and undergoing nuclear fusion."
    },
    {
        word: "planetarium",
        hint: "A place where you can learn about stars, planets, and the universe through visual displays."
    },
    {
        word: "computer",
        hint: "A machine that can process and store information."
    },
    {
        word: "keyboard",
        hint: "A device with buttons used to input text and commands into a computer."
    },
    {
        word: "mouse",
        hint: "A pointing device used to interact with a computer's graphical user interface."
    },
    {
        word: "screen",
        hint: "The display part of a computer monitor where you can see information."
    },
    {
        word: "software",
        hint: "Programs and applications that run on a computer to perform tasks."
    },
    {
        word: "hardware",
        hint: "The physical components of a computer, like the monitor, keyboard, and CPU."
    },
    {
        word: "internet",
        hint: "A global network of computers that are connected and can share information."
    },
    {
        word: "website",
        hint: "A collection of web pages with text, images, and links that you can visit on the internet."
    },
    {
        word: "email",
        hint: "A way to send messages and letters to people using the internet."
    },
    {
        word: "password",
        hint: "A secret code that you use to protect your computer or online accounts."
    },
    {
        word: "robot",
        hint: "A machine that can be programmed to do tasks automatically."
    },
    {
        word: "code",
        hint: "Instructions that tell a computer what to do, like a secret language for computers."
    },
    {
        word: "programmer",
        hint: "A person who writes code to create computer programs."
    },
    {
        word: "video game",
        hint: "A fun interactive software that you can play on a computer or game console."
    },
    {
        word: "camera",
        hint: "A device that takes pictures and videos, often built into phones and computers."
    },
    {
        word: "tablet",
        hint: "A small, portable computer with a touchscreen for browsing the internet and playing games."
    },
    {
        word: "smartphone",
        hint: "A mobile phone that can do many things, like surfing the web and taking pictures."
    },
    {
        word: "app",
        hint: "A small software program that you can install on your smartphone or tablet."
    },
    {
        word: "browser",
        hint: "A program used to explore the internet and view websites, like Chrome or Firefox."
    },
    {
        word: "social media",
        hint: "Websites and apps where people can connect, share, and communicate online."
    },
    {
        word: "emoji",
        hint: "Small pictures or symbols used in texting and online messages to express emotions."
    },
    {
        word: "search engine",
        hint: "A tool like Google that helps you find information on the internet."
    },
    {
        word: "download",
        hint: "To get a file or program from the internet and save it on your computer or device."
    },
    {
        word: "upload",
        hint: "To send a file or data from your computer or device to the internet."
    },
    {
        word: "cybersecurity",
        hint: "The practice of protecting computers, networks, and data from theft or damage."
    },
    {
        word: "virus",
        hint: "A harmful computer program that can damage your computer and steal your data."
    },
    {
        word: "cloud",
        hint: "A way to store and access data and programs over the internet, like Google Drive or iCloud."
    },
    {
        word: "emoji",
        hint: "Small pictures or symbols used in texting and online messages to express emotions."
    },
    {
        word: "tablet",
        hint: "A small, portable computer with a touchscreen for browsing the internet and playing games."
    },
    {
        word: "smartphone",
        hint: "A mobile phone that can do many things, like surfing the web and taking pictures."
    },
    {
        word: "app",
        hint: "A small software program that you can install on your smartphone or tablet."
    },
    {
        word: "browser",
        hint: "A program used to explore the internet and view websites, like Chrome or Firefox."
    },
    {
        word: "social media",
        hint: "Websites and apps where people can connect, share, and communicate online."
    },
    {
        word: "emoji",
        hint: "Small pictures or symbols used in texting and online messages to express emotions."
    },
    {
        word: "search engine",
        hint: "A tool like Google that helps you find information on the internet."
    },
    {
        word: "download",
        hint: "To get a file or program from the internet and save it on your computer or device."
    },
    {
        word: "upload",
        hint: "To send a file or data from your computer or device to the internet."
    },
    {
        word: "cybersecurity",
        hint: "The practice of protecting computers, networks, and data from theft or damage."
    },
    {
        word: "virus",
        hint: "A harmful computer program that can damage your computer and steal your data."
    },
    {
        word: "cloud",
        hint: "A way to store and access data and programs over the internet, like Google Drive or iCloud."
    },
    {
        word: "programming",
        hint: "The process of creating computer programs using code."
    },
    {
        word: "algorithm",
        hint: "A step-by-step set of instructions for solving a problem or performing a task."
    },
    {
        word: "URL",
        hint: "A web address that tells your browser where to find a website on the internet."
    },
    {
        word: "online",
        hint: "Connected to or available on the internet."
    },
    {
        word: "offline",
        hint: "Not connected to the internet; working without an internet connection."
    },
    {
        word: "email",
        hint: "A way to send messages and letters to people using the internet."
    },
    {
        word: "password",
        hint: "A secret code that you use to protect your computer or online accounts."
    },
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];