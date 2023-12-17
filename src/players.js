// src/players.js

const arrPlayers = [
    {
        id: 1,
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 34,
        club: 'Paris Saint-Germain',
        trophies: 40,
        nationality: 'Argentine',
        bio: 'Lionel Messi is considered one of the greatest footballers of all time. Born in Rosario, Argentina, Messi began playing football at a young age and joined FC Barcelona at 13. During his time at Barcelona, he won numerous titles and awards, including multiple Ballon d\'Or trophies. In 2021, he joined Paris Saint-Germain, continuing to display his incredible talent.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/630px-Lionel_Messi_20180626.jpg?20180627015805'
    },
    {
        id: 2,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 37,
        club: 'Manchester United',
        trophies: 35,
        nationality: 'Portuguese',
        bio: 'Cristiano Ronaldo is another football legend, known for his incredible athleticism and goal-scoring abilities. Born in Funchal, Madeira, Ronaldo has had a storied career, playing for clubs like Manchester United, Real Madrid, and Juventus. In 2021, he made a return to Manchester United, continuing to inspire fans with his skillful play.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/600px-Cristiano_Ronaldo_2018.jpg?20210714170018'
    },
    {
        id: 3,
        firstName: 'Robert',
        lastName: 'Lewandowski',
        age: 33,
        club: 'Bayern Munich',
        trophies: 25,
        nationality: 'Polish',
        bio: 'Robert Lewandowski is a prolific striker known for his goal-scoring prowess. Born in Warsaw, Poland, Lewandowski has showcased exceptional skills throughout his career. He has played for Borussia Dortmund and is currently a key player for Bayern Munich, where his remarkable performances have earned him numerous accolades.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Robert_Lewandowski_2018_%28cropped%29.jpg/640px-Robert_Lewandowski_2018_%28cropped%29.jpg'
    },
    {
        id: 4,
        firstName: 'Kylian',
        lastName: 'Mbappé',
        age: 23,
        club: 'Paris Saint-Germain',
        trophies: 14,
        nationality: 'French',
        bio: 'Kylian Mbappé is a young and talented forward known for his incredible speed and skill on the field. Born in Paris, France, Mbappé gained prominence at AS Monaco before moving to Paris Saint-Germain. He has showcased remarkable performances for both club and country, playing a crucial role in the French national team.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kylian_Mbapp%C3%A9_Russia_2018.jpg/640px-Kylian_Mbapp%C3%A9_Russia_2018.jpg'
    },
    {
        id: 5,
        firstName: 'Neymar',
        lastName: 'Jr',
        age: 29,
        club: 'Paris Saint-Germain',
        trophies: 20,
        nationality: 'Brazilian',
        bio: 'Neymar Jr. is a highly skilled and creative forward recognized for his dribbling ability and flair on the field. Born in Mogi das Cruzes, Brazil, Neymar rose to fame at Santos FC before joining Barcelona and later transferring to Paris Saint-Germain. He continues to mesmerize football fans worldwide with his exceptional talent.',
        img: 'https://imageio.forbes.com/specials-images/imageserve/627bd53a3a4d3cd7729717cc/0x0.jpg?format=jpg&crop=1069,1070,x707,y83,safe&height=416&width=416&fit=bounds'
    },
    {
        id: 6,
        firstName: 'Mohamed',
        lastName: 'Salah',
        age: 29,
        club: 'Liverpool',
        trophies: 9,
        nationality: 'Egyptian',
        bio: 'Mohamed Salah is a highly skilled winger known for his speed and goal-scoring ability. Born in Nagrig, Egypt, Salah has had a remarkable journey from playing in the Egyptian league to making his mark in European football. He has been a pivotal player for Liverpool, contributing significantly to the team’s success.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg?20180626044654'
    },
    {
        id: 7,
        firstName: 'Sadio',
        lastName: 'Mané',
        age: 29,
        club: 'Liverpool',
        trophies: 9,
        nationality: 'Senegalese',
        bio: 'Sadio Mané is a talented forward known for his speed, technical skills, and scoring ability. Born in Sedhiou, Senegal, Mané rose to prominence in the Austrian Bundesliga before moving to the Premier League. He has been an integral part of Liverpool’s success, contributing significantly to their victories.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sadio_Man%C3%A9_-_Persepolis_F.C._v_Al_Nassr_FC%2C_19_September_2023.jpg/220px-Sadio_Man%C3%A9_-_Persepolis_F.C._v_Al_Nassr_FC%2C_19_September_2023.jpg'
    },
    {
        id: 8,
        firstName: 'Ronaldo',
        lastName: 'Nazário',
        age: 45,
        club: 'Real Madrid',
        trophies: 20,
        nationality: 'Brazilian',
        bio: 'Ronaldo Nazário is a legendary striker known for his speed, dribbling ability, and goal-scoring prowess. Born in Rio de Janeiro, Brazil, Ronaldo began his career at Cruzeiro before moving to Europe. He has played for clubs like Barcelona, Inter Milan, and Real Madrid, winning numerous titles and awards throughout his career.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ronaldo-14-05-2013.jpg/640px-Ronaldo-14-05-2013.jpg'
    },
    {
        id: 9,
        firstName: 'Giorgian',
        lastName: 'De Arrascaeta',
        age: 27,
        club: 'Flamengo',
        trophies: 12,
        nationality: 'Uruguayan',
        bio: 'Giorgian De Arrascaeta is a highly talented midfielder known for his creativity, vision, and passing ability. Born in Nuevo Berlín, Uruguay, De Arrascaeta has played for various clubs, including Defensor Sporting and Cruzeiro. He has been a key player for Flamengo, helping the team achieve remarkable success.',
        img: 'https://pbs.twimg.com/media/FZP7hcjWQAAZs3a.jpg'
    },
    {
        id: 10,
        firstName: 'Kevin',
        lastName: 'De Bruyne',
        age: 30,
        club: 'Manchester City',
        trophies: 12,
        nationality: 'Belgian',
        bio: 'Kevin De Bruyne is a highly talented midfielder known for his vision, passing ability, and versatility on the field. Born in Drongen, Belgium, De Bruyne has showcased exceptional talent throughout his career. He has been a key figure in Manchester City’s midfield, contributing significantly to the team’s success.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/De_Bruyne_%28cropped%29.jpg/640px-De_Bruyne_%28cropped%29.jpg'
    },
];

export default arrPlayers;

