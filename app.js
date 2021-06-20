

var name = prompt(" Hello , what is  your name?")


alert ("welcom to fantasy moblie website " +name )
  
  function favmoblie(){
  
  var x = prompt("what is your fav type of moblie from these (Samsung, iphon ,HUAWEI)?")

 
while (x != "samsung" && x != "iphon" && x != "HUAWEI" )
{   
 x = prompt(" Sorry ! you entered wrong input please try again (samsung, iphon ,HUAWEI)  ")
} 
if (x == "samsung"){
if(x ==  "samsung"){var numofpic = prompt (" How many samsung do you want to see at our site ?")}

for (var m= 1; m<= numofpic; m++)
{
  document.write("<p>"+"great thing you love  Samsung becuase is easy use" +"</p>" +'<div>'+'<h3>'+'Samsung'+'</h3>'+"<img src='https://images.samsung.com/is/image/samsung/assets/ae_ar/p6_gro3/p6_initial_pcd/p6_initial_smartphones/All_PCD_Smartphones_720X752_module_1.png?$720_N_PNG$'</div>")
  }	
}
  else if(x == "iphon"){
    if(x ==  "iphon"){var numofpic = prompt (" How many iphon do you want to see at our site ?")}

for (var m= 1; m<= numofpic; m++){
  document.write("<p>"+"great thing you love  iphon becuase is smart phone to use" +"</p>" +'<div>'+'<h3>'+'iphon'+'</h3>'+"<img src='https://media.voltron.alhurra.com/Drupal/01live-106/2020-09/960x0%20%281%29.jpg'</div>")
}
  }
  

   else if( x =="HUAWEI"){
     if(x ==  "HUAWEI"){var numofpic = prompt (" How many HUAWEI do you want to see at our site ?")}

for (var m= 1; m<= numofpic; m++)
{
  document.write("<p>"+"great thing you love HUAWEI becuase is easy phone to use" +"</p>" +'<div>'+'<h3>'+'iphon'+'</h3>'+"<img src='https://static.huaweieshop.jo/uploads/thumbs/73/7307dd71f1c6ea0416f4375ac469eb65.jpg'</div>")
   }
   }
  
else{ alert("sorry we don't have this type")}
  
 

var starsnum = prompt('how many stras do you rate websit ?')
      

function rating(num){

        for (var i =0 ; i< num; i++){

      
    document.write("<img src= https://static4.depositphotos.com/1026550/376/i/950/depositphotos_3763236-stock-photo-gold-star.jpg")
        


  
      
}
}


rating(starsnum);

  }
  favmoblie();



alert("Thank you for visiting my website")
  