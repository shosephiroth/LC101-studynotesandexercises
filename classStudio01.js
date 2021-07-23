//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores)
  {
    this.name = name; 
    this.mass = mass; 
    this.scores= scores;
    this.status = function(){
      let myAverage = this.average();
      if(myAverage >= 90){

      let candidateStatus ="Accepted";

      return candidateStatus;
      } else if(myAverage <= 89 && myAverage >=80){
      let candidateStatus = "Reserved";
      return candidateStatus;
      }
      else if(myAverage <= 79  && myAverage >= 70){
        let candidateStatus = "Probationary";
        return candidateStatus;

  
      } else{
        let candidateStatus = "Rejected";
        return candidateStatus;
      }
    }
    statusStatement = `${this.name} has earned an average test score of ${this.averageScore} and has a status of ${this.candidateStatus}`;
  }


  addScore (newScore) {
      
      this.scores.push(newScore); 

    }


  average(){
    let averageScore=0; 
    for (let i=0; i<this.scores.length; i++){
      averageScore += this.scores[i]; 
    }
    averageScore = averageScore/this.scores.length; 
    return Math.round(averageScore*10)/10; 
  }

  

}

let bubba = new CrewCandidate ('Bubba Bear', 135, [88,85,90]); 
let merry = new CrewCandidate ('Merry Maltese', 1.5, [93,88, 97]); 
let glad = new CrewCandidate ('Glad Gator', 225, [75,78,62]);

console.log(bubba); 
bubba.addScore(83);
console.log(bubba.average());
console.log(bubba);
console.log(merry); 
console.log(glad); 
console.log(bubba.status());



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.


//Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
//Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
//Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.


