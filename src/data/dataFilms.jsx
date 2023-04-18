import uuid from "react-uuid";

export const films = [{
    id: uuid(),
    title: 'John Wick 4',
    src: '/images/sliders/john_wick_4.jpg',
    alt: 'Affiche John Wick 4',
    isFilm: true,
    infos: "John Wick affronte ses adversaires les plus mortels dans le quatrième volet de la série. Le prix de sa tête ne cessant d'augmenter, Wick mène son combat à l'échelle mondiale en recherchant les acteurs les plus puissants de la pègre, de New York à Paris en passant par Osaka et Berlin.",
    genre: 'Action',
    duree: '2h49'
}, {
    id: uuid(),
    title: 'Ant Man and The Wasp : Quantumania',
    src: '/images/sliders/ant_man.jpg',
    alt: 'Affiche Ant Man Quantumania',
    isFilm: true,
    infos: "Les super-héros et partenaires Scott Lang et Hope Van Dyne, alias Ant-Man et la Guêpe, vont vivre de nouvelles aventures. En compagnie de Hank Pym et Janet Van Dyne, les parents de Hope, le duo va explorer la dimension subatomique, interagir avec d'étranges nouvelles créatures et se lancer dans une odyssée qui les poussera au-delà des limites de ce qu'il pensait être possible.",
    genre: 'Action, Super-Héros',
    duree: '2h05'
}, {
    id: uuid(),
    title: 'Avatar 2 : The Way of Water',
    src: '/images/sliders/avatar.jpg',
    alt: 'Affiche Avatar 2',
    isFilm: true,
    infos: "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
    genre: 'Action',
    duree: '3h12'
}, {
    id: uuid(),
    title: 'Spiderman : into the spiderverse',
    src: '/images/sliders/spider_man.jpg',
    alt: 'Affiche Spiderman',
    isFilm: true,
    infos: "Mordu par une araignée radioactive dans le métro, l'adolescent de Brooklyn, Miles Morales, développe des pouvoirs mystérieux qui le transforment en Spider-Man. Lorsqu'il rencontre Peter Parker, il découvre rapidement qu'il n'est pas le seul avec ces talents spéciaux. Maintenant, il doit utiliser ses nouveaux pouvoirs pour combattre un gangster qui peut ouvrir des portails vers d'autres univers et ramener plusieurs autres versions de Spider-Man dans notre monde.",
    genre: 'Action, Super-Héros',
    duree: '1h56'
}, {
    id: uuid(),
    title: 'Top-Gun : Maverick',
    src: '/images/sliders/top_gun_maverick.jpg',
    alt: 'Affiche Top Gun Maverick',
    isFilm: true,
    infos: "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete 'Maverick' Mitchell est à sa place, repoussant les limites en tant que pilote d'essai courageux et esquivant l'avancement de grade qui le mettrait à la terre. Entraînant de jeunes diplômés pour une mission spéciale, Maverick doit affronter les fantômes de son passé et ses peurs les plus profondes, aboutissant à une mission qui exige le sacrifice ultime de ceux qui choisissent de la piloter.",
    genre: 'Action',
    duree: '2h11'
}
];