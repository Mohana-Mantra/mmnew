import bandBattle from "../../public/assets/kalakshetra/bandbattle.svg";
import picturePerfect from "../../public/assets/kalakshetra/pictureperfect.svg";
import pushUp from "../../public/assets/kalakshetra/pushupchallenge.svg";
import shortFilm from "../../public/assets/kalakshetra/shortfilm.svg";
import sitCom from "../../public/assets/kalakshetra/sitcom.svg";
import voice from "../../public/assets/kalakshetra/voiceofmm.svg";

export const KALAKSHETRAEVENTS = [
    {
        event: "Let's Nacho",
        venue: "Indoor Stadium",
        timings: "10:30 A.M - 12:30 P.M",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136577/letsnacho_r0rcoo.png",
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
        image: voice.src,
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
        event: "Ramp Walk",
        venue: "Indoor Stadium",
        timings: "11:00 A.M - 01:00 P.M",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133480/kalakshetra/hsusanr9e1reuffknrph.svg",
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
            "Ramp walk is a part of fashion show where models walk along a long, raised runway to show case clothing and accessories.  As they walk, they display different outfits, striking pose to highlight the design and style. The goal is to present fashion in a visually appealing way and capture the audiences attention.",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133483/kalakshetra/j7ominlzgd8t6ssvpdkb.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136592/halloffame_rc3ayz.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133493/kalakshetra/pcdli8khgzq4ilutdcfe.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136572/buzzwire_rdli8j.svg",
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
        event: "Hand DIY T-shirts",
        venue: "G-Block Pathway",
        timings: "10:30 A.M",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136573/handdiytshirt_d4btpq.png",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136573/periodpain_cqjj79.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133614/kalakshetra/rswlh2rgc2xjfcv7jzsw.svg",
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
            "The Short Film Showcase is a vibrant event dedicated to celebrating the creativity and storytelling prowess of filmmakers through the art of short films. The Short Film runtime should not exceed 20 minutes.",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136571/reelcontest_w4ezn9.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136581/memechallange_ktq0ym.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136571/standup_a4daem.png",
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
];

export const SPOTEVENTS = [
    {
        eventName: "TELEMATCH",
        slug: "telematch",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733024/tele-match_ndl0va.svg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820549/luck_draw_zl49yv.png",
        about: "A random selection process where participants enter for a chance to win prizes.",
        howToPlay: "Participants fill a coupon; winners are drawn randomly.",
        rules: ["One coupon per participant.", "Only one prize per person."],
    },
    {
        eventName: "DIGITAL EVENTS",
        slug: "digital-events",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726732947/DIGITAL_EVENTS_a5grwl.svg",
        about: "Participants engage in virtual activities and competitions, often hosted online.",
        howToPlay: "Participants compete in modes like CLASSIC or BERMUDA in squads of four.",
        rules: ["Four people per game.", "No APK apps allowed."],
    },
    {
        eventName: "FOOD CHALLENGE",
        slug: "food-challenge",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726137004/foodchallenge_cgnlov.png",
        about: "Participants compete to eat large quantities of food within a time limit.",
        howToPlay: "Eat pani puri within the time limit to proceed to the next round.",
        rules: ["Only one person can participate; no help is allowed."],
    },
    {
        eventName: "BOX CRICKET",
        slug: "box-cricket",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726732902/gully_cricket_wdfcrs.svg",
        about: "A modified version of cricket played in a smaller, enclosed space.",
        howToPlay:
            "Batsmen must keep one foot within the crease while batting. Hitting the ceiling results in no runs or dismissal.",
        rules: ["Usually six players per team.", "Each bowler has a different number of overs."],
    },
    {
        eventName: "RING TOSS",
        slug: "ring-toss",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726732791/ring_toss_ldf7tp.png",
        about: "Players aim to throw rings onto targets to win rewards.",
        howToPlay:
            "Players take turns tossing rings at the target. Points are awarded for successful tosses.",
        rules: ["Players throw from a set distance.", "Each player gets three rings."],
    },
    {
        eventName: "FLAG PLOTTING",
        slug: "flag-plotting",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726211739/flagplotting_ugcbf4.jpg",
        about: "Players place flags on a map to capture territories or win prizes.",
        howToPlay: "Participants plot areas on a map. If the area contains a prize, they win.",
        rules: ["No prize is awarded if the plotted area doesn’t contain a gift."],
    },
    {
        eventName: "ESCAPE THE ROOM",
        slug: "escape-the-room",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726211737/escaperoom_uzbj67.jpg",
        about: "An immersive, live-action game where participants must solve puzzles to escape within a time limit.",
        howToPlay:
            "Participants must follow a correct path through a maze, with only one person allowed in the maze at a time.",
        rules: ["No mobile phones or outside tools.", "Don't damage anything."],
    },
    {
        eventName: "TREASURE HUNT",
        slug: "treasure-hunt",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726137002/treasure_x69otv.jpg",
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
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726822568/fun_games_g7qrge.svg",
        venue: "MNS Pathway",
        about: "Lighthearted games designed to entertain and engage players.",
        howToPlay: "Players follow given statements and directions to play the games correctly.",
        rules: ["One person per game.", "There may be a time limit for completing tasks."],
    },
];

export const WORKSHOPS = [
    {
        eventName: "ARVR Workshop",
        slug: "arvr-workshop",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726137049/vrexperience_ioski7.png",
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
        // resoursePerson: [],
        venue: "MNS Block 510 and 511",
        date: "October 4-5, 2024",
    },
    {
        eventName: "Life Saver Workshop",
        slug: "life-saver-workshop",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820129/life_saver_workshop_xmrtup.svg",
        about: "A two-day workshop aimed at teaching essential life-saving skills. Participants will practice on a human dummy to gain hands-on experience.",
        resoursePerson: [
            "Dr. Thejo Rao K.M",
            "MBBS, MCCM, MBMS (UK)",
            "Dip. EM (RCGP -UK)",
            "FICM, FCCM (Apollo)",
            "Medical Superintendent",
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
        eventName: "Workshop on Embedded System & VLSI Design",
        slug: "workshop-on-embedded-system-vlsi-design",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820129/life_saver_workshop_xmrtup.svg",
        about: "Inside the Tech: A Deep dive into Embedded Systems and VLSI Design",
        resoursePerson: ["Mohsin Khan A","Domain Expert, Corporate Trainer for Matlab and VLSI ", "Cranes Varsity w", "Banglore"],
        rules: [
            "Attendance for both days is required.",
            "Active participation in hands-on sessions is mandatory.",
            "Punctuality is expected from all participants.",
        ],
        venue: "Mechanical Seminar Hall",
        date: "October 4, 2024",
    },
];

export const TECHNOHOLIC = [
    {
        eventName: "Find Flag Without Lag",
        slug: "find-flag-without-lag",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820394/Find_Flag_Without_Lag_1_nqbnxf.svg",
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
        timing: "10:00 AM - 04:00 PM",
    },
    {
        eventName: "Bridge-o-Mania",
        slug: "bridge-o-mania",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726641778/Untitled_design_2_rrqtlz.svg",
        about: "An event where participants construct a bridge using Popsicle sticks, glue. The goal is to build a structure that can hold the maximum load.",
        howToPlay: [
            "Form a team of 1 or 2 participants.",
            "Use provided materials (Popsicle sticks, glue) to construct a bridge.",
            "The bridge will be tested by adding incremental loads.",
            "The bridge that holds the most weight wins.",
        ],
        rules: [
            "Teams can have a maximum of 2 members.",
            "Popsicle sticks, glue will be provided.",
            "External materials or assistance are not permitted.",
            "Bridges must be completed within the time limit.",
        ],
        venue: "Mechanical Workshop",
        date: "October 5, 2024",
        timing: "10:00 AM - 01:00 PM",
    },
    {
        eventName: "Robo War",
        slug: "robo-war",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726641793/ROBO_WAR_1_ah9v0o.svg",
        about: "A robo car competition where participants assemble their robots using Arduino UNO remote control Robo Kits.",
        howToPlay: [
            "Design and build a robot car using the Arduino UNO Robo Kit.",
            "The goal is to push the opponent's robot car out of the pitch.",
            "The last robot car remaining in the pitch wins.",
        ],
        rules: [
            "Robots must be built using the Arduino UNO remote control Robo Kit.",
            "The robot that is forced out of the pitch loses the match.",
            "Elimination format: The last robot standing wins.",
        ],
        venue: "Pharmacy Block",
        date: "October 5, 2024",
        timing: "10:00 AM - 04:00 PM",
    },
    {
        eventName: "Virtual Modelling",
        slug: "virtual-modelling",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820453/Virtual_Modelling_vw5dpi.svg",
        about: "A competition where participants narrate a story based on random chits and create a 3D video using AI tools in the second round.",
        howToPlay: [
            "Round 1: Narrate a story based on 5 random chits drawn from a box.",
            "Round 2: Create a 3D video using AI tools based on the narrated story.",
            "The most creative and visually appealing video wins.",
        ],
        rules: [
            "Teams of 2-3 participants or solo participation is allowed.",
            "Creativity in storytelling is key for advancing to Round 2.",
            "Adherence to video quality and event rules is required.",
            "Participants have to remove 2-step verification for their mails.",
        ],
        venue: "Computer Lab - 214",
        date: "October 5, 2024",
        timing: "10:00 AM - 03:00 PM",
    },
    {
        eventName: "Code Sprint",
        slug: "code-sprint",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733599/Code_Sprint_orcywo.png",
        about: "Participants will solve coding puzzles and generate functional code for the given outputs in second round.",
        howToPlay: [
            "Round 1: Solve 10 coding puzzles within a 1-hour time limit.",
            "Participants can choose a time slot between 9:00 AM and 12:30 PM.",
            "Round 2: Qualified participants have to write functional code to match given outputs.",
        ],
        rules: [
            "Solve 10 coding puzzles within 1 hour in Round 1.",
            "Write functional code based on provided outputs in Round 2.",
            "The best and most effective code wins.",
            "Participants have to remove 2-step verification for their mails.",
        ],
        venue: "Campus SH-5",
        date: "October 4, 2024",
        timing: "10:00 AM - 04:00 PM",
    },
    {
        eventName: "HACKATHON (Care-a-thon)",
        slug: "care-a-thon",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733439/care_a_thon_wsbqjz.svg",
        about: "Develop an Mobile Application or Website based on given test cases related to medical application.",
        rules_and_regulations: [
            "Teams must consist of 2-5 members.",
            "Submit project reports through online by the deadline (October 01, 2024).",
            "Test cases reveled on 25 September 2024.",
            "The last date for registration September 30, 2024.",
            "Selected participants have to develop application or website in Mohan Babu University campus on 3, 4, 5 of October 2024.",
            "Judging criteria include innovation, feasibility, and impact.",
            "Participants have to remove 2-step verification for their mails.",
        ],
        venue: "RL-lab, Mohan Babu University",
        date: "October 3 2024 - 10:00 AM - 04:00 PM",
        date2: "October 4,5 2024 - 10:00 AM - 01:00 PM",
    },
    {
        eventName: "3-D Design Modelling and Development Competition",
        slug: "3d-design-modelling-competition",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733293/3_u3zndy.svg",
        about: "Participants have to design, develop a 3-D printed model using mentioned software and 3-D Printers.",
        howToPlay: [
            "Day 1: A demo class on morning and participate have to design given 2-D model using SolidWorks, Catia and PROE softwares.",
            "Day 2: Qualified participants have to develop a specified 3-D printed model using 3-D Printers within time frame.",
        ],
        rules: [
            "Solo participation only.",
            "Input for 3-D Printers should be generated in the venue.",
            "Surface finishing, time taken, effectiveness of printed model will be judged.",
            "Participants have to remove 2-step verification for their mails.",
        ],
        venue: "October 4 2024 - SIEMENS LAB - 10:00 AM - 04:30 PM",
        venue2: "October 5 2024 - IDEA LAB - 10:00 AM - 04:30 PM",
    },
    {
        eventName: "Quizonomics",
        slug: "quizonomics",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733087/Quizonomics_1_v9k1wz.svg",
        about: "A quiz competition focusing on General Economics and simple mathematics.",
        howToPlay: [
            "Round 1: Answer 50 questions on General Economics and simple mathematics.",
            "Round 2: Identify famous CEOs based on clues.",
            "Round 3: The suspense round, details revealed only to qualified teams.",
        ],
        rules: ["Teams must consist of exactly 3 members.", "Mobile phones are not allowed."],
        venue: "Campus SH-5",
        date: "October 4, 2024",
        timing: "10:00 AM - 01:00 PM",
    },
    {
        eventName: "Tech Exhibition",
        slug: "tech-exhibition",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733247/Tech_exhibition_p1qdj7.png",
        about: "Students have to present their innovative product design prototypes.",
        howToPlay: ["Exhibit the project and engage with visitors."],
        rules: [
            "Teams can consist of 2-4 members or solo participation.",
            "Project manuscripts must be submitted in advance.",
        ],
        venue: "MNS Block",
        date: "October 4, 2024",
        timing: "10:00 AM - 04:00 PM",
    },
    {
        eventName: "Spell Quest",
        slug: "spell-quest",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726733339/spell_quest_zlx6au.svg",
        about: "A competition designed to test participants spoken skills. The event consists of two challenging rounds with the winner being recognized for their mastery of the English language.",
        howToPlay: [
            "Round 1: Pronounce and spell a given word correctly.",
            "Round 2: Rewrite a paragraph without grammatical errors.",
        ],
        rules: ["Solo participation only.", "Mobile phones are not allowed."],
        venue: "Campus SH-4",
        date: "October 5, 2024",
        timing: "02:00 PM - 04:00 PM",
    },
    {
        eventName: "Brevity Blitz",
        slug: "brevity-blitz",
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726820018/Brevity_Blitz_ozicpc.svg",
        about: "A competition based on reading comprehension and presentation skills under time constraints.",
        howToPlay: [
            "Present the paragraph without gramatical mistakes in front of judges.",
            "Complete the presentation within the allotted time.",
        ],
        rules: [
            "Solo participation only.",
            "Flawless pronunciation and clear delivery are required.",
            "Strict time limits are enforced for both preparation and presentation.",
        ],
        venue: "Campus SH-4",
        date: "October 5, 2024",
        timing: "10:00 AM - 01:00 PM",
    },
];
