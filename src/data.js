import { v4 as uuidv4 } from "uuid";
function getMusicData() {
    return [
        {
            name: "Kokoronashi",
            cover: "https://64.media.tumblr.com/34813ca062ebef443bc6596c3f9c6a22/a32498ea07e94bcc-dd/s400x600/e2b3eddc0525bbff5c3a3a750ba9eed9c7741eff.jpg",
            artist: "Shuang Sheng",
            audio: "https://www.mboxdrive.com/KOKORONASHI.mp3",
            id: uuidv4(),
            active: true,
        },
        {
            name: "Hikariare",
            cover: "https://64.media.tumblr.com/639532bf080f123d6dc452be992d7064/729a094c90ea73bb-e0/s400x600/47bbc7202bb9ff8076050cbdef89aa6666456a2c.jpg",
            artist: "Burnout Syndromes",
            audio: "https://www.mboxdrive.com/Hikari%20Are.mp3",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Gurenge",
            cover: "https://64.media.tumblr.com/12b389ff3d8d4ccb4f06e9b659b72ced/d3c1aa01205ffa3f-e4/s400x600/a0e55470b83efa35ce5dd6765c13f9bef8a19107.jpg",
            artist: "LiSA",
            audio: "https://www.mboxdrive.com/Gurenge.mp3",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Again",
            cover: "https://64.media.tumblr.com/6b0998629cdf4a444d059a1849138808/d62eec32298b8f3e-5d/s400x600/af598653cbd738ff0a0db9ba897f8fa8f14a309b.jpg",
            artist: "Yui",
            audio: "https://www.mboxdrive.com/Again.mp3",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Blue Bird",
            cover: "https://64.media.tumblr.com/9cecd4b9b266692c31b813f6fcac553b/bfc80c103ee92291-a8/s400x600/d439cfdf050b53ca3f3d98745cb8487ab1d49932.jpg",
            artist: "Atena",
            audio: "https://www.mboxdrive.com/Blue%20Bird.mp3",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Sparkle",
            cover: "https://64.media.tumblr.com/760ef24fac824eb7dbdd8754a9fc0a6c/d7a3cd0ea6ca7a5c-08/s400x600/3e9b0699787ae79f035026e41b5b7f65ef86f833.jpg",
            artist: "Radwimps",
            audio: "https://www.mboxdrive.com/Sparkle.mp3",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Unravel",
            cover: "https://64.media.tumblr.com/b0967e0ca6b4b7dbf3507bf974ff8e82/666627f3d00d3670-3e/s400x600/722fa6c1a503fa38fcdf63f6715c516d901934d0.jpg",
            artist: "TK from Ling Tosite Sigure",
            audio: "https://www.mboxdrive.com/Unravel.mp3",
            id: uuidv4(),
            active: false,
        },
        /*
        {
            name: "",
            cover: "",
            artist: "",
            audio: "",
            id: uuidv4(),
            active: false,
        },
        */
    ]
}

export default getMusicData;