const getBMI = function(weightInKG, heightInMt){
    try {
       return weightInKG / (heightInMt * heightInMt);
   } catch (error) {
        return "Plese provide valid input.";
   }
}

export{
    getBMI
};