const giveWetFood = () => {
    console.log('Here you go, have some nice tasty dinner!');
  }
  
  const giveDryFood = () => {
    console.log('I know not everyday is a party, have some dry cat food!');
  }
  
  const giveCandy = () => {
    console.log('Here you go, don\'t you love a treat?');
  }
  
  const decideWhatFoodToGive = () => {
    const foodTypes = ['wet', 'Dry', 'candy'];
    // Math.random provide a random number betweeon 0 and 1, we multiply by 3 and use floor to get a number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3); // returns either 0, 1 or 2 which is the index for the foodType to get

    // when comparing strings, alway make sure to do either toLowerCase or toUppperCase, because Dry !== dry
    const foodToGive = foodTypes[randomIndex].toLowerCase();
    console.log(`Selected food: ${foodToGive}`)

    // write your decision logic here
  }

  decideWhatFoodToGive();