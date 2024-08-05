// for loop
//gifts
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

for (let i = 0; i < gifts.length; i++) {
  wrapGift(gifts[i]);
}

//thank you card creator
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
   //Example usage
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

//while loop
//count down
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage
  countDown(10);
  
  
  

