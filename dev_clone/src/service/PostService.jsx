export const PostService = {
    getPostsData() {
        return [
            {
            "id": 1,
            "title": "There's a new DEV theme in town for all you 10x hackers out there (plus one actually useful new feature)",
            "comments_count": 37,
            "reading_time_minutes": 15,
            "reaction": 5,
            "user": {
                "name": "Terry Medhurst",
                "email": "atuny0@sohu.com",
                "image": "https://robohash.org/hicveldicta.png",
                "designation": "Senior Cost Accountant"
                },
            "tags":[
                    {
                        "name":'svelte', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                    {
                        "name":'sveltekit', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'oauth', 
                        "borderColor": 'hover:border-amber-800',
                        "bgColor": 'hover:bg-amber-800/10',
                        "color": 'text-amber-900',
                    },
                    {
                        "name":'typescript', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-lime-800/10',
                        "color": 'text-lime-900',
                    },
                ]
            },
            {
            "id": 2,
            "title": "JavaScript is Extraordinarily Weird! Hear Me Out!",
            "comments_count": 6,
            "reading_time_minutes": 9,
            "reaction": 20,
            "user": {
                "name": "Sheldon Quigley",
                "image": "https://robohash.org/doloremquesintcorrupti.png",
                },
            "tags":  [
                    {
                        "name":'github', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'node', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'rect', 
                        "borderColor": 'hover:border-cyan-800',
                        "bgColor": 'hover:bg-cyan-800/10',
                        "color": 'text-cyan-900',
                    },
                ]
            },
            {
            "id": 3,
            "title": "MLH Fellowship - My Experience",
            "comments_count": 0,
            "reading_time_minutes": 6,
            "reaction": 17,
            "user": {
                "name": "Anubhav Gupta",
                "image": "https://robohash.org/consequunturautconsequatur.png",
                },
            "tags":  [
                    {
                        "name":'mlhgrad', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'interview', 
                        "borderColor": 'hover:border-purple-800',
                        "bgColor": 'hover:bg-purple-800/10',
                        "color": 'text-purple-900',
                    },
                    {
                        "name":'opensource', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-lime-800/10',
                        "color": 'text-lime-900',
                    },
                    {
                        "name":'programming', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                ]
            },
            {
            "id": 4,
            "title": "OAuth2 is so complicated ... or 90 lines of code with Svelte",
            "comments_count": 2,
            "reading_time_minutes": 7,
            "reaction": 8,
            "user": {
                "name": "Mateusz Piórowski",
                "image": "https://robohash.org/facilisdignissimosdolore.png",
                },
            "tags":  [
                    {
                        "name":'github', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'node', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                ]
            },
            {
            "id": 5,
            "title": "Top 5 Project Management Tools Platforms Solutions",
            "comments_count": 0,
            "reading_time_minutes": 6,
            "reaction": 7,
            "user": {
                "name": "Miles Cummerata",
                "image": "https://robohash.org/adverovelit.png",
                },
            "tags":  [
                    {
                        "name":'discuss', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-lime-800/10',
                        "color": 'text-lime-900',
                    },
                    {
                        "name":'tutorial', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'learning', 
                        "borderColor": 'hover:border-pink-800',
                        "bgColor": 'hover:bg-pink-800/10',
                        "color": 'text-pink-900',
                    },
                    {
                        "name":'automation', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                ]
            },
            {
            "id": 6,
            "title": "🍃  What Happens When You Let Go in Programming (Surprising Results)",
            "comments_count": 1,
            "reading_time_minutes": 6,
            "reaction": 7,
            "user": {
                "name": "Cherlock Code 🔎",
                "image": "https://robohash.org/laboriosamfacilisrem.png",
                },
            "tags":  [
                    {
                        "name":'productivity', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'beginners', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'codenewbie', 
                        "borderColor": 'hover:border-pink-800',
                        "bgColor": 'hover:bg-pink-800/10',
                        "color": 'text-pink-900',
                    },
                    {
                        "name":'programming', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                ]
            },
            {
            "id": 7,
            "title": "Generating Optimized Image Formats with Node.js",
            "comments_count": 1,
            "reading_time_minutes": 4,
            "reaction": 33,
            "user": {
                "name": "Super",
                "image": "https://robohash.org/cupiditatererumquos.png",
                },
            "tags":  [
                    {
                        "name":'webdev', 
                        "borderColor": 'hover:border-emerald-800',
                        "bgColor": 'hover:bg-emerald-800/10',
                        "color": 'text-emerald-900',
                    },
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'node', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'react', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                ]
            },
            {
            "id": 8,
            "title": "5 Best Full Stack Communities to Join in 2023",
            "comments_count": 1,
            "reading_time_minutes": 1,
            "reaction": 1,
            "user": {
                "name": "Ashutosh Mishra",
                "image": "https://robohash.org/quiaharumsapiente.png",
                },
            "tags":  [
                    {
                        "name":'webdev', 
                        "borderColor": 'hover:border-emerald-800',
                        "bgColor": 'hover:bg-emerald-800/10',
                        "color": 'text-emerald-900',
                    },
                    {
                        "name":'beginners', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'programming', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                    {
                        "name":'community', 
                        "borderColor": 'hover:border-orange-800',
                        "bgColor": 'hover:bg-orange-800/10',
                        "color": 'text-orange-900',
                    },
                ]
            },
            {
            "id": 9,
            "title": "More Accessible Graphs with Jetpack Compose Part 3: Differentiating without Color",
            "comments_count": 0,
            "reading_time_minutes": 5,
            "reaction": 11,
            "user": {
                "name": "Eevis",
                "image": "https://robohash.org/excepturiiuremolestiae.png",
                },
            "tags":  [
                    {
                        "name":'android', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-lime-800/10',
                        "color": 'text-lime-900',
                    },
                    {
                        "name":'a11y', 
                        "borderColor": 'hover:border-cyan-800',
                        "bgColor": 'hover:bg-cyan-800/10',
                        "color": 'text-cyan-900',
                    },
                    {
                        "name":'kotlin', 
                        "borderColor": 'hover:border-teal-800',
                        "bgColor": 'hover:bg-teal-800/10',
                        "color": 'text-teal-900',
                    },
                    {
                        "name":'jetpackcompose', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-orange-800/10',
                        "color": 'text-orange-900',
                    },
                ]
            },
            {
            "id": 10,
            "title": "Specify Node Version in package.json",
            "comments_count": 0,
            "reading_time_minutes": 1,
            "reaction": 1,
            "user": {
                "name": "Walter Nascimento",
                "image": "https://robohash.org/aliquamcumqueiure.png",
                },
            "tags":  [
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-emerald-800',
                        "bgColor": 'hover:bg-emerald-800/10',
                        "color": 'text-emerald-900',
                    },
                    {
                        "name":'beginners', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'tutorial', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'programming', 
                        "borderColor": 'hover:border-orange-800',
                        "bgColor": 'hover:bg-orange-800/10',
                        "color": 'text-orange-900',
                    },
                ]
            },
            {
            "id": 11,
            "title": "Migrating Legacy Apps to AWS: Overcoming Challenges for Success",
            "comments_count": 0,
            "reading_time_minutes": 6,
            "reaction": 2,
            "user": {
                "name": "Chirag Softweb",
                "image": "https://robohash.org/impeditautest.png",
                },
            "tags":  [
                    {
                        "name":'aws', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'cloud', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'migration', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                ]
            },
            {
            "id": 12,
            "title": "Guia para Iniciantes: Como Começar a Fazer Freelance Desenvolvendo Sites para Empresas Locais",
            "comments_count": 0,
            "reading_time_minutes": 2,
            "reaction": 1,
            "user": {
                "name": "Robson Antonio Lima Mendonça",
                "image": "https://robohash.org/namquaerataut.png",
                },
            "tags":  [
                    {
                        "name":'webdev', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'beginners', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'programming', 
                        "borderColor": 'hover:border-red-800',
                        "bgColor": 'hover:bg-red-800/10',
                        "color": 'text-red-900',
                    },
                ]
            },
            {
            "id": 13,
            "title": "Building Machine Learning Models with PySpark's pyspark.ml Library: A Comprehensive Guide.",
            "comments_count": 0,
            "reading_time_minutes": 5,
            "reaction": 9,
            "user": {
                "name": "Mwenda Harun Mbaabu",
                "image": "https://robohash.org/voluptatemsintnulla.png",
                },
            "tags":  [
                    {
                        "name":'machine-learning', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'python', 
                        "borderColor": 'hover:border-cyan-800',
                        "bgColor": 'hover:bg-cyan-800/10',
                        "color": 'text-cyan-900',
                    },
                    {
                        "name":'beginners', 
                        "borderColor": 'hover:border-pink-800',
                        "bgColor": 'hover:bg-pink-800/10',
                        "color": 'text-pink-900',
                    },
                    {
                        "name":'pyspark', 
                        "borderColor": 'hover:border-orange-800',
                        "bgColor": 'hover:bg-orange-800/10',
                        "color": 'text-orange-900',
                    },
                ]
            },
            {
            "id": 14,
            "title": "Create your own URL shortener!",
            "comments_count": 0,
            "reading_time_minutes": 5,
            "reaction": 9,
            "user": {
                "name": "Benedikt Schächner",
                "image": "https://robohash.org/quisequienim.png",
                },
            "tags":  [
                    {
                        "name":'ubuntu', 
                        "borderColor": 'hover:border-orange-800',
                        "bgColor": 'hover:bg-orange-800/10',
                        "color": 'text-orange-900',
                    },
                    {
                        "name":'tutorial', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                    {
                        "name":'website', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'webdev', 
                        "borderColor": 'hover:border-purple-800',
                        "bgColor": 'hover:bg-purple-800/10',
                        "color": 'text-purple-900',
                    },
                ]
            },
            {
            "id": 15,
            "title": "Front Desk Software for Hotel",
            "comments_count": 0,
            "reading_time_minutes": 3,
            "reaction": 0,
            "user": {
                "name": "Shubhneet Gulati",
                "image": "https://robohash.org/autquiaut.png",
                },
            "tags":  [
                    {
                        "name":'softwaredevelopment', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'technology', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'software', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'hotel', 
                        "borderColor": 'hover:border-cyan-800',
                        "bgColor": 'hover:bg-cyan-800/10',
                        "color": 'text-cyan-900',
                    },
                ]
            },
            {
            "id": 16,
            "title": "Can machines dream of secure code? From AI hallucinations to software vulnerabilities",
            "comments_count": 0,
            "reading_time_minutes": 9,
            "reaction": 8,
            "user": {
                "name": "SnykSec",
                "image": "https://robohash.org/porronumquamid.png",
                },
            "tags":  [
                    {
                        "name":'ai', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'applicationsecurity', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'javascript', 
                        "borderColor": 'hover:border-yellow-800',
                        "bgColor": 'hover:bg-yellow-800/10',
                        "color": 'text-yellow-900',
                    },
                ]
            },
            {
            "id": 17,
            "title": "The Role of MicroGateways in Microservices",
            "comments_count": 0,
            "reading_time_minutes": 6,
            "reaction": 9,
            "user": {
                "name": "Muly Gottlieb",
                "image": "https://robohash.org/accusantiumvoluptateseos.png",
                },
            "tags":  [
                    {
                        "name":'microservices', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-gray-800/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'backend', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'api', 
                        "borderColor": 'hover:border-purple-800',
                        "bgColor": 'hover:bg-purple-800/10',
                        "color": 'text-purple-900',
                    },
                    {
                        "name":'webdev', 
                        "borderColor": 'hover:border-violet-800',
                        "bgColor": 'hover:bg-violet-800/10',
                        "color": 'text-violet-900',
                    },
                ]
            },
            {
            "id": 18,
            "title": "Optimize Dockerfile By `Yarn Prune`",
            "comments_count": 2,
            "reading_time_minutes": 3,
            "reaction": 3,
            "user": {
                "name": "Muly Gottlieb",
                "image": "https://robohash.org/nihilharumqui.png",
                },
            "tags":  [
                    {
                        "name":'yarn', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'docker', 
                        "borderColor": 'hover:border-sky-800',
                        "bgColor": 'hover:bg-sky-800/10',
                        "color": 'text-sky-900',
                    },
                    {
                        "name":'optimize', 
                        "borderColor": 'hover:border-blue-700',
                        "bgColor": 'hover:bg-blue-700/10',
                        "color": 'text-blue-700',
                    },
                    {
                        "name":'node', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                ]
            },
            {
            "id": 19,
            "title": "What's a Merge Queue and Why Use it?",
            "comments_count": 0,
            "reading_time_minutes": 6,
            "reaction": 3,
            "user": {
                "name": "Wakatepe-mergify",
                "image": "https://robohash.org/delenitipraesentiumvoluptatum.png",
                },
            "tags":  [
                    {
                        "name":'devops', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-blue-lime/10',
                        "color": 'text-lime-900',
                    },
                    {
                        "name":'productivity', 
                        "borderColor": 'hover:border-purple-800',
                        "bgColor": 'hover:bg-purple-800/10',
                        "color": 'text-purple-900',
                    },
                    {
                        "name":'github', 
                        "borderColor": 'hover:border-gray-700',
                        "bgColor": 'hover:bg-gray-700/10',
                        "color": 'text-gray-700',
                    },
                    {
                        "name":'ccid', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                ]
            },
            {
            "id": 20,
            "title": "Windows Talker (Part 4)",
            "comments_count": 0,
            "reading_time_minutes": 1,
            "reaction": 5,
            "user": {
                "name": "Wakatepe-mergify",
                "image": "https://robohash.org/ipsumutofficiis.png",
                },
            "tags":  [
                    {
                        "name":'github', 
                        "borderColor": 'hover:border-gray-800',
                        "bgColor": 'hover:bg-blue-gray/10',
                        "color": 'text-gray-900',
                    },
                    {
                        "name":'program', 
                        "borderColor": 'hover:border-green-800',
                        "bgColor": 'hover:bg-green-800/10',
                        "color": 'text-green-900',
                    },
                    {
                        "name":'tutorial', 
                        "borderColor": 'hover:border-yellow-700',
                        "bgColor": 'hover:bg-yellow-700/10',
                        "color": 'text-yellow-700',
                    },
                    {
                        "name":'python', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                ]
            },
            {
            "id": 21,
            "title": "Why We Open Sourced RisingWave under Apache 2.0 License",
            "comments_count": 0,
            "reading_time_minutes": 3,
            "reaction": 1,
            "user": {
                "name": "RisingWave Engineering",
                "image": "https://robohash.org/facilisdignissimosdolore.png",
                },
            "tags":  [
                    {
                        "name":'opensource', 
                        "borderColor": 'hover:border-lime-800',
                        "bgColor": 'hover:bg-lime-gray/10',
                        "color": 'text-lime-900',
                    },
                    {
                        "name":'developers', 
                        "borderColor": 'hover:border-blue-800',
                        "bgColor": 'hover:bg-blue-800/10',
                        "color": 'text-blue-900',
                    },
                    {
                        "name":'database', 
                        "borderColor": 'hover:border-pink-700',
                        "bgColor": 'hover:bg-pink-700/10',
                        "color": 'text-pink-700',
                    },
                    {
                        "name":'stream', 
                        "borderColor": 'hover:border-violet-800',
                        "bgColor": 'hover:bg-violet-800/10',
                        "color": 'text-violet-900',
                    },
                ]
            },
            
        ];
    },

    getPosts() {
        return Promise.resolve(this.getPostsData());
    },
}