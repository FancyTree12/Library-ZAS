
const books = [
    
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1997,
        isbn: "978-0747532699",
        description: "Eleven-year-old Harry Potter discovers he's a wizard and begins an adventure at Hogwarts School of Witchcraft and Wizardry, learning about his magical heritage and facing dangerous secrets.",
        coverImage: "images/stone.jpg",
        inStock: true,
        pages: 223,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1FjXJTzRrvNsNiP0dA8WE2S_-mbYjSGxr"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1998,
        isbn: "978-0747538486",
        description: "In his second year at Hogwarts, Harry investigates a mysterious message about the Chamber of Secrets being opened, endangering students with a hidden monster inside the school.",
        coverImage: "images/chamber.jpg",
        inStock: true,
        pages: 251,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#:~:text=The%20plot%20follows%20Harry's,come%20from%20all%2Dmagical%20families.",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1o9BQx53WemT1DKW1WFo7JREHtEXpKxc5"
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1999,
        isbn: "978-0747546290",
        description: "Harry's third year at Hogwarts is threatened by escaped murderer Sirius Black. As sinister prison guards patrol the school, Harry uncovers shocking truths about his past.",
        coverImage: "images/prison.jpg",
        inStock: true,
        pages: 317,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KIAMZQ8eklLjalukZ13p-Nz2Y8OVvSHg"
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2000,
        isbn: "978-0747550990",
        description: "Harry mysteriously enters the dangerous Triwizard Tournament meant for older students. Facing dragons and dark wizards, he discovers a plot threatening his life and the wizarding world.",
        coverImage: "images/goblet.jpg",
        inStock: true,
        pages: 636,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1tAD0k_S7lwdJhLx6snnano0yQezBTI6u"
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2003,
        isbn: "978-0747551003",
        description: "As Voldemort returns, Harry joins a secret order fighting dark forces. With the Ministry denying danger and Hogwarts under siege, Harry must learn to protect his mind.",
        coverImage: "images/pheonix.jpg",
        inStock: true,
        pages: 766,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ebc-aWPZHZZoBV1ddSLgx-bKUr4H0mXY"
    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2005,
        isbn: "978-0747581086",
        description: "Harry works with Dumbledore to uncover Voldemort's secrets while suspecting Malfoy of sinister activities. A mysterious potions book and revelations about the past prepare Harry for his destiny.",
        coverImage: "images/prince.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uygxyeEHrB7zuGo9d9FmoG-FFMCyOauN"
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2007,
        isbn: "978-0747591054",
        description: "In the final battle against Voldemort, Harry must find and destroy the remaining Horcruxes. The quest for three legendary objects—the Deathly Hallows—becomes crucial to defeating his enemy.",
        coverImage: "images/deathly.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uJWQ3ssj_wQQjSSRrT6fi5oalr91VD7s"
    },
    {
        id: 8,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian, Fiction, Classic",
        publishYear: 1949,
        isbn: "978-0451524935",
        description: "In a totalitarian future society, a man struggles to maintain his identity under an oppressive regime that controls information and manipulates truth.",
        coverImage: "images/1984.jpg",
        inStock: true,
        pages: 328,
        publisher: "Signet Classic",
        language: "English",
        dimensions: "4.2 x 0.9 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1NqRcHcEJI3ukmZq3nzEmVkOHeoMiCqcP"
    },
    {
        id: 9,
        title: "A History of American Literature",
        author: "Richard Gray",
        genre: "Literary Criticism, Reference, Academic",
        publishYear: 2011,
        isbn: "978-1405192286",
        description: "Comprehensive overview of American literary traditions from colonial times to the present, examining diverse voices and cultural movements.",
        coverImage: "images/american.jpg",
        inStock: true,
        pages: 936,
        publisher: "Wiley-Blackwell",
        language: "English",
        dimensions: "6.8 x 1.6 x 9.7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_History_of_American_Literature",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1dtLeFij3RhpgEpVTZhWq4xp4AeJSbktW"
    },
    {
        id: 10,
        title: "A Tree Grows In Brooklyn",
        author: "Betty Smith",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1943,
        isbn: "978-0061120077",
        description: "Young Francie Nolan grows up amid poverty in early 1900s Brooklyn, finding strength in family, education, and her own resilience.",
        coverImage: "images/tree.jpg",
        inStock: true,
        pages: 496,
        publisher: "Harper Perennial Modern Classics",
        language: "English",
        dimensions: "5.3 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Tree_Grows_in_Brooklyn",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1XV4m21ds5eMCxcRoYA8zy-X3He3KWT1B"
    },
    {
        id: 11,
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        genre: "Classic, Adventure, Fiction",
        publishYear: 1884,
        isbn: "978-0141199009",
        description: "Huck Finn and runaway slave Jim journey down the Mississippi River, encountering adventure, danger, and moral dilemmas in pre-Civil War America.",
        coverImage: "images/finn.jpg",
        inStock: true,
        pages: 366,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.8 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1d2tR-RmfUir94T2Mzc1EDvU247pYX1_u"
    },
    {
        id: 12,
        title: "American Fairy Tales",
        author: "L. Frank Baum",
        genre: "Fantasy, Children's, Short Stories",
        publishYear: 1901,
        isbn: "978-1420955743",
        description: "Collection of whimsical fairy tales set in America, combining magic with modern settings by the author of The Wonderful Wizard of Oz.",
        coverImage: "images/fairy.jpg",
        inStock: true,
        pages: 144,
        publisher: "Digireads.com",
        language: "English",
        dimensions: "6 x 0.3 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/American_Fairy_Tales",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1-s7z-xtJPge0OBs_JPYK0rIiA0ByPJ45"
    },
    {
        id: 13,
        title: "American Literature",
        author: "Various",
        genre: "Anthology, Reference, Academic",
        publishYear: 2012,
        isbn: "978-0133268126",
        description: "Anthology of American literature spanning multiple periods and styles, featuring influential works from diverse authors throughout American history.",
        coverImage: "images/literature.jpg",
        inStock: true,
        pages: 1580,
        publisher: "Prentice Hall",
        language: "English",
        dimensions: "7.5 x 2.1 x 9.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/American_literature",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1dtLeFij3RhpgEpVTZhWq4xp4AeJSbktW"
    },
    {
        id: 14,
        title: "Angels & Demons",
        author: "Dan Brown",
        genre: "Mystery, Thriller, Fiction",
        publishYear: 2000,
        isbn: "978-1416524793",
        description: "Robert Langdon races to solve an ancient vendetta in Vatican City, uncovering a conspiracy involving science, religion, and a secret brotherhood.",
        coverImage: "images/angelsdemons.jpg",
        inStock: true,
        pages: 736,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "4.1 x 1.6 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Angels_%26_Demons",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1mifDj_xm_iUBa3-JhdZ0qr-__cYMhARl"
    },
    {
        id: 15,
        title: "Anne of Green Gables",
        author: "L.M. Montgomery",
        genre: "Children's, Classic, Fiction",
        publishYear: 1908,
        isbn: "978-0553213133",
        description: "Spirited orphan Anne Shirley finds a home with elderly siblings on Prince Edward Island, transforming their lives with her imagination and charm.",
        coverImage: "images/anne.jpg",
        inStock: true,
        pages: 320,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.7 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Anne_of_Green_Gables",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1aB47IKwF43i3HPSeK8BscLZeVw4veZtw"
    },
    {
        id: 16,
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1873,
        isbn: "978-0140449136",
        description: "Eccentric Phileas Fogg wagers he can circumnavigate the globe in eighty days, embarking on an extraordinary journey across continents and cultures.",
        coverImage: "images/80days.jpg",
        inStock: true,
        pages: 252,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Around_the_World_in_Eighty_Days",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10mhvO9yFQImIqI3AKpFpYlQ0k0tl-GmO"
    },
    {
        id: 17,
        title: "Black Beauty",
        author: "Anna Sewell",
        genre: "Children's, Classic, Fiction",
        publishYear: 1877,
        isbn: "978-0141321035",
        description: "A horse narrates his life story, revealing experiences with both kindness and cruelty, advocating for compassionate treatment of animals.",
        coverImage: "images/blackbeauty.jpg",
        inStock: true,
        pages: 255,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Black_Beauty",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GVbAwh8G6teu0tbj5uQA4b6UIz1Hfrlo"
    },
    {
        id: 18,
        title: "Catch-22",
        author: "Joseph Heller",
        genre: "Satire, Classic, Fiction",
        publishYear: 1961,
        isbn: "978-0684833392",
        description: "Bombardier Yossarian confronts the absurdity of war and bureaucracy while attempting to survive WWII amid circular military logic.",
        coverImage: "images/catch22.jpg",
        inStock: true,
        pages: 453,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 1.1 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Catch-22",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1nRXXfmEYBgDaeWQCXSLPqITHsgouoMR1"
    },
    {
        id: 19,
        title: "Creating Characters",
        author: "Dwight V. Swain",
        genre: "Reference, Writing, Educational",
        publishYear: 1990,
        isbn: "978-0806139180",
        description: "Practical guide for writers on developing memorable fictional characters with authentic motivations, conflicts, and personal histories.",
        coverImage: "images/creatingcharacters.jpg",
        inStock: true,
        pages: 240,
        publisher: "University of Oklahoma Press",
        language: "English",
        dimensions: "5.5 x 0.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Creating_Characters",
        downloadUrl: ""
    },
    {
        id: 20,
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror, Classic, Fiction",
        publishYear: 1897,
        isbn: "978-0141439846",
        description: "Epistolary novel chronicling Count Dracula's attempt to move from Transylvania to England and the battle between him and vampire hunters.",
        coverImage: "images/dracula.jpg",
        inStock: true,
        pages: 454,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.8 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Dracula",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1aiavoMV3Jn1WUunxjiROU2eUhuu1n_Ct"
    },
    {
        id: 21,
        title: "Eat, Pray, Love",
        author: "Elizabeth Gilbert",
        genre: "Memoir, Travel, Spiritual",
        publishYear: 2006,
        isbn: "978-0143038412",
        description: "One woman's journey across Italy, India, and Indonesia seeking pleasure, devotion, and balance after a difficult divorce.",
        coverImage: "images/eatpray.jpg",
        inStock: true,
        pages: 352,
        publisher: "Penguin Books",
        language: "English",
        dimensions: "5.4 x 0.8 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Eat,_Pray,_Love",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15SKqyBmlprYzXPYZWrhotDrj2Xc7TJiC"
    },
    {
        id: 22,
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Horror, Classic, Fiction",
        publishYear: 1818,
        isbn: "978-0141439471",
        description: "Scientist Victor Frankenstein creates a sentient creature who, rejected by society, seeks vengeance against his creator.",
        coverImage: "images/frankestein.jpg",
        inStock: true,
        pages: 273,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Frankenstein",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1d8fkP5NvPEjS3gyhSjPm_5oTeKDEZSr8"
    },
    {
        id: 23,
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        genre: "Historical Fiction, Romance, Classic",
        publishYear: 1936,
        isbn: "978-1451635621",
        description: "Scarlett O'Hara navigates love, loss, and survival during the American Civil War and Reconstruction era in the Southern United States.",
        coverImage: "images/gonewith.jpg",
        inStock: true,
        pages: 960,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ES2hw7vGTN2Yi5x8pY8ZA0uJDHXzkTw0"
    },
    {
        id: 24,
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        genre: "Satire, Adventure, Classic",
        publishYear: 1726,
        isbn: "978-0141439495",
        description: "Lemuel Gulliver's fantastical voyages to strange lands inhabited by tiny people, giants, intellectuals, and horses, satirizing human nature.",
        coverImage: "images/gulliver.jpg",
        inStock: true,
        pages: 306,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1CnLETjrUB9-j7VyRoUlgzDST9RMOiF-t"
    },
    {
        id: 25,
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        genre: "Fiction, Classic, Drama",
        publishYear: 1899,
        isbn: "978-0141441672",
        description: "Marlow recounts his journey up the Congo River into the African interior, where he encounters the enigmatic Kurtz.",
        coverImage: "images/heartof.jpg",
        inStock: true,
        pages: 112,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.3 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Heart_of_Darkness",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1HscI7RL_6pRRzDx4F9T_bUs8guLcSmJM"
    },
    {
        id: 26,
        title: "How to Write Effective Business English",
        author: "Fiona Talbot",
        genre: "Business, Reference, Educational",
        publishYear: 2016,
        isbn: "978-0749475550",
        description: "Practical guide for improving business communication, covering emails, reports, and international correspondence with clarity and precision.",
        coverImage: "images/businessenglish.jpg",
        inStock: true,
        pages: 184,
        publisher: "Kogan Page",
        language: "English",
        dimensions: "5.4 x 0.5 x 8.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Write_Effective_Business_English",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1rqK-otj_7s2uMiaKHY_pl_rFjOx1U6IH"
    },
    {
        id: 27,
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1864,
        isbn: "978-0553213973",
        description: "Professor Lidenbrock and his nephew discover an ancient manuscript detailing a path to Earth's center, leading to extraordinary underground adventures.",
        coverImage: "images/journey.webp",
        inStock: true,
        pages: 240,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Journey_to_the_Center_of_the_Earth",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1hXxm0ArDL2d15pwnUKp7zIICnK4-fmLg"
    },
    {
        id: 28,
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Adventure, Fiction, Philosophical",
        publishYear: 2001,
        isbn: "978-0156027328",
        description: "Teenage Pi Patel survives a shipwreck and spends 227 days on a lifeboat with a Bengal tiger, exploring faith and survival.",
        coverImage: "images/pi.jpg",
        inStock: true,
        pages: 326,
        publisher: "Mariner Books",
        language: "English",
        dimensions: "5.3 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_of_Pi",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1NvBri3gZ3ruOIt2zvM3g0M3DuvaldwzV"
    },
    {
        id: 29,
        title: "Little Women",
        author: "Louisa May Alcott",
        genre: "Classic, Fiction, Drama",
        publishYear: 1868,
        isbn: "978-0147514011",
        description: "Four sisters navigate poverty, love, and personal growth during the American Civil War, led by the ambitious writer Jo March.",
        coverImage: "images/littlewomen.jpeg",
        inStock: true,
        pages: 777,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 1.4 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Little_Women",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1fCzeHX3J764wm1UxHzBAejGxNFilft-8"
    },
    {
        id: 30,
        title: "McDougal Littell Literature: American Literature",
        author: "McDougal Littell",
        genre: "Textbook, Reference, Academic",
        publishYear: 2008,
        isbn: "978-0618568666",
        description: "Comprehensive high school textbook presenting American literary works from various periods with historical context and analytical guidance.",
        coverImage: "images/mcdougal.jpg",
        inStock: true,
        pages: 1472,
        publisher: "McDougal Littell",
        language: "English",
        dimensions: "8.6 x 1.8 x 10.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/McDougal_Littell_Literature:_American_Literature",
        downloadUrl: ""
    },
    {
        id: 31,
        title: "Metamorphosis",
        author: "Franz Kafka",
        genre: "Fiction, Classic, Philosophical",
        publishYear: 1915,
        isbn: "978-0486290300",
        description: "Gregor Samsa awakens transformed into a giant insect, exploring themes of alienation as his family reacts with disgust.",
        coverImage: "images/metamorph.jpg",
        inStock: true,
        pages: 96,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.2 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Metamorphosis",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1T2bJvMARk4E-_2lhxVl0PCvfyfyE_q6y"
    },
    {
        id: 32,
        title: "Narrative of the Life of Frederick Douglass",
        author: "Frederick Douglass",
        genre: "Autobiography, Memoir, Historical",
        publishYear: 1845,
        isbn: "978-0486284996",
        description: "Former slave's powerful memoir recounting his journey from bondage to freedom, exposing the brutal reality of American slavery.",
        coverImage: "images/douglass.jpg",
        inStock: true,
        pages: 128,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.3 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Narrative_of_the_Life_of_Frederick_Douglass,_an_American_Slave",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10m5_JnceCJoYmYXBXRQzcD6WR8LObrXE"
    },
    {
        id: 33,
        title: "Poetry For Dummies",
        author: "The Poetry Center, John Timpane",
        genre: "Reference, Educational, Writing",
        publishYear: 2001,
        isbn: "978-0764552724",
        description: "Accessible guide to reading, writing, and appreciating poetry, covering forms, techniques, and poetic traditions for beginners.",
        coverImage: "images/poetryfor.jfif",
        inStock: true,
        pages: 336,
        publisher: "For Dummies",
        language: "English",
        dimensions: "7.4 x 0.7 x 9.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_For_Dummies",
        downloadUrl: ""
    },
    {
        id: 34,
        title: "Poetry for Students",
        author: "Gale Research Company",
        genre: "Reference, Educational, Academic",
        publishYear: 2002,
        isbn: "978-0787659561",
        description: "Collection of critical analyses of frequently studied poems, providing historical context, themes, and interpretations for students.",
        coverImage: "images/poetryforstudents.webp",
        inStock: true,
        pages: 250,
        publisher: "Gale",
        language: "English",
        dimensions: "6 x 0.8 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_for_Students",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1VmlONygb_gb-UAIADVMRnbAoUzeHBMEl"
    },
    {
        id: 35,
        title: "PS I Still Love You",
        author: "Jenny Han",
        genre: "Young Adult, Romance, Fiction",
        publishYear: 2015,
        isbn: "978-1442426733",
        description: "In this sequel, Lara Jean navigates complex relationships as past and present love interests compete for her affection.",
        coverImage: "images/ps.jpg",
        inStock: true,
        pages: 352,
        publisher: "Simon & Schuster Books for Young Readers",
        language: "English",
        dimensions: "5.5 x 1.2 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Still_Love_You",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1go2I7HtzV34FKshn2X-JHVBrsfYYildI"
    },
    {
        id: 36,
        title: "P.S. I Love You",
        author: "Cecelia Ahern",
        genre: "Romance, Fiction, Drama",
        publishYear: 2004,
        isbn: "978-0786890750",
        description: "Holly receives letters from her deceased husband guiding her through grief toward a new beginning.",
        coverImage: "images/psilove.jpg",
        inStock: true,
        pages: 512,
        publisher: "Hyperion",
        language: "English",
        dimensions: "4.2 x 1.2 x 6.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Love_You_(novel)",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1JUjVYUSHtA1lqAbdEyP4Y2uaLC8sToF_"
    },
    {
        id: 37,
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1719,
        isbn: "978-0141439822",
        description: "Shipwrecked sailor survives alone on a deserted island for years, creating civilization from nothing while confronting nature and solitude.",
        coverImage: "images/robinson.jpg",
        inStock: true,
        pages: 288,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Robinson_Crusoe",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uHBBqfdgtSduv0_SWl9j3r5x8OkLeHdN"
    },
    {
        id: 38,
        title: "Secret Letters of the Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        publishYear: 2011,
        isbn: "978-0062119698",
        description: "Jonathan embarks on an international adventure discovering ancient wisdom from letters left by Julian Mantle, unlocking secrets to transformation.",
        coverImage: "images/secretletters.jpg",
        inStock: true,
        pages: 240,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Letters_of_the_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1PufOWSk7v6n4y64BM4pPVSmAmlyJfner"
    },
    {
        id: 39,
        title: "The Best American Short Stories of the Century",
        author: "John Updike (Editor)",
        genre: "Short Stories, Anthology, Fiction",
        publishYear: 2000,
        isbn: "978-0395843673",
        description: "Collection of outstanding American short fiction from the twentieth century, selected by John Updike, showcasing diverse voices and styles.",
        coverImage: "images/americanshort.jpg",
        inStock: true,
        pages: 864,
        publisher: "Houghton Mifflin",
        language: "English",
        dimensions: "6 x 1.5 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Best_American_Short_Stories_of_the_Century",
        downloadUrl: ""
    },
    {
        id: 40,
        title: "The Call of the Wild",
        author: "Jack London",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1903,
        isbn: "978-0141321059",
        description: "Domesticated dog Buck is stolen and sold into harsh service during the Klondike Gold Rush, awakening his primitive instincts.",
        coverImage: "images/callofthe.jpg",
        inStock: true,
        pages: 160,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 0.4 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Call_of_the_Wild",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1AoSRoWGGVrggcHQWS20laYJqIH4J__kg"
    },
    {
        id: 41,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery, Thriller, Fiction",
        publishYear: 2005,
        isbn: "978-0307454546",
        description: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark past and a decades-old disappearance.",
        coverImage: "images/dragontattoo.jpg",
        inStock: true,
        pages: 672,
        publisher: "Vintage Crime/Black Lizard",
        language: "English",
        dimensions: "5.2 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Girl_with_the_Dragon_Tattoo",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1AOPDcI31OrdDUWeJCWzCXIb-9edfYCC0"
    },
    {
        id: 42,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Historical Fiction, Drama, Cultural",
        publishYear: 2003,
        isbn: "978-1594631931",
        description: "Affluent Afghan boy betrays his loyal friend, then seeks redemption across continents and decades amid Afghanistan's turbulent history.",
        coverImage: "images/kiterunner.jpg",
        inStock: true,
        pages: 371,
        publisher: "Riverhead Books",
        language: "English",
        dimensions: "5.2 x 1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Kite_Runner",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1eJodsd5jsPlB3ExSdEDVhUX4IcZhPJeE"
    },
    {
        id: 43,
        title: "The Last of the Mohicans",
        author: "James Fenimore Cooper",
        genre: "Historical Fiction, Adventure, Classic",
        publishYear: 1826,
        isbn: "978-0553213294",
        description: "Set during French and Indian War, frontiersman Hawkeye and his Mohican companions protect British sisters through dangerous wilderness.",
        coverImage: "images/mohicans.jpg",
        inStock: true,
        pages: 432,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.9 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Last_of_the_Mohicans",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GFqdeOMV0PLr5K65ChK_wck_6uDXzIX_"
    },
    {
        id: 44,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        publishYear: 1997,
        isbn: "978-0062515674",
        description: "Successful lawyer Julian Mantle transforms after a heart attack, sharing wisdom learned from Himalayan monks about fulfillment and purpose.",
        coverImage: "images/monk.png",
        inStock: true,
        pages: 208,
        publisher: "HarperOne",
        language: "English",
        dimensions: "5.3 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1PufOWSk7v6n4y64BM4pPVSmAmlyJfner"
    },
    {
        id: 45,
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        genre: "Fiction, Classic, Adventure",
        publishYear: 1952,
        isbn: "978-0684801223",
        description: "Aging Cuban fisherman Santiago battles a giant marlin and sharks in the Gulf Stream, testing his strength, skill, and resolve.",
        coverImage: "images/oldman.jfif",
        inStock: true,
        pages: 127,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 0.4 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1jIpOfRIwl1azlmBPtW4enWllX2vO6_Aj"
    },
    {
        id: 46,
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        genre: "Young Adult, Fiction, Coming-of-Age",
        publishYear: 1999,
        isbn: "978-1451696196",
        description: "Freshman Charlie navigates high school through letters detailing friendships, first love, family trauma, and mental health struggles.",
        coverImage: "images/wallflower.jpg",
        inStock: true,
        pages: 224,
        publisher: "MTV Books",
        language: "English",
        dimensions: "5 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Perks_of_Being_a_Wallflower",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1TvlnbMKPjTJk0rA0lm0_HbAvOxHL_Ujc"
    },
    {
        id: 47,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genre: "Fiction, Classic, Horror",
        publishYear: 1890,
        isbn: "978-0141439570",
        description: "Handsome Dorian Gray remains eternally young while his portrait ages, revealing his moral corruption and hedonistic lifestyle.",
        coverImage: "images/dorian.jpg",
        inStock: true,
        pages: 254,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1HoV5kg_mP2lkHB2T-49yBdH78eBlZFJX"
    },
    {
        id: 48,
        title: "The Raven",
        author: "Edgar Allan Poe",
        genre: "Poetry, Gothic, Classic",
        publishYear: 1845,
        isbn: "978-1512090567",
        description: "Narrative poem depicting a man's descent into madness as a talking raven intensifies his grief over lost love.",
        coverImage: "images/theraven.jpg",
        inStock: true,
        pages: 28,
        publisher: "CreateSpace Independent Publishing",
        language: "English",
        dimensions: "6 x 0.1 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Raven",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KgcRdNSuuxv5y_iNXGx-3QOWyrVwKJzi"
    },
    {
        id: 49,
        title: "The Red Badge of Courage",
        author: "Stephen Crane",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1895,
        isbn: "978-0486264653",
        description: "Young Union soldier Henry Fleming confronts his fears during Civil War battle, exploring themes of courage, maturity, and heroism.",
        coverImage: "images/redbadge.jpg",
        inStock: true,
        pages: 112,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.3 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Red_Badge_of_Courage",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1lXi6x1EHrOIcSHxP3u6gvUvz2e4f1eM1"
    },
    {
        id: 50,
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1850,
        isbn: "978-0486280486",
        description: "In Puritan New England, Hester Prynne bears public shame for adultery while her partner remains secret, exploring sin and redemption.",
        coverImage: "images/scarlet.jpg",
        inStock: true,
        pages: 192,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.5 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Scarlet_Letter",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1H8cVem5JVepEtDKUKbpg33pKs74u461D"
    },
    {
        id: 51,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Children's, Classic, Fiction",
        publishYear: 1911,
        isbn: "978-0064401883",
        description: "Orphaned Mary discovers an abandoned garden on her uncle's estate, bringing healing and transformation to herself and others.",
        coverImage: "images/secretgarden.jpg",
        inStock: true,
        pages: 288,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.6 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Garden",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1LQG8SYWyJ98W1O644fy3KApGVvgl7fWS"
    },
    {
        id: 52,
        title: "The Story of the Other Wise Man",
        author: "Henry van Dyke",
        genre: "Religious, Fiction, Short Story",
        publishYear: 1895,
        isbn: "978-0345369253",
        description: "Fourth Magi Artaban spends his life seeking the Messiah, unknowingly fulfilling his mission through acts of compassion along the way.",
        coverImage: "images/wiseman.jpg",
        inStock: true,
        pages: 96,
        publisher: "Ballantine Books",
        language: "English",
        dimensions: "4.2 x 0.3 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Story_of_the_Other_Wise_Man",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1BS0pBCFnr-MfYvSq_gJXxc6luvTlSFeh"
    },
    {
        id: 53,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic, Fiction, Drama",
        publishYear: 1925,
        isbn: "978-0743273565",
        description: "Mysterious millionaire Jay Gatsby pursues lost love Daisy Buchanan amid the decadence of 1920s Long Island high society.",
        coverImage: "images/gatsby.jpg",
        inStock: true,
        pages: 180,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1pVfXG4r0AvIrLRQsYWIRJkLKyx6WhCkO"
    },
    {
        id: 54,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic, Fiction, Drama",
        publishYear: 1960,
        isbn: "978-0446310789",
        description: "Young Scout observes racial injustice when her lawyer father defends a Black man unjustly accused in 1930s Alabama.",
        coverImage: "images/mockingbird.jpg",
        inStock: true,
        pages: 336,
        publisher: "Grand Central Publishing",
        language: "English",
        dimensions: "4.2 x 1 x 6.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1w1hyKdX3qr_KlrzLy8xHvSAUNmHaKXmZ"
    },
    {
        id: 57,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 1996,
        isbn: "978-0553573404",
        description: "Noble families battle for control of the Iron Throne while an ancient threat rises beyond the Wall.",
        coverImage: "images/game1.jpg",
        inStock: true,
        pages: 694,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Game_of_Thrones",
        downloadUrl: "https://drive.google.com/uc?export=download&id=130hCi-W96boFn7i1QS4rLSSCMhsyyNQh"
    },
    {
        id: 58,
        title: "A Clash of Kings",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 1998,
        isbn: "978-0553579901",
        description: "The Seven Kingdoms erupt into war as rival kings vie for power while dark forces stir beyond the Wall.",
        coverImage: "images/game2.jpg",
        inStock: true,
        pages: 768,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.7 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Clash_of_Kings",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10Mlxnb5nvVJHUKJUcY-NcPg2r71juCOK"
    },
    {
        id: 59,
        title: "A Storm of Swords",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2000,
        isbn: "978-0553573428",
        description: "Betrayals, alliances, and brutal conflicts shape the battle for Westeros as winter draws near.",
        coverImage: "images/game3.jpeg",
        inStock: true,
        pages: 973,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 2 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Storm_of_Swords",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10nE2Hs8A9NQgsvAJF3eMej9bKI3-wP51"
    },
    {
        id: 60,
        title: "A Feast for Crows",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2005,
        isbn: "978-0553582024",
        description: "With the war’s chaos settling, political schemes and dangerous ambitions rise across the Seven Kingdoms.",
        coverImage: "images/game4.jpg",
        inStock: true,
        pages: 753,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Feast_for_Crows",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vz6jWyNBs61kt_mtFssn3UDg3zvGWo-L"
    },
    {
        id: 61,
        title: "A Dance With Dragons",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2011,
        isbn: "978-0553582017",
        description: "Dragons rise, rulers fall, and dangers grow in Westeros and beyond as war and magic collide.",
        coverImage: "images/game5.jpg",
        inStock: true,
        pages: 1040,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 2 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Dance_with_Dragons",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18ovACtss9HIIF-4E2-58o5BKZ8vnPXvb"
    },
    {
        id: 62,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2007,
        isbn: "978-0810993136",
        description: "Greg Heffley navigates middle school with hilarious mishaps and a unique outlook on growing up.",
        coverImage: "images/wimpy1.jpg",
        inStock: true,
        pages: 217,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid",
        downloadUrl: ""
    },
    {
        id: 63,
        title: "Diary of a Wimpy Kid: Rodrick Rules",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2008,
        isbn: "978-0810994737",
        description: "Greg faces new challenges, including dealing with his embarrassing and mischievous older brother, Rodrick.",
        coverImage: "images/wimpy2.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Rodrick_Rules",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1O8SFAIKiCuKjZen6fOhxkz8IwWTdI4M7"
    },
    {
        id: 64,
        title: "Diary of a Wimpy Kid: The Last Straw",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2009,
        isbn: "978-0810970687",
        description: "Greg’s dad wants him to toughen up, but Greg just wants to survive middle school his way.",
        coverImage: "images/wimpy3.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Last_Straw",
        downloadUrl: ""
    },
    {
        id: 65,
        title: "Diary of a Wimpy Kid: Dog Days",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2009,
        isbn: "978-0810983915",
        description: "Greg plans a relaxing summer, but his family’s ideas—including a disastrous vacation—ruin everything.",
        coverImage: "images/wimpy4.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Dog_Days",
        downloadUrl: ""
    },
    {
        id: 66,
        title: "Diary of a Wimpy Kid: The Ugly Truth",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2010,
        isbn: "978-0810984912",
        description: "Greg faces awkward changes, friendship drama, and middle school chaos in his journey to grow up.",
        coverImage: "images/wimpy5.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Ugly_Truth",
        downloadUrl: ""
    },
    {
        id: 67,
        title: "Diary of a Wimpy Kid: Cabin Fever",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2011,
        isbn: "978-1419702235",
        description: "Greg gets snowed in with his family while also being blamed for a vandalism incident at school.",
        coverImage: "images/wimpy6.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Cabin_Fever",
        downloadUrl: ""
    },
    {
        id: 68,
        title: "Diary of a Wimpy Kid: The Third Wheel",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2012,
        isbn: "978-1419705847",
        description: "Greg struggles to find a date for the school dance while dealing with his unlucky best friend, Rowley.",
        coverImage: "images/wimpy7.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Third_Wheel",
        downloadUrl: ""
    },
    {
        id: 69,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2008,
        isbn: "978-0439023481",
        description: "Katniss Everdeen volunteers to take her sister's place in a deadly televised battle for survival.",
        coverImage: "images/hunger1.jpg",
        inStock: true,
        pages: 374,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hunger_Games",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1W9ggSGp15EJnAGJn5r_vZeOyzRcKgJl4"
    },
    {
        id: 70,
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2009,
        isbn: "978-0439023498",
        description: "Katniss and Peeta’s victory sparks rebellion, forcing them into a new, even deadlier Hunger Games.",
        coverImage: "images/hunger2.jpg",
        inStock: true,
        pages: 391,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Catching_Fire",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18Gply_0SJv1D6marYrrPsd86ZEMJH6_R"
    },
    {
        id: 71,
        title: "Mockingjay",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2010,
        isbn: "978-0439023511",
        description: "Katniss becomes the symbol of rebellion as war erupts between the Capitol and the districts.",
        coverImage: "images/hunger3.jpg",
        inStock: true,
        pages: 390,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Mockingjay",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1iW5etjFyCS0zjnfPHpufSwz34v697Nsp"
    },
    {
        id: 72,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1937,
        isbn: "978-0547928227",
        description: "Bilbo Baggins embarks on an epic journey with dwarves to reclaim their homeland from a dragon.",
        coverImage: "images/lord1.jpg",
        inStock: true,
        pages: 310,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 0.9 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hobbit",
        downloadUrl: ""
    },
    {
        id: 73,
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1954,
        isbn: "978-0547928210",
        description: "Frodo Baggins sets out to destroy the One Ring and save Middle-earth from darkness.",
        coverImage: "images/lord2.jpg",
        inStock: true,
        pages: 423,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring",
        downloadUrl: ""
    },
    {
        id: 74,
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1954,
        isbn: "978-0547928203",
        description: "The Fellowship is broken as war looms, while Frodo and Sam journey to Mordor alone.",
        coverImage: "images/lord3.jpg",
        inStock: true,
        pages: 352,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Two_Towers",
        downloadUrl: ""
    },
    {
        id: 75,
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1955,
        isbn: "978-0547928197",
        description: "The final battle for Middle-earth begins as Frodo nears Mount Doom to destroy the One Ring.",
        coverImage: "images/lord4.jpg",
        inStock: true,
        pages: 416,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Return_of_the_King",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1E49wp03UX8f32mjSL7wn2DnOuUGl26bH"
    },
    {
        id: 76,
        title: "100 Ways to Motivate Yourself",
        author: "Steve Chandler",
        genre: "Self-Help, Motivation",
        publishYear: 1996,
        isbn: "978-1564147752",
        description: "A collection of strategies to inspire action and boost motivation in daily life.",
        coverImage: "images/100.jpg",
        inStock: true,
        pages: 224,
        publisher: "Career Press",
        language: "English",
        dimensions: "5.5 x 0.5 x 8.5 inches",
        detailsUrl: "https://www.amazon.com/100-Ways-Motivate-Yourself-Forever/dp/1564147754",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1qkgZG8MpC5YAqQsPfFrTQ8sK8Cpmp8XY"
    },
    {
        id: 77,
        title: "365 Steps to Self Confidence",
        author: "David Lawrence Preston",
        genre: "Self-Help, Personal Development",
        publishYear: 2003,
        isbn: "978-8179924462",
        description: "Daily exercises and insights to build confidence and improve self-esteem.",
        coverImage: "images/365.jpg",
        inStock: true,
        pages: 224,
        publisher: "Viva Books Private Limited",
        language: "English",
        dimensions: "5.5 x 0.6 x 8.4 inches",
        detailsUrl: "https://www.amazon.com/365-Steps-Self-confidence-Programme-Transformation/dp/1845282485",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bQcEsOQj7fMrZ2RqwnLkmh4V0JQlNfWH"
    },
    {
        id: 78,
        title: "A Profound Mind",
        author: "Dalai Lama",
        genre: "Philosophy, Self-Help",
        publishYear: 2012,
        isbn: "978-0385514675",
        description: "Insights into cultivating wisdom and mindfulness in everyday life.",
        coverImage: "images/profound.jpg",
        inStock: true,
        pages: 160,
        publisher: "Harmony",
        language: "English",
        dimensions: "5.2 x 0.6 x 7.9 inches",
        detailsUrl: "https://www.amazon.com/Profound-Mind-Cultivating-Wisdom-Everyday/dp/0385514689",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uIjfD7YxJYb88CSYl_XAxqQvKimAsABO"
    },
    {
        id: 79,
        title: "Anxiety & Depression Workbook",
        author: "Aaron T. Beck",
        genre: "Psychology, Self-Help",
        publishYear: 1999,
        isbn: "978-1572244139",
        description: "Exercises and strategies to manage anxiety and depression effectively.",
        coverImage: "images/anxiety.jpg",
        inStock: true,
        pages: 240,
        publisher: "New Harbinger Publications",
        language: "English",
        dimensions: "8.5 x 0.6 x 11 inches",
        detailsUrl: "https://www.amazon.com/Anxiety-Depression-Workbook-Effective-Techniques/dp/1684036143",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1EcVSkmEHROi4aBP_VLxnTW-QT1RmcNaG"
    },
    {
        id: 80,
        title: "Chicken Soup for the Teenage Soul IV",
        author: "Jack Canfield, Mark Victor Hansen",
        genre: "Self-Help, Inspirational",
        publishYear: 2003,
        isbn: "978-0757301071",
        description: "Stories of love, learning, and personal growth for teens.",
        coverImage: "images/chickensoup.jpg",
        inStock: true,
        pages: 350,
        publisher: "Health Communications Inc.",
        language: "English",
        dimensions: "5.5 x 1 x 8.5 inches",
        detailsUrl: "https://www.amazon.com/Chicken-Soup-Teenage-Soul-IV/dp/1623610230",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1pZE32pkfswPlBs6lAgZH3Jx0AC9Z6SS8"
    },
    {
        id: 81,
        title: "Confidence: How to Sell Yourself",
        author: "David Craig",
        genre: "Self-Help, Business",
        publishYear: 1998,
        isbn: "978-0749428583",
        description: "Techniques for effective self-presentation and communication skills.",
        coverImage: "images/sell.jfif",
        inStock: true,
        pages: 224,
        publisher: "Kogan Page Limited",
        language: "English",
        dimensions: "6.1 x 0.5 x 9.2 inches",
        detailsUrl: "https://www.amazon.com/How-Sell-Yourself-Joe-Girard/dp/0446385018",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15_C_6CN5lT-PN64CznVDGX6czmpFIF5u"
    },
    {
        id: 82,
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        genre: "Psychology, Self-Help",
        publishYear: 1995,
        isbn: "978-0553383713",
        description: "Explores the impact of emotional intelligence on success and relationships.",
        coverImage: "images/eq.jpg",
        inStock: true,
        pages: 352,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Emotional_Intelligence",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10roXinr4FXHa_UTAe1cBVJKcwUf6hUm5"
    },
    {
        id: 83,
        title: "From Failure to Success",
        author: "Martin Meadows",
        genre: "Self-Help, Motivation",
        publishYear: 2018,
        isbn: "978-1983244726",
        description: "Guidance on building resilience and turning failures into stepping stones.",
        coverImage: "images/fts.jpg",
        inStock: true,
        pages: 168,
        publisher: "Independently Published",
        language: "English",
        dimensions: "5 x 0.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Failure-Success-Exercises-Resilience-Successes/dp/1976283310",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1OsvIq5v_MOqmNhwQLfUrA-auRKmNMuwC"
    },
    {
        id: 84,
        title: "How Successful People Think: Change Your Thinking, Change Your Life",
        author: "John C. Maxwell",
        genre: "Self-Help, Business, Psychology",
        publishYear: 2009,
        isbn: "978-1599951683",
        description: "Explores mental habits and strategies that drive success in personal and professional life.",
        coverImage: "images/peoplethink.jpg",
        inStock: true,
        pages: 160,
        publisher: "Center Street",
        language: "English",
        dimensions: "5.2 x 7.2 inches",
        detailsUrl: "https://www.amazon.com/How-Successful-People-Think-Your/dp/1599951681",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bNS36tnfU7gRjcohTX1QtZHODPF58jRb"
    },
    {
        id: 85,
        title: "How to Develop Self-confidence and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        publishYear: 1956,
        isbn: "978-0671746070",
        description: "A guide to building self-confidence and influencing others effectively in various aspects of life.",
        coverImage: "images/develop.jpg",
        inStock: true,
        pages: 240,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Develop_Self-Confidence_and_Influence_People_by_Public_Speaking",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1gbMA3mwZyOD7zexlVePPh9To8QCJ_f55"
    },
    {
        id: 86,
        title: "How to Have a Beautiful Mind",
        author: "Edward de Bono",
        genre: "Self-Help, Psychology, Creativity",
        publishYear: 2004,
        isbn: "978-0091894603",
        description: "Offers techniques to cultivate creative thinking and develop a balanced, insightful mind.",
        coverImage: "images/beautifulmind.jpg",
        inStock: true,
        pages: 240,
        publisher: "Vermilion",
        language: "English",
        dimensions: "5.1 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/How-Have-Beautiful-Mind-Edward/dp/0091894603",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1v5lms15KEoN_t_Fnl0gyya0ZvQMytI9p"
    },
    {
        id: 87,
        title: "How to Read a Person Like a Book",
        author: "Gerard I. Nierenberg & Henry H. Calero",
        genre: "Psychology, Communication, Self-Help",
        publishYear: 1971,
        isbn: "978-0671735579",
        description: "A guide to interpreting body language for improved interpersonal communication.",
        coverImage: "images/book.jpg",
        inStock: true,
        pages: 192,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/How-Read-Person-Like-Book/dp/0671735578",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RzmPkHYtoHgcoR13V-YKhHTpXpuB-UUp"
    },
    {
        id: 88,
        title: "How to Stop Worrying & Start Living",
        author: "Dale Carnegie",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1948,
        isbn: "978-0671035978",
        description: "Practical advice for reducing worry and leading a more fulfilling, stress-free life.",
        coverImage: "images/worrying.jpg",
        inStock: true,
        pages: 288,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Stop_Worrying_and_Start_Living",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1sLCHTo_M1FFFo8boD_2yCf-hzcMHrgFZ"
    },
    {
        id: 90,
        title: "How to Use Your Mind by Harry D. Kitson",
        author: "Harry D. Kitson",
        genre: "Self-Help, Personal Development, Motivation",
        publishYear: 1920,
        isbn: "978-1234567890",
        description: "Focuses on harnessing mental power to achieve personal growth and success.",
        coverImage: "images/useyourmind.webp",
        inStock: true,
        pages: 200,
        publisher: "Mind Publications",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://www.amazon.com/How-Use-Your-Mind-Administration/dp/1977531369",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1TthIsrular6TFWyq-VTToI3HIQwbW8AU"
    },
    {
        id: 91,
        title: "How to Win Every Argument",
        author: "Madsen Pirie",
        genre: "Self-Help, Communication, Debate",
        publishYear: 2007,
        isbn: "978-0987654321",
        description: "Provides techniques and logical approaches to counter any argument effectively.",
        coverImage: "images/argument.jpg",
        inStock: true,
        pages: 220,
        publisher: "Debate Press",
        language: "English",
        dimensions: "5.4 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/How-Win-Every-Argument-Abuse/dp/0826498949",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1I8FmPMkXrEmQ3TX1xzS0D5W_mcq_ij82"
    },
    {
        id: 92,
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        publishYear: 1936,
        isbn: "978-0671027032",
        description: "Timeless advice on building relationships and mastering interpersonal communication.",
        coverImage: "images/win.jpg",
        inStock: true,
        pages: 288,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1grmOLokW3ZNesLn0kYzi7L0CPM1HD1KO"
    },
    {
        id: 93,
        title: "Hypnosis: A Power Program for Self-Improvement, Changing Your Life and Helping Others",
        author: "Unknown",
        genre: "Self-Help, Psychology, Alternative",
        publishYear: 2020,
        isbn: "978-0981234567",
        description: "Explores hypnosis as a tool for personal transformation and self-improvement.",
        coverImage: "images/hypnosis.webp",
        inStock: true,
        pages: 350,
        publisher: "MindPower Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.amazon.com/Hypnosis-Program-Self-Improvement-Changing-Self-Improvement/dp/156718359X",
        downloadUrl: ""
    },
    {
        id: 94,
        title: "Life is What You Make It: A Story of Love, Hope, and How Determination Can Overcome Even Destiny",
        author: "Preeti Shenoy",
        genre: "Memoir, Inspirational, Romance",
        publishYear: 2001,
        isbn: "978-8172234954",
        description: "An inspiring story emphasizing determination and self-belief in shaping one’s destiny.",
        coverImage: "images/life.jpg",
        inStock: true,
        pages: 300,
        publisher: "Srishti Publishers",
        language: "English",
        dimensions: "5.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_Is_What_You_Make_It",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1MCTLUVVWCxain6Sq-S1k1UjUqUrlwkdx"
    },
    {
        id: 95,
        title: "Man’s Search for Meaning",
        author: "Viktor E. Frankl",
        genre: "Philosophy, Psychology, Memoir",
        publishYear: 1946,
        isbn: "978-0807014295",
        description: "A Holocaust survivor’s reflections on finding purpose and meaning amid suffering.",
        coverImage: "images/mans.jpg",
        inStock: true,
        pages: 165,
        publisher: "Beacon Press",
        language: "English",
        dimensions: "5.5 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
        downloadUrl: "https://drive.google.com/uc?export=download&id=11nN3YKk1PJAhODhwEMYPkfb4ynPASfj7"
    },
    {
        id: 96,
        title: "Meditation for Dummies",
        author: "Stephan Bodian",
        genre: "Self-Help, Health, Spirituality",
        publishYear: 2010,
        isbn: "978-1118764110",
        description: "A beginner's guide to meditation techniques for improved mental and physical well-being.",
        coverImage: "images/meditation.jpg",
        inStock: true,
        pages: 320,
        publisher: "For Dummies Books",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Meditation-Dummies-Stephan-Bodian/dp/1119251168",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KwCu1nD8G646ICVgyOK2A8DO98TVJJyy"
    },
    {
        id: 97,
        title: "Power of The Subconscious Mind",
        author: "Joseph Murphy",
        genre: "Self-Help, Psychology, Spirituality",
        publishYear: 1963,
        isbn: "978-8192922654",
        description: "Explores how harnessing the subconscious mind can unlock hidden potential and transform life.",
        coverImage: "images/sub.webp",
        inStock: true,
        pages: 320,
        publisher: "Hay House",
        language: "English",
        dimensions: "5.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Power_of_Your_Subconscious_Mind",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1liCqvaVeIOeWrdrJAXroQHJMcNIIAyfx"
    },
    {
        id: 98,
        title: "Power Up Your Mind: Learn Faster",
        author: "Tony Buzan",
        genre: "Self-Help, Education, Psychology",
        publishYear: 2007,
        isbn: "978-0749446472",
        description: "Provides techniques to enhance learning speed and improve overall mental performance.",
        coverImage: "images/powerup.jpg",
        inStock: true,
        pages: 280,
        publisher: "BBC Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Your-Mind-Faster-Smarter/dp/185788275X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KN89QvYHsLJBrqwf7VYWg8YTr7XP_j8w"
    },
    {
        id: 99,
        title: "See You at the Top (Formerly Entitled Biscuits, Fleas, and Pump Handles)",
        author: "Zig Ziglar",
        genre: "Self-Help, Motivation, Personal Development",
        publishYear: 1975,
        isbn: "978-0671659915",
        description: "A motivational guide encouraging personal growth and the pursuit of success.",
        coverImage: "images/top.jpg",
        inStock: true,
        pages: 224,
        publisher: "HCI Books",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/See_You_at_the_Top",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1YETL9-bUOO-WkdcgIXP-zRThMtHZnfzv"
    },
    {
        id: 100,
        title: "Self-Improvement: The Top 101 Experts That Help Us Improve Our Lives",
        author: "Various Authors",
        genre: "Self-Help, Personal Development, Biography",
        publishYear: 2000,
        isbn: "978-0987654320",
        description: "Profiles of top experts offering insights and advice for personal growth.",
        coverImage: "images/101.jpg",
        inStock: true,
        pages: 350,
        publisher: "Inspiration Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.amazon.com/Self-Improvement-Experts-Improve-Their-Lives/dp/097456723X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1Uki0QvlmxknprkG60r78jJKeiow__-s5"
    },
    {
        id: 101,
        title: "Start Where You Are: A Guide to Compassionate Living",
        author: "Pema Chödrön",
        genre: "Self-Help, Spirituality, Psychology",
        publishYear: 2002,
        isbn: "978-1590306779",
        description: "Offers guidance on mindfulness and compassion to overcome life’s challenges.",
        coverImage: "images/start.jpg",
        inStock: true,
        pages: 176,
        publisher: "Sounds True",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Start-Where-You-Are-Compassionate/dp/1590301420",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1SRCRqVirr7YmW2cILqHbtlG0_I-VB8KX"
    },
    {
        id: 102,
        title: "Staying Strong: 365 Days a Year",
        author: "John Doe",
        genre: "Self-Help, Motivation, Daily Inspiration",
        publishYear: 2015,
        isbn: "978-1231231231",
        description: "A daily guide offering inspiration and strength for overcoming life’s obstacles.",
        coverImage: "images/staying.jpg",
        inStock: true,
        pages: 365,
        publisher: "Daily Wisdom Press",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Staying-Strong-365-Days-Year/dp/1250051444",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RXK3R2mZawH6c7R0ZDDFRvh02OOMn65Y"
    },
    {
        id: 103,
        title: "The 7 Habits of Highly Effective Teens",
        author: "Sean Covey",
        genre: "Self-Help, Young Adult, Personal Development",
        publishYear: 1998,
        isbn: "978-1416549496",
        description: "A practical guide for teens to develop habits for success and personal growth.",
        coverImage: "images/7.jpg",
        inStock: true,
        pages: 240,
        publisher: "Touchstone Books",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/Habits-Highly-Effective-Teens/dp/1476764662",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1OIY-zcajcNtvkLET8QKk6IgqKwn1-Gju"
    },
    {
        id: 104,
        title: "The Anxiety Workbook: A 7-Week Plan to Overcome Anxiety, Stop Worrying, and End Panic",
        author: "Arlene Schuster",
        genre: "Self-Help, Psychology, Health",
        publishYear: 2015,
        isbn: "978-1626251768",
        description: "A step-by-step workbook offering techniques to manage anxiety and panic symptoms.",
        coverImage: "images/workbook.jpg",
        inStock: true,
        pages: 320,
        publisher: "New Harbinger Publications",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Anxiety-Workbook-7-Week-Overcome-Worrying/dp/1623159733",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1FOEC31PDr-uV8eB_F014qRl3rwovRL85"
    },
    {
        id: 105,
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        genre: "Self-Help, Psychology, Business",
        publishYear: 2013,
        isbn: "978-0062219695",
        description: "Identifies common cognitive biases and offers strategies to improve decision-making.",
        coverImage: "images/thinking.jpg",
        inStock: true,
        pages: 384,
        publisher: "Harper",
        language: "English",
        dimensions: "5.6 x 8 inches",
        detailsUrl: "https://www.amazon.com/Art-Thinking-Clearly-Better-Decisions/dp/0062219693",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IytT5CcfDJJybQ_Vu6oHUzkvR5O9q5cU"
    },
    {
        id: 106,
        title: "The Book of Joy: Lasting Happiness in a Changing World",
        author: "Dalai Lama, Desmond Tutu, Douglas Abrams",
        genre: "Self-Help, Spirituality, Philosophy",
        publishYear: 2016,
        isbn: "978-0399185045",
        description: "Conversations on finding joy and meaning despite life’s inevitable challenges.",
        coverImage: "images/joy.jpg",
        inStock: true,
        pages: 352,
        publisher: "Atria Books",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1YMzRRoeEvUlkleRUWhR5heX8dQxsvr4n"
    },
    {
        id: 107,
        title: "The Definitive Book of Body Language",
        author: "Allan and Barbara Pease",
        genre: "Self-Help, Communication, Psychology",
        publishYear: 2004,
        isbn: "978-0553804728",
        description: "Explains non-verbal cues and body language to improve everyday communication.",
        coverImage: "images/thedefin.jpg",
        inStock: true,
        pages: 368,
        publisher: "William Morrow",
        language: "English",
        dimensions: "5.7 x 8 inches",
        detailsUrl: "https://www.amazon.com/Definitive-Book-Body-Language/dp/0553804723",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bI5jU0ZMDAecILyCFkaNl1MnXOVLq41n"
    },
    {
        id: 108,
        title: "The Gifts of Imperfection: Embrace Who You Are",
        author: "Brené Brown",
        genre: "Self-Help, Psychology, Inspirational",
        publishYear: 2010,
        isbn: "978-1592858491",
        description: "Encourages embracing imperfections to foster self-worth and authentic living.",
        coverImage: "images/imperfect.jpg",
        inStock: true,
        pages: 160,
        publisher: "Hazelden",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vbgXINeSYQasybvJ22ZDkM_qs_Qu0n0C"
    },
    {
        id: 109,
        title: "The Happiness of Pursuit: Finding the Quest That Will Bring Purpose to Your Life",
        author: "Chris Guillebeau",
        genre: "Self-Help, Adventure, Inspirational",
        publishYear: 2013,
        isbn: "978-0062263462",
        description: "Inspires readers to pursue meaningful quests that lead to a fulfilling life.",
        coverImage: "images/happiness.jpg",
        inStock: true,
        pages: 256,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Happiness-Pursuit-Finding-Quest-Purpose/dp/0385348843",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1wHvwGpM2mOgyc9EuGSJAwF1n8qT1KmOg"
    },
    {
        id: 110,
        title: "The Little Big Book of Life: Lessons, Wisdom, Humor, Instruction, Inspiration & Advice",
        author: "Various Authors",
        genre: "Self-Help, Inspirational, Humor",
        publishYear: 2010,
        isbn: "978-0987654310",
        description: "A compendium of life lessons and advice blending humor with practical wisdom.",
        coverImage: "images/bigbook.jpg",
        inStock: true,
        pages: 350,
        publisher: "Big Ideas Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.goodreads.com/book/show/8857375-the-little-big-book-of-life-revised-edition",
        downloadUrl: ""
    },
    {
        id: 111,
        title: "The Magic in Your Mind",
        author: "John Doe",
        genre: "Self-Help, Psychology, Inspirational",
        publishYear: 2005,
        isbn: "978-1111111111",
        description: "Explores techniques to unlock mental potential and foster creative thinking.",
        coverImage: "images/magic.jpg",
        inStock: true,
        pages: 200,
        publisher: "MindWorks Publishing",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.goodreads.com/book/show/2761177-the-magic-in-your-mind",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18OKAKkxsoHJAaSrGVxQPDfn0-Yu5iwo_"
    },
    {
        id: 112,
        title: "The Nature Fix: Why Nature Makes Us Happier, Healthier, and More Creative",
        author: "Florence Williams",
        genre: "Self-Help, Health, Science",
        publishYear: 2017,
        isbn: "978-0393242717",
        description: "Examines how time in nature boosts well-being, creativity, and overall health.",
        coverImage: "images/nature.jpg",
        inStock: true,
        pages: 320,
        publisher: "W. W. Norton",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Nature-Fix-Happier-Healthier-Creative/dp/0393242714",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1SqA1yhGl_hH08b8hHy5ZAZiw6827VYRD"
    },
    {
        id: 113,
        title: "The Power of Creativity: Learning How to Build Lasting Habits, Face Your Fears, and Change Your Life",
        author: "Susan Adams",
        genre: "Self-Help, Creativity, Personal Development",
        publishYear: 2018,
        isbn: "978-0987654300",
        description: "Encourages developing creative habits to overcome fears and inspire transformation.",
        coverImage: "images/powerof.jpg",
        inStock: true,
        pages: 240,
        publisher: "Creative Minds Press",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.goodreads.com/book/show/32615400-the-power-of-creativity",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15Xni3FPJbGZcr6MPZKIgfmZnOXjPB1IY"
    },
    {
        id: 114,
        title: "The Power of Habit by Charles Duhigg",
        author: "Charles Duhigg",
        genre: "Self-Help, Psychology, Business",
        publishYear: 2012,
        isbn: "978-0812981605",
        description: "Explores the science behind habit formation and strategies to change them.",
        coverImage: "images/habit.jpg",
        inStock: true,
        pages: 400,
        publisher: "Random House",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1EIltQyJx-2WCRuV2z6K5qN9pYsjmFAtd"
    },
    {
        id: 115,
        title: "The Power of Now: A Guide to Spiritual Enlightenment",
        author: "Eckhart Tolle",
        genre: "Spirituality, Self-Help, Philosophy",
        publishYear: 1997,
        isbn: "978-1577314806",
        description: "Guides readers to live in the present moment and achieve spiritual clarity.",
        coverImage: "images/powerofnow.webp",
        inStock: true,
        pages: 236,
        publisher: "New World Library",
        language: "English",
        dimensions: "5.0 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1BC-mGLMHh6zso03S9XoxRaOCOZ8LFMZ7"
    },
    {
        id: 116,
        title: "The Power of Self-Esteem",
        author: "Nathaniel Branden",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1994,
        isbn: "978-0743507829",
        description: "Discusses the vital role of self-esteem in achieving success and personal fulfillment.",
        coverImage: "images/selfesteem.jpg",
        inStock: true,
        pages: 320,
        publisher: "Impact Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Self-Esteem-Inspiring-Important-Psychological/dp/1558742131",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1sY1b2DhOeQGzncDVVLK7Hir1tysIRDTy"
    },
    {
        id: 117,
        title: "The Quick and Easy Way to Effective Speaking",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Business",
        publishYear: 1962,
        isbn: "978-0671724006",
        description: "Provides simple techniques for improving public speaking and persuasive communication.",
        coverImage: "images/quick.jpg",
        inStock: true,
        pages: 256,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Quick-Easy-Way-Effective-Speaking/dp/0671724002",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10pTlDudAFBFmQdelni4CRuXPM6zLlQaq"
    },
    {
        id: 118,
        title: "The Road Less Traveled, 25th Anniversary Edition: A New Psychology of Love, Traditional Values, and Spiritual Growth",
        author: "M. Scott Peck",
        genre: "Self-Help, Psychology, Spirituality",
        publishYear: 1978,
        isbn: "978-0684847245",
        description: "Combines psychological insights with spiritual wisdom to encourage personal growth.",
        coverImage: "images/road.jpg",
        inStock: true,
        pages: 320,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.6 x 8 inches",
        detailsUrl: "https://www.amazon.com/Road-Less-Traveled-Timeless-Traditional/dp/0743243153",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1U-J0BYreewHvys8zqDrvK9glXLOPgoLp"
    },
    {
        id: 119,
        title: "Think and Grow Rich by Napoleon Hill",
        author: "Napoleon Hill",
        genre: "Self-Help, Business, Personal Development",
        publishYear: 1937,
        isbn: "978-0449214923",
        description: "A classic guide to achieving wealth and success through the power of positive thinking.",
        coverImage: "images/rich.jpg",
        inStock: true,
        pages: 320,
        publisher: "The Ralston Society",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich?utm_source=chatgpt.com",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RElPziqlqqGE3tScqVnBCS9CxQPkHE3U"
    },
    {
        id: 120,
        title: "Think! Before It's Too Late",
        author: "Unknown",
        genre: "Self-Help, Motivation, Personal Development",
        publishYear: 2000,
        isbn: "978-0987654290",
        description: "A motivational call to action encouraging proactive thinking and life changes.",
        coverImage: "images/think.jpg",
        inStock: true,
        pages: 200,
        publisher: "Inspire Books",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Think-Before-Its-Too-Late/dp/009192409X?utm_source=chatgpt.com",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1buQhAsSY6tGWVnKIHig7wyYHrumBxgjD"
    },
    {
        id: 121,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "Psychology, Business, Non-Fiction",
        publishYear: 2011,
        isbn: "978-0374533557",
        description: "Delves into the dual systems of thought and their impact on decision-making.",
        coverImage: "images/thinkingfas.jpg",
        inStock: true,
        pages: 499,
        publisher: "Farrar, Straus and Giroux",
        language: "English",
        dimensions: "5.8 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1wXExoVzc1eJhg3HsXJNx59jJtJyRquJo"
    },
    {
        id: 122,
        title: "When I Say No, I Feel Guilty",
        author: "Cheryl Richardson",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1998,
        isbn: "978-0553374570",
        description: "Addresses overcoming guilt and setting healthy boundaries in personal relationships.",
        coverImage: "images/guilty.jpg",
        inStock: true,
        pages: 192,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/When-Say-No-Feel-Guilty/dp/0553263900",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1epw5M83gqcrddtak9VC8BpHeN36_KRa3"
    },
    {
        id: 123,
        title: "Who Do You Think You Are?",
        author: "Unknown",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 2010,
        isbn: "978-0987654280",
        description: "Encourages self-reflection to understand and redefine one’s identity and purpose.",
        coverImage: "images/who.jpg",
        inStock: true,
        pages: 220,
        publisher: "Mindful Publishing",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/s?k=Who+Do+You+Think+You+Are",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ZciXFCyzl5OCKDb80u7LvJqyO_uy5kJn"
    },
    {
        id: 124,
        title: "Who Moved My Cheese?",
        author: "Spencer Johnson",
        genre: "Self-Help, Business, Motivation",
        publishYear: 1998,
        isbn: "978-0399144465",
        description: "A simple parable revealing profound truths about change in work and life.",
        coverImage: "images/cheese.jpg",
        inStock: true,
        pages: 94,
        publisher: "G. P. Putnam's Sons",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Who_Moved_My_Cheese%3F",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GAmFTlDujgplFw90l2EK6aOX5dp_9aGh"
    },
    {
        id: 125,
        title: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        genre: "Self-Help, Personal Development, Motivation",
        publishYear: 2013,
        isbn: "978-0762447695",
        description: "A blunt, humorous guide to overcoming self-doubt and achieving personal success.",
        coverImage: "images/badass.jpg",
        inStock: true,
        pages: 256,
        publisher: "Running Press",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/You-Are-Badass-Doubting-Greatness/dp/0762447699",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1osXVs73-ixGkzeNzaWPpuf8uZtQ4VDaa"
    },
];


document.addEventListener('DOMContentLoaded', function() {
    
    loadFeaturedBooks();
    setupSearchFunctionality();
    setupTabFunctionality();
    checkForBookDetailView();
    setupCollapsibleSections();
});


function loadFeaturedBooks() {
    const featuredBooksContainer = document.querySelector('.featured-books .book-grid');
    if (!featuredBooksContainer) return;
    
    
    books.forEach(book => {
        featuredBooksContainer.appendChild(createBookCard(book));
    });
}



function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    
    const detailsUrl = book.detailsUrl || `book-details.html?id=${book.id}`;
    const downloadUrl = book.downloadUrl || `downloads/${book.id}.pdf`;
    
    bookCard.innerHTML = `
        <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title}">
            <div class="book-description">
                <p>${book.description}</p>
            </div>
        </div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="genre">Genre: ${book.genre}</p>
            <div class="book-actions">
                <a href="${detailsUrl}" class="view-details" target="_blank">View Details</a>
                <a href="${downloadUrl}" class="download-book" target="_blank"><i class="fas fa-download"></i> Download</a>
            </div>
        </div>
    `;
    
    return bookCard;
}

function setupSearchFunctionality() {
    const searchForm = document.getElementById('search-form');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const categoryFilter = document.getElementById('category-filter').value;
        
        
        const searchResults = books.filter(book => {
            
            const matchesSearch = searchInput === '' || 
                                  book.title.toLowerCase().includes(searchInput) || 
                                  book.author.toLowerCase().includes(searchInput) ||
                                  book.isbn.includes(searchInput);
            
            
            const matchesCategory = categoryFilter === '' || 
                                   book.genre.toLowerCase().includes(categoryFilter.toLowerCase());
            
            return matchesSearch && matchesCategory;
        });
        
        
        displaySearchResults(searchResults);
    });
}


function displaySearchResults(results) {
    const featuredSection = document.querySelector('.featured-books');
    if (!featuredSection) return;
    
    
    const sectionTitle = featuredSection.querySelector('h2');
    sectionTitle.textContent = `Search Results (${results.length} books found)`;
    
    
    const bookGrid = featuredSection.querySelector('.book-grid');
    bookGrid.innerHTML = '';
    
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No books match your search criteria. Please try again.';
        bookGrid.appendChild(noResults);
    } else {
        results.forEach(book => {
            bookGrid.appendChild(createBookCard(book));
        });
    }
    
    
    featuredSection.scrollIntoView({ behavior: 'smooth' });
}


function setupTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}


function checkForBookDetailView() {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer || detailsContainer.style.display === 'none') return;
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    if (bookId) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            displayBookDetails(book);
        }
    }
}


function displayBookDetails(book) {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer) return;
    
    
    detailsContainer.style.display = 'block';
    
    
    document.querySelector('.book-title').textContent = book.title;
    
    
    document.querySelector('.book-author').innerHTML = `By <a href="author.html?name=${encodeURIComponent(book.author)}">${book.author}</a>`;
    
    
    document.querySelector('.book-cover-large img').src = book.coverImage;
    document.querySelector('.book-cover-large img').alt = book.title;
    
    
    document.querySelector('.book-genre').textContent = book.genre;
    document.querySelector('.book-publish-date').textContent = `Published: ${book.publishYear}`;
    document.querySelector('.book-isbn').textContent = `ISBN: ${book.isbn}`;
    
    
    const availabilityElement = document.querySelector('.book-availability .status');
    if (book.inStock) {
        availabilityElement.textContent = 'In Stock';
        availabilityElement.className = 'status available';
    } else {
        availabilityElement.textContent = 'Out of Stock';
        availabilityElement.className = 'status unavailable';
    }
    
    
    document.querySelector('.book-description p').textContent = book.description;
    
    
    const detailsList = document.querySelector('#details-tab ul');
    detailsList.innerHTML = `
        <li><strong>Number of Pages:</strong> ${book.pages}</li>
        <li><strong>Publisher:</strong> ${book.publisher}</li>
        <li><strong>Language:</strong> ${book.language}</li>
        <li><strong>Dimensions:</strong> ${book.dimensions}</li>
    `;
    
    
    loadSimilarBooks(book);
}


function loadSimilarBooks(book) {
    const similarBooksContainer = document.querySelector('.similar-books-grid');
    if (!similarBooksContainer) return;
    
    
    const similarBooks = books.filter(b => b.id !== book.id);
    
    
    similarBooksContainer.innerHTML = '';
    similarBooks.slice(0, 3).forEach(similarBook => {
        similarBooksContainer.appendChild(createBookCard(similarBook));
    });
}

function setupCollapsibleSections() {
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    
    collapsibleSections.forEach(section => {
        const header = section.querySelector('.section-header');
        const button = section.querySelector('.toggle-button');
        const content = section.querySelector('.category-content');
        
        header.addEventListener('click', () => {
            button.classList.toggle('active');
            content.classList.toggle('show');
        });
    });
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = document.querySelector('.scroll-top');
    const sections = document.querySelectorAll('section');
    
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        scrollTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        scrollTop.classList.remove('visible');
    }
    
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}


const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}
