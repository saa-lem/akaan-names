function getAkanName(){
  var name = document.getElementById("personName").value;
  var birthday = document.getElementById("personBirthday").value;
  console.log(birthday)
  var birthday = Array.from(birthday);
  var CC =birthday.slice(2,4);
  var YY =birthday.slice(0,2);
  var month =birthday.slice(5,7);
  var date =birthday.slice(8,10);
  var CC = CC.join ('');
  var YY = YY.join ('');
  var month =month.join('');
  var date = date.join('');
  var YY =parseInt(YY);
  var CC =parseInt(CC);
  var MM =parseInt(month);
  var DD =parseInt(date);
  var d =(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
  d = Math.floor(d);
  d = Math.abs(d);
  var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
  var maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  if (d===d)
  if(document.getElementById("male").checked){
     document.getElementById("output").innerHTML =(name +"your Akan name is" +  maleAkanNames[d] + "and you were born on a" + days[d] + ".");
  }else if (document.getElementById("female").checked){
     document.getElementById("output").innerHTML =(name +"your  Akan name is" + femaleAkanNames[d] + "and you were born on a" + days[d] + ".");
  }else{
    alert("Choose a gender.")
  }
  else{
    alert("Input your birthday!")
  }
}
