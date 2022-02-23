const fs=require('fs');
// 2.	צרו קובץ JS , בתוכו, רוצו בלולאה 10 פעמים והדפיסו מספרים אי-זוגייים החל מ 0.
// for (let i = 0; i < 10; i++) {
//     let randomA= Math.floor(Math.random()*11)
//     if(randomA%2==0){
//         console.log(randomA);
//     }
// }

// 3.	צרו מערך של 16 מספרים רנדומליים מ 0 עד 10 והדפיסו רק את הזוגיים.
// let arrayRandom=[];
// for (let i = 0; i < 16; i++) {
//     let randomA= Math.floor(Math.random()*11)
//     arrayRandom.push(randomA)
// }
// console.log(arrayRandom);

// 4.	אתגר - צרו אובייקט של ילד עם שדות: שם, גיל והאם בגן, והדפיסו לקובץ JSON.
// let Child={nameChild:"keren",Age:23,IsKindergarten:true}
// let JsonChild=JSON.stringify(Child);
// fs.writeFile('childJjson.json',`${JsonChild}`,()=>{})

// 5.	צרו מערך של 5 ילדים שונים והדפיסו לקובץ טקסט, לאחר מכן קראו את המידע מהקובץ והדפיסו רק את הילדים שבגן.
// מדפיס לי רק אובייקט אחד לקובץ
// let arrayChildren=[
//     {nameChild:"keren",Age:23,IsKindergarten:true},
//     {nameChild:"tikva",Age:26,IsKindergarten:true},
//     {nameChild:"shirel",Age:13,IsKindergarten:false},
//     {nameChild:"agam",Age:10,IsKindergarten:false},
//     {nameChild:"eyal",Age:21,IsKindergarten:true}
// ]

// arrayChildren.forEach(child => {
//     fs.writeFile('ChildrenArray.txt',`
//      ${child.nameChild}  ${child.Age} ${child.IsKindergarten} `,()=>{});
// })

// 7.	צרו מערך של 100 מספרים רנדומליים מ 0 עד 100 והדפיסו לקובץ רק את המספרים שמתחלקים ב 7, לאחר מכן קראו את המידע מהקובץ והדפיסו רק את המספרים שגדולים מ 50.
// let ArrayOneHundred=[];
// let ArrayUpFifty=[];
// for (let i = 0; i < 100; i++) {
//     let randomNum= Math.floor(Math.random()*101)
//     ArrayOneHundred.push(randomNum);
//     if(ArrayOneHundred[i]>50){
//         ArrayUpFifty.push(ArrayOneHundred[i])
//         fs.writeFile('ArrayOneHundred.txt',`${ArrayUpFifty}`,()=>{})
//     }
// }

// 9.	צרו מחלקה של אירועים, צרו פונקציה מאזינה שמקבלת שם קובץ ומדפיסה אליו הודעה שהיא בהאזנה וקראו לה בבנאי, ייבאו מופע של המחלקה באינדקס והפעילו את האירוע.
// fs.writeFile('ToclassEvent.txt','a',()=>{})
// require('./ClassEvent.js')

// 10.	צרו מחלקה של אירועים, צרו פונקציה מאזינה שמקבלת שם קובץ ומידע ואז מדפיסה לקובץ את המידע וקראו לה בבנאי, ייבאו מופע של המחלקה באינדקס והפעילו את האירוע.
// fs.writeFile('classAskTen.txt','TXT FOR ASK TEN',()=>{})
// require('./ClassAskTen.js');

// 11.	אתגר - צרו מחלקה של אירועים, צרו פונקציה מאזינה שמקבלת מערך של שמות ומדפיסה לקובץ JSON את השמות וקראו לה בבנאי, ייבאו מופע של המחלקה באינדקס והפעילו את האירוע.
// const ask11=require('./EventClass11.js')
// ask11.funEmit();

