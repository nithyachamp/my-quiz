class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write the code here to hide question element
   Question.hide();

    //write code to change the background color here
background(rgb(198,135,103))
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
if(allContestants !== undefined){

  fill ("Blue");
  textSize(20);
  text("*NOTE:Contestant who answered corect are highlighted in green colour!",130,230)
}
for(var plr in allContestants){

  var correctAnwer = "2";
  if(correctAns === allContestant[plr].answer)
  fill ("Green")
  else
  fill ("red")
}
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
