let parentDiv = document.getElementById("parent");
let cardsInfos = [
  { imgUrl: "1.webp", title: "398,000₮", text: "hi" },
  {
    imgUrl: "2.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },
  {
    imgUrl: "3.webpg",
    title: "398,000₮",
    text: "hi",
  },
  {
    imgUrl: "4.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },
  {
    imgUrl: "4.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },

  {
    imgUrl: "4.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },
  {
    imgUrl: "4.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },
  {
    imgUrl: "4.webp",
    title: "1.5 сая ₮",
    text: "hi",
  },
];
let cards = "";
for (let i = 0; i < cardsInfos.length; i++) {
  let card = `<div class="card">
    <h2>${cardsInfos[i].title}</h2>
    <div class="card-body">
    <img src="${cardsInfos[i].imgUrl}" alt=""/>

    </div><div class="card-footer">
    </div></div>`;
  cards = cards + card;
}
parentDiv.innerHTML = cards;

// let parentDiv = document.getElementById("parent");
// let cardsInfo = [
//   {
//     title: "123",
//     text: "zxc",
//     imgUrl:
//       "https://ih1.redbubble.net/image.1918506382.9629/st,small,507x507-pad,600x600,f8f8f8.jpg",
//   },
//   {
//     title: "456",
//     text: "vbn",
//     imgUrl:
//       "https://ih1.redbubble.net/image.1918506382.9629/st,small,507x507-pad,600x600,f8f8f8.jpg",
//   },
//   {
//     title: "789",
//     text: "ghj",
//     imgUrl:
//       "https://ih1.redbubble.net/image.1918506382.9629/st,small,507x507-pad,600x600,f8f8f8.jpg",
//   },
// ];
// let cards = "";
// for (let i = 0; i < cardsInfo.length; i++) {
//   let card = `
//     <div class="card">
//         <h2> ${cardsInfo[i].title}</h2>
//         <p> ${cardsInfo[i].text}</p>
//         <div class="card-body">
//             <img src="${cardsInfo[i].imgUrl}" alt="">
//         </div>
//       </div>`;
//   cards = cards + card;
// }
// parentDiv.innerHTML = cards;
