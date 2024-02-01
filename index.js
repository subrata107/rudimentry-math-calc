let score=0;
document.getElementById("btn-Start").onclick = function(){
    
            document.getElementById("Judges-rulling").innerHTML= "";
            document.getElementById("Judges-rulling-incorrect").innerHTML= "";
            document.getElementById("btn-Start").innerHTML="Next"
            let result=0; 
            
            //determines any decimal# between 0-1
            let determiner = Math.random();
            console.log("determiner",determiner);     

            //group one - addition
            let btn_two = Number((Math.random()*7).toFixed(2));
            let btn_twelve = Number((Math.random()*9).toFixed(2));
            document.getElementById("btn-two").innerHTML = btn_two;  
            document.getElementById("btn-twelve").innerHTML = btn_twelve; 

            //group two - multiplication
            let btn_three = (Math.random()*13).toFixed(2);
            let btn_thirteen = (Math.random()*17).toFixed(2);
            document.getElementById("btn-three").innerHTML = btn_three;  
            document.getElementById("btn-thirteen").innerHTML = btn_thirteen;  

            //group three - division
            let btn_four = (Math.random()*17).toFixed(2);
            let btn_fourteen = (Math.random()*14).toFixed(2);
            document.getElementById("btn-four").innerHTML = btn_four;  
            document.getElementById("btn-fourteen").innerHTML = btn_fourteen;  

            //group four - subtraction
            let btn_five = (Math.random()*29).toFixed(2);
            let btn_fiveteen = (Math.random()*27).toFixed(2);
            document.getElementById("btn-five").innerHTML = btn_five;  
            document.getElementById("btn-fiveteen").innerHTML = btn_fiveteen;  

            
            if(determiner>=0 && determiner <=0.20){
                result=(btn_two + btn_twelve).toFixed(2);
                document.getElementById("output").innerHTML = result;  
                console.log("addition")
                console.log("output", result);

                document.getElementById("btn-two").onclick = function (){
                    document.getElementById("btn-twelve").onclick =  function (){
                        document.getElementById("Judges-rulling-incorrect").innerHTML= ""
                        document.getElementById("Judges-rulling").innerHTML= "You are Correct!!  Click on 'Next";
                        score+=5;
                   }
                }
                document.getElementById("btn-three").onclick = function (){
                    document.getElementById("btn-thirteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
                document.getElementById("btn-four").onclick = function (){
                    document.getElementById("btn-fourteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
                document.getElementById("btn-five").onclick = function (){
                    document.getElementById("btn-fiveteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }


            }

            else if(determiner>=0.21 && determiner <=0.40){
                result=(btn_three * btn_thirteen).toFixed(2);
                document.getElementById("output").innerHTML = result; 
                console.log("multiplication")
                console.log("output", result);

                document.getElementById("btn-two").onclick = function (){
                    document.getElementById("btn-twelve").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                   }
                }
                document.getElementById("btn-three").onclick = function (){
                    document.getElementById("btn-thirteen").onclick =  function (){
                        document.getElementById("Judges-rulling-incorrect").innerHTML= ""
                        document.getElementById("Judges-rulling").innerHTML= "You are Correct!!  Click on 'Next";
                        score+=5;
                    }
                }
                document.getElementById("btn-four").onclick = function (){
                    document.getElementById("btn-fourteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
                document.getElementById("btn-five").onclick = function (){
                    document.getElementById("btn-fiveteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
            }    
            else if(determiner>=0.41 && determiner <=0.60){
                    result=(btn_four / btn_fourteen).toFixed(2);
                    document.getElementById("output").innerHTML = result; 
                    console.log("division")
                    console.log("output", result);

                    document.getElementById("btn-two").onclick = function (){
                        document.getElementById("btn-twelve").onclick =  function (){
                            document.getElementById("Judges-rulling").innerHTML= "";
                            document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                            score-=2.5;
                       }
                    }
                    document.getElementById("btn-three").onclick = function (){
                        document.getElementById("btn-thirteen").onclick =  function (){
                            document.getElementById("Judges-rulling").innerHTML= "";
                            document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                            score-=2.5;
                        }
                    }
                    document.getElementById("btn-four").onclick = function (){
                        document.getElementById("btn-fourteen").onclick =  function (){
                            document.getElementById("Judges-rulling-incorrect").innerHTML= ""
                            document.getElementById("Judges-rulling").innerHTML= "You are Correct!!  Click on 'Next";
                            score+=5;
                        }
                    }
                    document.getElementById("btn-five").onclick = function (){
                        document.getElementById("btn-fiveteen").onclick =  function (){
                            document.getElementById("Judges-rulling").innerHTML= "";
                            document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                            score-=2.5;
                        }
                    }
            }   
            else {
                result=(btn_five - btn_fiveteen).toFixed(2);
                document.getElementById("output").innerHTML = result; 
                console.log("subtraction")
                console.log("output", result);

                document.getElementById("btn-two").onclick = function (){
                    document.getElementById("btn-twelve").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                   }
                }
                document.getElementById("btn-three").onclick = function (){
                    document.getElementById("btn-thirteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
                document.getElementById("btn-four").onclick = function (){
                    document.getElementById("btn-fourteen").onclick =  function (){
                        document.getElementById("Judges-rulling").innerHTML= "";
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "You are Wrong !!";
                        score-=2.5;
                    }
                }
                document.getElementById("btn-five").onclick = function (){
                    document.getElementById("btn-fiveteen").onclick =  function (){
                        document.getElementById("Judges-rulling-incorrect").innerHTML= "";
                        document.getElementById("Judges-rulling").innerHTML= "You are Correct!!  Click on 'Next'";
                        score+=5;
                        
                    }
                }
            }   
            // else {
            //     result=btn_three * btn_thirteen;
            //     document.getElementById("output").innerHTML = result; 
            // }
            document.getElementById("final-score").innerHTML = score;
            console.log("final output", result);

     }


