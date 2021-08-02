# byond-functions

Node.js module for making it easier to work with most `http://www.byond.com/` paths that support the `format=text` parameter, also helps in validating and checking availability of BYOND ckeys.

* [Installation](#installation)
* [Usage](#usage)
  * [Text to Object](#texttoobjecttext)
  * [Key Info](#keyinfockey)
  * [Developer Info](#developerinfoauthor-projectname)
  * [Game Info](#gameinfoauthor-gamename)
  * [Is Valid](#isvalidkey)
  * [Is Available](#isavailablekey)
* [License](#license)

## Installation
This is a Node.js module. Installation is done using

`npm install byond-functions`
<br/>
<br/>
## `textToObject(text)`
Converts a response text from a BYOND path using `format=text` as a parameter to a functional Javascript Object.
```javascript
const BYOND = require("byond-functions");

const text = `
general
	key = "John_egbert3"
	ckey = "johnegbert3"
	gender = "male"
	joined = "2019-09-01"
`
BYOND.textToObject(text) /* returns 
{
  general: {
    key: "John_egbert3",
    ckey: "johnegbert3",
    gender: "male",
    joined: "2019-09-01"  
  }
}
*/
```                                           


## `keyInfo(ckey)`
Returns a promise that resolves into a Javascript Object with information about a certain user.
```javascript
const BYOND = require("byond-functions");

(async ()=>{
    try{
        const res = await BYOND.keyInfo("Randy Sandy");
        return res;
    }catch(err){
        return err;
    }
})()/* returns Promise that resolves into
{
  general: {
    key: 'Randy Sandy',
    ckey: 'randysandy',
    gender: 'male',
    joined: '2011-04-01'
  }
}
*/
```   


## `developerInfo(author, projectName)`
Returns a promise that resolves into a Javascript Object about chosen project in the `http://www.byond.com/developer` path.
```javascript
const BYOND = require("byond-functions");

(async ()=>{
    try{
        const res = await BYOND.developerInfo("Dantom", "Your First World");
        console.log(res);
    }catch(err){
        console.log(err);
    }
})() /* returns Promise that resolves into
{
  general: {
    type: 'demo',
    title: 'Your First World',
    path: 'Dantom.YourFirstWorld',
    short_desc: 'A simple project to get you started.',
    long_desc: 'Begin your journey to DM wizardry. This simple project guides you through the first steps of using the Dream Maker compiler to build a multi-player world.<br>\\n<br>\\nThanks to LordAndrew for maintaining the tutorial.',
    author: 'Dantom',
    version: '6.1',
    date: '12/08/00',
    last_updated: '09/08/12',
    download_size: '41240',
    free_download: '1',
    downloads: '57874',
    listing: 'Listed',
    tags: [ 'beginner', 'source' ],
    fans: '238',
    screenshots: '0'
  }
}
*/
```


## `gameInfo(author, gameName)`
Returns a promise that resolves into a Javascript Object with information about a chosen game.
```javascript
const BYOND = require("byond-functions");

(async ()=>{
    try{
        const res = await BYOND.gameInfo("Lizard_Sphere_Z", "Dragon Universe");
        return res;
    }catch(err){
        return err;
    }
})()/* returns Promise that resolves into
{
  general: {
    type: 'game',
    title: 'Dragon Universe',
    path: 'Lizard_Sphere_Z.DragonUniverse',
    short_desc: "A limitless sandbox� with roots derived from the classic hit series: 'Dragon Ball Z'� the game is a blend of high-paced combat and strategic maneuvering.",
    long_desc: `A limitless sandbox, with roots derived from the classic hit series: 'Dragon Ball Z', the game is a blend of high-paced combat and strategic maneuvering. Whether it be ascending to the throne as the first Super Saiyan, calling on the Dragon Balls, or even achieving peak Ultra Instinct, players can freely decide their fate.<br>\\n<br>\\nYou can choose from a dozen of races ranging from Saiyans, Bio-Androids, Humans� and even Demigods. Rise to the challenge, clash with other players in a battle of both skill and builds, inflate your power level through RPG Mechanics, and set the tone for others.<br>\\n<br>\\n<strong>EXCITING 2D ACTION</strong><br>\\nWith the foundation built from simple, easy-to-learn controls and 2D graphics, they build the way for free-flowing and fast-paced combat.<br>\\n<br>\\n<strong>OVER 100 TECHNIQUES</strong><br>\\nFrom iconic techniques like the Kamehameha� to the Hundred Crack Fist, players can rightfully achieve over a centennial number of skills. Melee combat, wrestling throws, Ki-oriented blasts & beams, etc.<br>\\n<br>\\n<strong>PLAY WITH & AGAINST OTHER PLAYERS</strong><br>\\nMay the best man win as you're pitted against players and vie for the; every man competing against another. However, that doesn't mean you can't team up with select others to achieve shared interests.<br>\\n<br>\\n<strong>TRAIN YOUR CHARACTER</strong><br>\\nIncrease your power levels through RPG-like mechanics provided in the game. Higher power levels indicating higher strength. However, that doesn't mean that skill and stat-builds don't play a factor. Experiment with new techniques, new ideas, and carve yourself as one of the best.<br>\\n<br>\\n<strong>EXPERIENCE DRAGON BALL Z</strong><br>\\nWhether Saiyan or Human, the game is inspired purely off of Dragon Ball Z, elements from the show demonstrated in-game.<br>\\n<br>\\nAnd of course, have fun!<br>\\n<br>\\nJoin the discord for more info: <a href=\\"https://discord.gg/pyzgxEY\\">https://discord.gg/pyzgxEY</a><br>\\n<br>\\nLooking for roleplay? Join the RP Discord:<br>\\n<a href=\\"https://discord.gg/dAhXWC4\\">https://discord.gg/dAhXWC4</a><br>\\n<br>\\nNew to the game? Join the official guide server:<br>\\n<a href=\\"https://discord.gg/FFs2P64JbG\\">https://discord.gg/FFs2P64JbG</a><br>\\n<br>\\n<img src=\\"https://cdn.discordapp.com/attachments/762182224971038720/762195754676256768/BEA0fP.png\\" width=\\"600\\" height=\\"500\\"><br>`,
    author: 'Lizard_Sphere_Z',
    version: '1',
    icon: 'http://www.byond.com/games/hubicon/112401.png',
    small_icon: 'http://www.byond.com/games/hubicon/112401_s.png',
    multi_player: '1',
    date: '06/08/20',
    last_updated: '06/07/21',
    last_played: '08/01/21',
    listing: 'Fangame',
    fans: '1590',
    screenshots: '4',
    video: 'https://youtu.be/7dr0nABlGNM'
  },
  'world/1': {
    url: 'byond://BYOND.world.704439347',
    server_version: '513',
    status: '<strong>Dragon Universe</strong>: Fresh Wipe: (01/08/2021)',
    players: [
      'DraknesBR',            'Hitsuno',
      'Sora459',              'Gokusssj5',
      'Lirril',               'Zoe kagome',
      'Mentalplanck squared', 'IvanLSSJ',
      'Criiss1236',           '111tttt',
      'Leo9623',              'Mar162',
      'Arekugo',              'AccountName110',
      'SlateSkin',            'Parway1',
      'DixieNormousDBN',      'Fartbuttass',
      'Skyline21',            'Unidimes',
      'Xxfade_',              'Qwekscoper',
      'Dipper Matsu',         'Zaygki2',
      'NoMatic',              'SonKakarotto'
    ],
    guests: '4'
  }
}
*/
```


## `isAvailable(key)`
Checks if a key does not exists within BYOND, not the same as `isValid`.
Returns true or false.
```javascript
const BYOND = require("byond-functions");

(async ()=>{
    await BYOND.isAvailable("Randy Sandy"); //promise will resolve with false, the key already exists
    await BYOND.isAvailable("asodasodalksdjaksd"); //promise will resolve with true, the key doesnt exist yet
})()
```


## `isValid(key)`
Checks if a key would be acceptable in BYOND registration, not the same as `isAvailable`.
Returns true or false.
```javascript
const BYOND = require("byond-functions");

BYOND.isValid("exadv1") //returns true
BYOND.isValid("zx.zx.zx.zx") //returns false 
```

# License
[MIT](https://opensource.org/licenses/MIT)
