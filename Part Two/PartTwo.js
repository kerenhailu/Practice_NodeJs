const fs=require('fs');
// 13.	צרו בתיקיית הפרויקט שלכם קובץ txt  עם תוכן וקפדיה על סרט לבחירתכן/ם. צרו שרת שמאזין לפורט 8000 . בעת בקשה השרת יטען את הקובץ ויחזיר את תוכנו אל המשתמש
// fs.writeFile('MovieFile.txt','fron vikipadia on movie',()=>{});
require('./ServerClass.js')

// 15.	צרו בתיקיית הפרויקט שלכם קובץ txt  עם תוכן וקפדיה על עיר לבחירתכן/ם. צרו שרת שמאזין לפורט 8080 . בעת בקשה השרת יטען את הקובץ ויחזיר את תוכנו אל המשתמש, עבדו בצורה אסינכרונית.
// fs.writeFile('City.txt','fron vikipadia on city',()=>{});
require('./ServerCity.js')

// 16.	צרו בתיקיית הפרויקט שלכם קובץ json עם מערך של 5 שמות סרטים. צרו שרת שמאזין לפורט 9090 . בעת בקשה השרת יטען את הקובץ ויחזיר את תוכנו אל המשתמש, עבדו בצורה אסינכרונית.
// const FiveMovie=[ "patMan","sopeman","onePice","Snow White","storyToy"];
// fs.writeFile('FiveMovie.json',JSON.stringify(`${FiveMovie}`),()=>{});
require('./ServerFiveMovie.js')

// 17.	צרו בתיקיית הפרויקט שלכם קובץ json עם אובייקט של תוכי עם שדות: שם, מין, ארץ מוצא וצבע. צרו שרת שמאזין לפורט 9000 . בעת בקשה השרת יטען את הקובץ ויחזיר את תוכנו אל המשתמש, עבדו בצורה אסינכרונית.
const parrot={name:"koko",gender:"female",cantry:"israel",color:"black"}
// fs.writeFile('Parrot.json',JSON.stringify(`${parrot.name} , ${parrot.gender} , ${parrot.cantry} , ${parrot.color}`),()=>{});
require('./ServerParrot.js')

// 18.	צרו בתיקיית הפרויקט שלכם קובץ json שבתוכו מערך עם 5 אובייקטים של תוכי. צרו שרת שמאזין לפורט 2020 . בעת בקשה השרת יטען את הקובץ ויחזיר את תוכנו אל המשתמש, עבדו בצורה אסינכרונית
// const FiveParrot=[
//     {name:"koko",gender:"female",cantry:"israel",color:"black"},
//     {name:"lolo",gender:"male",cantry:"eee",color:"white"},
//     {name:"eden",gender:"male",cantry:"sfd",color:"red"},
//     {name:"shir",gender:"female",cantry:"sds",color:"blow"},
//     {name:"wowo",gender:"female",cantry:"www",color:"black"},
// ]
// fs.writeFile('FiveParrot.json',JSON.stringify(`${FiveParrot}`),()=>{});
require('./ServerFiveParrot.js')
// 


