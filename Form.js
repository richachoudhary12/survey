class Form{

constructor(){

this.heading = createElement("h1","A Survey To Bring About A Change");

this.question1 = createElement("h2","What Is Your Name?")
this.answer1 = createInput();
this.button1 = createButton("NEXT");
this.question1.position(300,130);
this.answer1.position(600,220);
this.button1.position(600,250);

}

display(){
this.heading.position(290,20);

this.question1.position(200,130);
this.answer1.position(600,220);
this.button1.position(600,250);

this.button1.mousePressed(()=>{
this.question1.hide();
this.answer1.hide();
this.button1.hide();

this.question2 = createElement("h2","Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
this.radio1 = createRadio();
this.radio1.option("Yes");
this.radio1.option("No");
this.button2 = createButton("NEXT");
this.question2.position(300,130);
this.radio1.position(300,200);
this.button2.position(600,250);


this.button2.mousePressed(()=>{
this.question2.hide();
this.radio1.hide();
this.button2.hide();

this.question3 =  createElement("h2","Would you be willing to contribute a small amount every month for such a program?")
this.radio2 = createRadio();
this.radio2.option("Yes");
this.radio2.option("No");
this.button3 = createButton("NEXT");
this.question3.position(300,130);
this.radio2.position(450,200);
this.button3.position(600,250);

this.button3.mousePressed(()=>{
this.question3.hide();
this.radio2.hide();
this.button3.hide();

this.question4 = createElement("h2","How much per month would you be willing to pay?  ")
this.radio3 = createRadio();
this.radio3.option("100");
this.radio3.option("500");
this.radio3.option("1000");
this.radio3.option("More")
this.button4 = createButton("NEXT");
this.question4.position(450,130);
this.radio3.position(450,230);
this.button4.position(600,250)

this.button4.mousePressed(()=>{
this.question4.hide();
this.radio3.hide();
this.button4.hide();

this.question5 = createElement("h2","Thank you for sharing your views!!!!");
this.question5.position(450,130);
})

})

})

})

}

}


