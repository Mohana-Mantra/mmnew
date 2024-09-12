import placeHolder from "../../public/assets/placeholder.png";
import actomania from "../../public/assets/kalakshetra/actomania.svg";
import bandBattle from "../../public/assets/kalakshetra/bandbattle.svg";
import buzzWire from "../../public/assets/kalakshetra/buzzwire.svg";
import chickenDinner from "../../public/assets/kalakshetra/chickendinner.svg";
import karokeCatchup from "../../public/assets/kalakshetra/karaokecatchup.svg";
import memeChallenge from "../../public/assets/kalakshetra/memechallange.svg";
import picturePerfect from "../../public/assets/kalakshetra/pictureperfect.svg";
import pushUp from "../../public/assets/kalakshetra/pushupchallenge.svg";
import rampWalk from "../../public/assets/kalakshetra/rampwalk.svg";
import reelContest from "../../public/assets/kalakshetra/reelcontest.svg";
import shortFilm from "../../public/assets/kalakshetra/shortfilm.svg";
import sitCom from "../../public/assets/kalakshetra/sitcom.svg";
import standUp from "../../public/assets/kalakshetra/standup.png";
import turboTracks from "../../public/assets/kalakshetra/turbotracks.svg";
import voiceOfMM from "../../public/assets/kalakshetra/voiceofmm.svg";
import letsNacho from "../../public/assets/kalakshetra/letsnacho.png";
import handDiy from "../../public/assets/kalakshetra/handdiytshirt.png";
import whisper from "../../public/assets/kalakshetra/whisperchallange.png";
import halloffame from "../../public/assets/kalakshetra/halloffame.svg";

export const KALAKSHETRAEVENTS = [
    {
        event: "Let's Nacho",
        venue: "Indoor Stadium",
        timings: "10:30 A.M - 12:30 A.M",
        image: letsNacho.src,
        day: "Day 1",
        rules: [
            "Only group performances are allowed, with a minimum of 3 participants and a maximum of 8 per group.",
            "Performances should be 3-5 minutes long, including entry and exit.",
            "Music tracks should be submitted at least 24 hours before the event in MP3 format.",
            "Props are allowed, but they must be arranged by the participants themselves.",
            "Judging criteria include choreography, synchronization, costume, and overall impact.",
            "No offensive or inappropriate content is permitted in the performances.",
        ],
        description:
            "Lets Nacho is the dance event, where you can enjoy great music and dance , With a fun atmosphere and energetic beats, it's the perfect chance to let loose and have a blast on the dance floor. Come join the fun and show off your moves. In this event there is no solo performances… Only group performances are there.. Min 3 persons and Max 8 persons in a group.",
    },
    {
        event: "Voice of MM",
        venue: "Indoor Stadium",
        timings: "01:00 P.M - 02:30 P.M",
        image: voiceOfMM.src,
        day: "Day 1",
        rules: [
            "This is a solo singing competition; no duets or group performances are allowed.",
            "Each participant is allowed a maximum of 4 minutes for their performance.",
            "Participants can sing a song of any genre or language.",
            "No pre-recorded vocals are allowed; only instrumental backing tracks can be used.",
            "Judging will be based on vocal quality, song choice, stage presence, and overall performance.",
            "Contestants must submit their song choice 24 hours before the event.",
        ],
        description:
            "Voice of MM is the Singing Competition, where people show off their singing skills. Contestants perform songs in front of a panel of judges. In this event there is only solo performance.",
    },
    {
        event: "Band Battle",
        venue: "Indoor Stadium",
        timings: "03:00 P.M - 04:00 P.M",
        image: bandBattle.src,
        day: "Day 1",
        rules: [
            "Solo performance is also allowed.",
            "Each band must have a minimum of 3 members.",
            "Bands are allowed a maximum of 10 minutes for their performance, including setup time.",
            "Any genre of music is allowed, and both original compositions and covers are accepted.",
            "All instruments and sound equipment must be arranged by the bands themselves.",
            "Judging criteria include originality, musicality, stage presence, and audience engagement.",
            "Offensive or inappropriate lyrics and performances are strictly prohibited.",
        ],
        description:
            "Band Battle is a competition where different musical bands play their best songs using various instruments. It is best chance to show their skills and creativity.",
    },
    {
        event: "Ramp Walk",
        venue: "Indoor Stadium",
        timings: "11:00 A.M - 01:00 P.M",
        image: rampWalk.src,
        day: "Day 2",
        rules: [
            "Participants must wear their best outfits during the ramp walk.",
            "Each walk should be in a professional way, including entry, posing, and exit.",
            "Judging will be based on confidence, poise, style, and creativity in presenting the clothing.",
            "No obstructive or dangerous props are allowed on the runway.",
            "Outfits should adhere to event guidelines and should not be offensive or inappropriate.",
            "Participants must be present backstage at least 30 minutes before the event starts.",
        ],
        description:
            "Ramp walk is a part of fashion show where models walk along a long, raised runway to show case clothing and accessories.  As they walk, they display different outfits, striking poses to highlight the design and style. The goal is to present fashion in a visually appealing way and capture the audiences attention.",
    },
    {
        event: "Picture Perfect (Photography Contest)",
        venue: "Room no - 4102",
        timings: "10:30 A.M - 12:00 P.M",
        image: picturePerfect.src,
        day: "Day 1",
        rules: [
            " Participant can submit photographs through google forms.",
            "All photos must be original work and taken by the participant.",
            "Photos can be in any format but should be submitted digitally in high resolution.",
            "Judging criteria include creativity, composition, technical skill, and originality.",
            "The use of copyrighted or plagiarized material will lead to disqualification.",
            "Photos should be submitted at least 48 hours before the event.",
        ],
        description:
            "Picture perfection is a photography event where people showcase their best photos. The event highlights outstanding photography and celebrates the skills of the photographers.",
    },
    {
        event: "Karaoke Catchup",
        venue: "Room no - 4118",
        timings: "10:30 A.M",
        image: karokeCatchup.src,
        day: "Day 1,2",
        rules: [
            "Participants can sing any song of their choice.",
            "No competition format; this is a free-for-all fun event.",
            "Participants can perform in groups with group of friends min-4 max-6.",
            "Lyrics will be displayed on a screen for assistance.",
            "No offensive or inappropriate songs are allowed.",
            "Participants should maintain a positive and fun atmosphere.",
        ],
        description:
            "Karaoke catch up is all about singing, laughing, and reconnecting with friends. Whether you’re here to perform or just enjoy the music, this is the perfect opportunity to let loose and have a great time together. No pressure, just good vibes and great tunes.",
    },
    {
        event: "Hall of Game (Play Station)",
        venue: "Room no - 4117",
        timings: "10:30 A.M",
        image: halloffame.src,
        day: "Day 1,2",
        rules: [
            "Players can choose from a range of single-player or multiplayer games on PS4.",
            "Each game has a time limit of 15 minutes for single-player and 30 minutes for multiplayer.",
            "Winners are determined by the highest scores or completion times, depending on the game.",
            "Participants must register for their preferred game slots in advance.",
            "Only registered players are allowed to use the gaming consoles.",
            "Respectful behaviour towards other participants and equipment is mandatory.",
        ],
        description:
            "Hall of game means play station. Play station is just an entertainment game. Which is called Ps4.  In this playstation there is multiplayer and single-player games.",
    },
    {
        event: "Chicken Dinner (PubG)",
        venue: "Room no - 4116",
        timings: "10:30 A.M",
        image: chickenDinner.src,
        day: "Day 1",
        rules: [
            "Only squad matches are allowed; no solo or duo matches.",
            "Each squad should have a minimum of 3 and a maximum of 4 players.",
            "Matches will be held on PUBG Mobile, and players must bring their own devices.",
            "The squad with the most points at the end of the match wins.",
            "Cheating or use of third-party software will lead to immediate disqualification.",
            "All players should adhere to fair play and sportsmanship guidelines.",
        ],
        description:
            "Chicken Dinner means Pubg game. Pubg is the game where we play in mobille and entertained. Every game is a thrilling fight for survival. In pubg there is only squad matches… There is no solo matches.",
    },
    {
        event: "High Jinks - Buzz Wire",
        venue: "G-Block Pathway",
        timings: "10:30 A.M",
        image: buzzWire.src,
        day: "Day 1,2",
        rules: [
            "Participants must guide the metal loop along the twisted wire without touching it.",
            "Each player has 1 attempt to complete the course.",
            "If the loop touches the wire, a buzzer will sound, and the attempt ends.",
            "The player who completes the course the fastest without triggering the buzzer wins.",
            "Players should maintain a steady hand and avoid rushing.",
            "The event is open to all age groups.",
        ],
        description:
            "Buzz wire is a challenging and fun game that tests you hand-eye coordination and steady hand. The goal is to guide a metal loop along a twisted wire without touching it. If the loop touches the wire, it triggers a 'buzz' sound, and you have to start over. It’s a great game for all ages, combining concentration, patience, and a bit of friendly competition!",
    },
    {
        event: "High Jinks - Push-up Challenge",
        venue: "G-Block Main Entrance",
        timings: "10:30 A.M",
        image: pushUp.src,
        day: "Day 1,2",
        rules: [
            "Participants compete to perform the maximum number of push-ups within 1 minute.",
            "Proper form is required; incomplete push-ups will not be counted.",
            "Judges will monitor each participant for correct form and count.",
            "The participant with the highest number of valid push-ups wins.",
            "Warm-up exercises are recommended to avoid injuries.",
            "Encouragement and positive support are welcomed.",
        ],
        description:
            "Push up challenge is a fitness and funny event. This event is helps you to test your strength and endurance. It’s a great way to challenge yourself, improve your upper body strength.",
    },
    {
        event: "Whisper Challenge",
        venue: "Room no - 4103",
        timings: "11:00 A.M",
        image: whisper.src,
        day: "Day 1,2",
        rules: [
            "Two players form a team; one wears noise-canceling headphones while the other whispers a phrase.",
            "The player with headphones must guess the whispered phrase by reading lips.",
            "Each team has 5 phrases to guess, with a time limit of 30 seconds per phrase.",
            "Points are awarded for each correct guess, with the team accumulating the most points winning.",
            "Offensive or inappropriate phrases are not allowed.",
            "Teams should maintain a fun and light-hearted spirit throughout the game.",
        ],
        description:
            "The Whisper Challenge is a hilarious game where players try to guess phrases while wearing noise-canceling headphones. One person whispers a phrase, and the other has to read their lips and guess what they’re saying. The results are often funny misinterpretations and lots of laughter. It's a great way to break the ice and have fun with friends.",
    },
    {
        event: "Hand DIY T-shirts",
        venue: "G-Block Pathway",
        timings: "10:30 A.M",
        image: handDiy.src,
        day: "Day 1,2",
        rules: [
            "Participants create personalized T-shirts using paint, markers, and other craft supplies.",
            "Each participant can bring their own T-shirt or use one provided by the organizers.",
            "Friends can add handprints, messages, and drawings on the T-shirts.",
            "All decorations must be completed within 1 hour.",
            "Use of any offensive or inappropriate content is not permitted.",
            "Participants must clean up their workspace after completing their designs.",
        ],
        description:
            "Hand Diy T shirts is a custom-made, personalized T-shirts is decorated using various hand-crafted techniques. By this t-shirts you can make the memories. Your friends can print their hands on the T-shirts by the colours and they can write anything about you on the t-shirt. This is one of the best memory for you.",
    },
    {
        event: "Period Pain Simulator",
        venue: "G-Block Main Entrance",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        rules: [
            "Participants(targeted people: boys) wear a period pain simulator device for 5 minutes to experience menstrual cramps.",
            "The device will simulate different levels of pain intensity.",
            "The goal is to endure the highest pain level for the longest duration.",
            "Participants can opt-out at any time if they feel uncomfortable.",
            "This is a non-competitive event aimed at creating awareness.",
            "Respectful behavior is expected from all participants and attendees.",
        ],
        description:
            "Period pain simulator is an event, that participants will have the opportunity to experience the menstrual cramps. This is one of the best experience to you.",
    },
    {
        event: "Actomania (Dialogue King)",
        venue: "Room no - 4104",
        timings: "11:00 A.M",
        image: actomania.src,
        day: "Day 1",
        rules: [
            "Participants are given a set of dialogues to perform or can choose their own.",
            "Each performance should not exceed 3 minutes.",
            "Judging criteria include expression, clarity, voice modulation, and overall impact.",
            "No offensive or inappropriate content is allowed in the dialogues.",
            "Participants should be prepared to perform in front of a live audience.",
            "Creativity in dialogue delivery is highly encouraged.",
        ],
        description:
            "Actomania is Dialogue King. Actomania is a challenging event that celebrates the art of dialogue delivery in the world of acting. The participants will show their talent by the dialogues. This event will be like fun event.",
    },
    {
        event: "Ultimate Battle - Short Film",
        venue: "Room no - 4106",
        timings: "11:00 A.M",
        image: shortFilm.src,
        day: "Day 2",
        rules: [
            "Participants must submit their short films, which should not exceed 10 minutes in length.",
            "All content must be original and created by the participant.",
            "Judging criteria include storytelling, direction, cinematography, and creativity.",
            "Films should be submitted 48 hours before the event.",
            "Offensive or inappropriate content will lead to disqualification.",
        ],
        description:
            "The Short Film Showcase is a vibrant event dedicated to celebrating the creativity and storytelling prowess of filmmakers through the art of short films.",
    },
    {
        event: "Ultimate Battle - Sitcom",
        venue: "Room no - 4105",
        timings: "11:00 A.M",
        image: sitCom.src,
        day: "Day 2",
        rules: [
            "Groups create and perform original situational comedies not exceeding 5 minutes.",
            "No Judging criteria include humour, plot, character development, and audience engagement.",
            "Props and costumes must be arranged by participants.",
            "Offensive content is prohibited.",
            "A rehearsal is recommended before the performance.",
        ],
        description:
            "Sitcom means Situational comedy. Sitcom Spectacular is a lively event where participants and audiences come together to create, perform, and enjoy original short situational comedies (sitcoms) in a fun and interactive setting.",
    },
    {
        event: "Ultimate Battle - Reel Master",
        venue: "Room no - 4103",
        timings: "11:00 A.M",
        image: reelContest.src,
        day: "Day 2",
        rules: [
            "Participants create and submit short videos (reels) no longer than 1 minute.",
            "Reels can be of any genre but must be original content.",
            "Judging will focus on creativity, engagement, and storytelling.",
            "Reels must be submitted 24 hours before the event.",
            "Offensive or plagiarized content is strictly prohibited.",
        ],
        description:
            "Reel Master is an exciting event that celebrates the art of short-form video creation, where participants compete to craft the most engaging, creative, and impactful reels. Whether you're a seasoned content creator or just starting out, this event offers a platform to showcase your skills in storytelling, editing, and visual creativity.",
    },
    {
        event: "Ultimate Battle - Meme Challenge",
        venue: "Room no - 4104",
        timings: "11:00 A.M",
        image: memeChallenge.src,
        day: "Day 2",
        rules: [
            "Participants create and submit original memes.",
            "Memes can be in any format but must be submitted digitally.",
            "Judging criteria include humour, creativity, and viral potential.",
            "Offensive or inappropriate memes will be disqualified.",
            "Memes should be submitted 24 hours before the event.",
        ],
        description:
            "The Meme Challenge is a hilarious and creative event where participants compete to create the most viral, funny, and clever memes. This event is perfect for meme enthusiasts, digital creators, and anyone with a sharp wit and a love for internet humor.",
    },
    {
        event: "Ultimate Battle - Stand-up Talkies",
        venue: "Room no - 4101",
        timings: "11:00 A.M",
        image: standUp.src,
        day: "Day 2",
        rules: [
            "Each comedian has 5 minutes to perform their routine.",
            "Judging criteria include humor, originality, audience engagement, and delivery.",
            "No offensive or discriminatory material is allowed.",
            "Performers should be ready for both a routine and a Q&A discussion segment.",
            "Rehearsal before the event is recommended.",
        ],
        description:
            "Stand-Up Talkies is a dynamic event that blends the sharp wit of stand-up comedy with engaging discussions on topics that matter. This event is designed for comedy lovers who appreciate humor with a twist of insight, where comedians not only deliver their funniest material but also engage in lively, thought-provoking conversations.",
    },
    {
        event: "Turbo Tracks Challenge (F1 race in mini track)",
        venue: "Beside G-Block",
        timings: "10:30 A.M",
        image: turboTracks.src,
        day: "Day 1,2",
        rules: [
            "Participants race two mini cars on a specially designed off-road track.",
            "Each race has a time limit of 2 minutes.",
            "The car that completes the track in the shortest time without derailing wins.",
            "Participants are allowed three attempts to complete the race.",
            "No external modifications to the cars are permitted.",
            "Respectful conduct and fair play are mandatory.",
        ],
        description:
            "Turbo tracks challenge is mini car race(toy car) track. The turbo track challenge is an entertaining event. In this event there is a set like off roads. In that off road there is two mini cars. In that off road the two mini cars are raced.",
    },
];

// export const WORKSHOPS = [
//     {
//         eventName: "Find Flag Without Lag",
//         slug: "find-flag-without-lag",
//         image: placeHolder.src,
//         about: "A team-based competition where participants solve aptitude questions to receive clues. The clues lead them to hidden flags, and the teams must retrieve the flags to qualify for the next round. The event consists of three rounds, with the team having the highest points declared as the winner.",
//         howToPlay: [
//             "Form teams of 5 participants.",
//             "Solve aptitude questions to get clues.",
//             "One member retrieves the flag based on the clues.",
//             "Teams that retrieve a flag qualify for the next round.",
//             "Round 2 and 3 involve flags with different point values.",
//             "The team with the highest points after 3 rounds wins.",
//         ],
//         rules: [
//             "Teams must consist of exactly 5 participants.",
//             "Teams that fail to retrieve a flag in Round 1 are eliminated.",
//             "Different colored flags have different point values in Rounds 2 and 3.",
//             "No interference with other teams is allowed.",
//             "A time limit may be imposed for solving questions and finding flags.",
//         ],
//         venue: "Campus SH-5",
//         date: "October 5, 2024",
//     },
//     {
//         eventName: "ARVR Workshop",
//         slug: "arvr-workshop",
//         image: placeHolder.src,
//         about: "A two-day hands-on learning experience about Augmented Reality and Virtual Reality (ARVR) technology. Participants will learn how ARVR devices are built and will construct their own devices by the end of the workshop.",
//         howToPlay: [
//             "Individual participation.",
//             "Day 1: Learn the basics of ARVR devices, hardware, and software installation.",
//             "Day 2: Build your own ARVR device using the knowledge gained.",
//         ],
//         rules: [
//             "Participants must bring a laptop, headphones, and mouse.",
//             "No team participation; individual work only.",
//             "Certificates will be provided upon completion.",
//             "Punctuality and attendance for both days are mandatory.",
//         ],
//         venue: "MNS Block 510 and 511",
//         date: "October 4-5, 2024",
//     },
//     {
//         eventName: "Bridge-o-Mania",
//         slug: "bridge-o-mania",
//         image: placeHolder.src,
//         about: "A one-day event where participants construct a bridge using Popsicle sticks, glue, and thread. The goal is to build a structure that can hold the maximum load.",
//         howToPlay: [
//             "Form a team of 1 or 2 participants.",
//             "Use provided materials (Popsicle sticks, glue, thread) to construct a bridge.",
//             "The bridge will be tested by adding incremental loads.",
//             "The bridge that holds the most weight wins.",
//         ],
//         rules: [
//             "Teams can have a maximum of 2 members.",
//             "Only Popsicle sticks, glue, and thread are allowed.",
//             "No external materials or assistance is permitted.",
//             "Bridges must be completed within the time limit.",
//         ],
//         venue: "Mechanical Workshop",
//         date: "October 5, 2024",
//     },
//     {
//         eventName: "Life Saver Workshop",
//         slug: "life-saver-workshop",
//         image: placeHolder.src,
//         about: "A two-day workshop aimed at teaching essential life-saving skills. Participants will practice on a human dummy to gain hands-on experience.",
//         howToPlay: [
//             "Attend the workshop led by Dr. Tejo Rao from Maruthi Hospital.",
//             "Learn and practice life-saving techniques using a human dummy.",
//         ],
//         rules: [
//             "Attendance for both days is required.",
//             "Active participation in hands-on sessions is mandatory.",
//             "Punctuality is expected from all participants.",
//         ],
//         venue: "SH-1",
//         date: "October 4-5, 2024",
//     },
//     {
//         eventName: "Robo War",
//         slug: "robo-war",
//         image: placeHolder.src,
//         about: "A robotics competition where participants design and build robots using Arduino Uno remote control Robo Kits to push their opponents' robots out of the pitch.",
//         howToPlay: [
//             "Design and build a robot using the Arduino Uno Robo Kit.",
//             "Compete in one-on-one elimination matches.",
//             "The goal is to push the opponent's robot out of the pitch.",
//             "The last robot remaining in the pitch wins.",
//         ],
//         rules: [
//             "Robots must be built using the Arduino Uno remote control Robo Kit.",
//             "The robot that is forced out of the pitch loses the match.",
//             "Elimination format: The last robot standing wins.",
//         ],
//         venue: "Pharmacy Block",
//         date: "October 5, 2024",
//     },
//     {
//         eventName: "Virtual Modelling",
//         slug: "virtual-modelling",
//         image: placeHolder.src,
//         about: "A two-round competition where participants narrate a story based on random prompts and create a 3D video using AI tools in the second round.",
//         howToPlay: [
//             "Round 1: Narrate a story based on 5 random chits drawn from a box.",
//             "Round 2: Create a 3D video using AI tools based on the narrated story.",
//             "The most creative and visually appealing video wins.",
//         ],
//         rules: [
//             "Teams of 2-3 participants or solo participation is allowed.",
//             "Creativity in storytelling is key for advancing to Round 2.",
//             "Adherence to video quality and event rules is required.",
//         ],
//         venue: "Computer Lab",
//         date: "October 5, 2024",
//     },
// ];

export const SPOTEVENTS = [
    {
        eventName: "TELEMATCH",
        slug: "telematch",
        image: placeHolder.src,
        about: "Telematch is a popular format for team building activities designed to promote teamwork, communication, and collaboration.",
        howToPlay:
            "Players race to the finish line while balancing a task. Includes events like Adventure Run, Human Wheelbarrow Race, Tug of War, etc.",
        rules: [
            "Number of person: One person per game.",
            "Fair Play: Teams caught cheating will be disqualified.",
        ],
    },
    {
        eventName: "LUCKY DRAW",
        slug: "lucky-draw",
        image: placeHolder.src,
        about: "A random selection process where participants enter for a chance to win prizes.",
        howToPlay: "Participants fill a coupon; winners are drawn randomly.",
        rules: ["One coupon per participant.", "Only one prize per person."],
    },
    {
        eventName: "DIGITAL EVENTS",
        slug: "digital-events",
        image: placeHolder.src,
        about: "Participants engage in virtual activities and competitions, often hosted online.",
        howToPlay: "Participants compete in modes like CLASSIC or BERMUDA in squads of four.",
        rules: ["Four people per game.", "No APK apps allowed."],
    },
    {
        eventName: "FOOD CHALLENGE",
        slug: "food-challenge",
        image: placeHolder.src,
        about: "Participants compete to eat large quantities of food within a time limit.",
        howToPlay: "Eat pani puri within the time limit to proceed to the next round.",
        rules: ["Only one person can participate; no help is allowed."],
    },
    {
        eventName: "BOX CRICKET",
        slug: "box-cricket",
        image: placeHolder.src,
        about: "A modified version of cricket played in a smaller, enclosed space.",
        howToPlay:
            "Batsmen must keep one foot within the crease while batting. Hitting the ceiling results in no runs or dismissal.",
        rules: ["Usually six players per team.", "Each bowler has a different number of overs."],
    },
    {
        eventName: "RING TOSS",
        slug: "ring-toss",
        image: placeHolder.src,
        about: "Players aim to throw rings onto targets to win rewards.",
        howToPlay:
            "Players take turns tossing rings at the target. Points are awarded for successful tosses.",
        rules: ["Players throw from a set distance.", "Each player gets three rings."],
    },
    {
        eventName: "FLAG PLOTTING",
        slug: "flag-plotting",
        image: placeHolder.src,
        about: "Players place flags on a map to capture territories or win prizes.",
        howToPlay: "Participants plot areas on a map. If the area contains a prize, they win.",
        rules: ["No prize is awarded if the plotted area doesn’t contain a gift."],
    },
    {
        eventName: "ESCAPE THE ROOM",
        slug: "escape-the-room",
        image: placeHolder.src,
        about: "An immersive, live-action game where participants must solve puzzles to escape within a time limit.",
        howToPlay:
            "Participants must follow a correct path through a maze, with only one person allowed in the maze at a time.",
        rules: ["No mobile phones or outside tools.", "Don't damage anything."],
    },
    {
        eventName: "TREASURE HUNT",
        slug: "treasure-hunt",
        image: placeHolder.src,
        about: "Participants solve riddles and clues to find hidden treasures.",
        howToPlay:
            "Teams solve aptitude questions to find clues leading to treasures. The process repeats with different clues in multiple rounds.",
        rules: [
            "Teams that fail to retrieve a clue in the first round are eliminated.",
            "There is a time limit for solving questions and finding flags.",
        ],
    },
    {
        eventName: "FUN GAMES",
        slug: "fun-games",
        image: placeHolder.src,
        venue: "MNS Pathway",
        about: "Lighthearted games designed to entertain and engage players.",
        howToPlay: "Players follow given statements and directions to play the games correctly.",
        rules: ["One person per game.", "There may be a time limit for completing tasks."],
    },
];

export const WORKSHOPS = [
    {
        eventName: "Find Flag Without Lag",
        slug: "find-flag-without-lag",
        image: placeHolder.src,
        about: "A team-based competition where participants solve aptitude questions to receive clues. The clues lead them to hidden flags, and the teams must retrieve the flags to qualify for the next round. The event consists of three rounds, with the team having the highest points declared as the winner.",
        howToPlay: [
            "Form teams of 5 participants.",
            "Solve aptitude questions to get clues.",
            "One member retrieves the flag based on the clues.",
            "Teams that retrieve a flag qualify for the next round.",
            "Round 2 and 3 involve flags with different point values.",
            "The team with the highest points after 3 rounds wins.",
        ],
        rules: [
            "Teams must consist of exactly 5 participants.",
            "Teams that fail to retrieve a flag in Round 1 are eliminated.",
            "Different colored flags have different point values in Rounds 2 and 3.",
            "No interference with other teams is allowed.",
            "A time limit may be imposed for solving questions and finding flags.",
        ],
        venue: "Campus SH-5",
        date: "October 5, 2024",
    },
    {
        eventName: "ARVR Workshop",
        slug: "arvr-workshop",
        image: placeHolder.src,
        about: "A two-day hands-on learning experience about Augmented Reality and Virtual Reality (ARVR) technology. Participants will learn how ARVR devices are built and will construct their own devices by the end of the workshop.",
        howToPlay: [
            "Individual participation.",
            "Day 1: Learn the basics of ARVR devices, hardware, and software installation.",
            "Day 2: Build your own ARVR device using the knowledge gained.",
        ],
        rules: [
            "Participants must bring a laptop, headphones, and mouse.",
            "No team participation; individual work only.",
            "Certificates will be provided upon completion.",
            "Punctuality and attendance for both days are mandatory.",
        ],
        venue: "MNS Block 510 and 511",
        date: "October 4-5, 2024",
    },
    {
        eventName: "Bridge-o-Mania",
        slug: "bridge-o-mania",
        image: placeHolder.src,
        about: "A one-day event where participants construct a bridge using Popsicle sticks, glue, and thread. The goal is to build a structure that can hold the maximum load.",
        howToPlay: [
            "Form a team of 1 or 2 participants.",
            "Use provided materials (Popsicle sticks, glue, thread) to construct a bridge.",
            "The bridge will be tested by adding incremental loads.",
            "The bridge that holds the most weight wins.",
        ],
        rules: [
            "Teams can have a maximum of 2 members.",
            "Only Popsicle sticks, glue, and thread are allowed.",
            "No external materials or assistance is permitted.",
            "Bridges must be completed within the time limit.",
        ],
        venue: "Mechanical Workshop",
        date: "October 5, 2024",
    },
    {
        eventName: "Life Saver Workshop",
        slug: "life-saver-workshop",
        image: placeHolder.src,
        about: "A two-day workshop aimed at teaching essential life-saving skills. Participants will practice on a human dummy to gain hands-on experience.",
        howToPlay: [
            "Attend the workshop led by Dr. Tejo Rao from Maruthi Hospital.",
            "Learn and practice life-saving techniques using a human dummy.",
        ],
        rules: [
            "Attendance for both days is required.",
            "Active participation in hands-on sessions is mandatory.",
            "Punctuality is expected from all participants.",
        ],
        venue: "SH-1",
        date: "October 4-5, 2024",
    },
    {
        eventName: "Robo War",
        slug: "robo-war",
        image: placeHolder.src,
        about: "A robotics competition where participants design and build robots using Arduino Uno remote control Robo Kits to push their opponents' robots out of the pitch.",
        howToPlay: [
            "Design and build a robot using the Arduino Uno Robo Kit.",
            "Compete in one-on-one elimination matches.",
            "The goal is to push the opponent's robot out of the pitch.",
            "The last robot remaining in the pitch wins.",
        ],
        rules: [
            "Robots must be built using the Arduino Uno remote control Robo Kit.",
            "The robot that is forced out of the pitch loses the match.",
            "Elimination format: The last robot standing wins.",
        ],
        venue: "Pharmacy Block",
        date: "October 5, 2024",
    },
    {
        eventName: "Virtual Modelling",
        slug: "virtual-modelling",
        image: placeHolder.src,
        about: "A two-round competition where participants narrate a story based on random prompts and create a 3D video using AI tools in the second round.",
        howToPlay: [
            "Round 1: Narrate a story based on 5 random chits drawn from a box.",
            "Round 2: Create a 3D video using AI tools based on the narrated story.",
            "The most creative and visually appealing video wins.",
        ],
        rules: [
            "Teams of 2-3 participants or solo participation is allowed.",
            "Creativity in storytelling is key for advancing to Round 2.",
            "Adherence to video quality and event rules is required.",
        ],
        venue: "Computer Lab",
        date: "October 5, 2024",
    },
    {
        eventName: "Code Sprint",
        slug: "code-sprint",
        image: placeHolder.src,
        about: "A two-round high-energy coding competition designed to challenge participants' problem-solving abilities and coding proficiency. Participants will solve coding puzzles and generate functional code in a race against time.",
        howToPlay: [
            "Round 1: Solve 10 coding puzzles within a 1-hour time limit.",
            "Participants can choose a time slot between 9:00 AM and 12:30 PM.",
            "Round 2: Qualified participants must write functional code to match given outputs.",
        ],
        rules: [
            "Solve 10 coding puzzles within 1 hour in Round 1.",
            "Write functional code based on provided outputs in Round 2.",
            "The best and most effective code wins.",
        ],
        venue: "Campus SH-5",
        date: "October 4, 2024",
    },
    {
        eventName: "Care-a-thon",
        slug: "care-a-thon",
        image: placeHolder.src,
        about: "A healthcare-based hackathon where participants develop innovative solutions to given problem statements related to healthcare. The event involves project submissions, exhibitions, and final presentations.",
        howToPlay: [
            "Form teams of 2-5 participants.",
            "Submit project reports based on healthcare problem statements.",
            "Exhibit projects and present final solutions.",
        ],
        rules: [
            "Teams must consist of 2-5 members.",
            "Submit project reports by the deadline (September 30, 2024).",
            "Judging criteria include innovation, feasibility, and impact.",
        ],
        venue: "RL-lab, Mohan Babu University",
        date: "October 3-5, 2024",
    },
    {
        eventName: "3-D Design Modelling and Development Competition",
        slug: "3d-design-modelling-competition",
        image: placeHolder.src,
        about: "A solo-participation event where participants demonstrate their skills in 3-D modeling and printing. Participants first compete in a 3-D modeling contest and then print their designs on a 3-D printer.",
        howToPlay: [
            "Day 1: Attend a demo class and participate in the 3-D modeling competition.",
            "Day 2: Qualified participants will print their 3-D models.",
            "The participant with a defect-free model wins.",
        ],
        rules: [
            "Solo participation only.",
            "Participants must complete their 3-D models within the given time.",
            "Models must be printed without defects to win.",
        ],
        venue: "SIEMENS & IDEA LAB Campus",
        date: "October 4-5, 2024",
    },
    {
        eventName: "Quizonomics",
        slug: "quizonomics",
        image: placeHolder.src,
        about: "A dynamic quiz competition focusing on General Economics and simple mathematics. Participants compete in teams, progressing through elimination rounds to claim victory.",
        howToPlay: [
            "Round 1: Answer 50 questions on General Economics and simple mathematics.",
            "Round 2: Identify famous CEOs based on clues.",
            "Round 3: The suspense round, details revealed only to qualified teams.",
        ],
        rules: [
            "Teams must consist of exactly 3 members.",
            "Each question in Round 1 has a 10-second time limit.",
            "The best team after the suspense round wins.",
        ],
        venue: "Campus SH-5",
        date: "October 4, 2024",
    },
    {
        eventName: "Tech Exhibition",
        slug: "tech-exhibition",
        image: placeHolder.src,
        about: "A two-day event where students from top institutions present their innovative product designs. The projects are exhibited, and feedback from the audience determines the winners.",
        howToPlay: [
            "Submit a project manuscript a week before the event.",
            "Exhibit the project and engage with visitors.",
            "Collect feedback from students and faculty.",
        ],
        rules: [
            "Teams can consist of 2-4 members or solo participation.",
            "Project manuscripts must be submitted in advance.",
            "Feedback points determine the winning projects.",
        ],
        venue: "New Academic Block Campus",
        date: "October 4-5, 2024",
    },
    {
        eventName: "Spell Quest",
        slug: "spell-quest",
        image: placeHolder.src,
        about: "A solo-participation competition designed to test participants' spelling and grammar skills. The event consists of two challenging rounds with the winner being recognized for their mastery of the English language.",
        howToPlay: [
            "Round 1: Pronounce and spell a given word correctly.",
            "Round 2: Rewrite a paragraph without any spelling or grammatical errors.",
        ],
        rules: [
            "Solo participation only.",
            "Participants must spell words correctly and eliminate errors in the paragraph.",
            "The best performer in both rounds wins.",
        ],
        venue: "Campus SH-4",
        date: "October 5, 2024",
    },
    {
        eventName: "Brevity Blitz",
        slug: "brevity-blitz",
        image: placeHolder.src,
        about: "A fast-paced solo-participation competition that tests participants' reading comprehension and presentation skills under time constraints. Participants must flawlessly present complex text within a set time limit.",
        howToPlay: [
            "Prepare a presentation of a paragraph with complex words.",
            "Present the paragraph without mistakes in pronunciation or delivery.",
            "Complete the presentation within the allotted time.",
        ],
        rules: [
            "Solo participation only.",
            "Flawless pronunciation and clear delivery are required.",
            "Strict time limits are enforced for both preparation and presentation.",
        ],
        venue: "Campus SH-4",
        date: "October 5, 2024",
    },
];
