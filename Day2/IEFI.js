// IEFE//


(function gulu() {

  
    console.log(`Mango DB connedted`);

})();

( () => {
    console.log(`Express server started`);
} )();

( () => {
    console.log(`React App started`);
} )();

(() => {
  let x = 10;
  console.log(x);
})();
console.log(typeof x);
