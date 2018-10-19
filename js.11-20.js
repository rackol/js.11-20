//11 firstLast6
function firstLast6(array){
    var lastNumber=array[array.length-1];
    var firstNumber=array[0];
    var answer="";
    if (lastNumber==6||firstNumber==6){
        return true;
    }else{
        return false;
    }
}

//12 has_23
function has23(array){
    if(array.includes(2)||array.includes(3)){
        return true;
    }else{
        return false;
    }
}

//13 fix23
function has23(array){
    var answer="";
    if(array[0]==2 && array[1]==3) {
        answer = answer + array[0] + ",0," + array[2];
    }else if (array[1]==2 && array[2]==3){
        answer=answer+array[0]+","+array[1]+",0";
    }
    return answer;
}

 //14 countYZ


function countYZ(string){
    var count = 0;
    string= string.toLowerCase()
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " " && (string[i - 1] == "y" || string[i - 1] == "z")) {
            count++;
        }
    }
    if (string[string.length - 1] == "y" || string[string.length - 1] == "z") {
        count++;
    }
    return count;
}

//15 End Other
function endOther (x,y) {
    y = y.toLowerCase()
    x = x.toLowerCase()
    if (y.endsWith(x) || x.endsWith(y)) {
        return true;
    } else {
        return false;
    }
}

// 16starOut
function starOut (string){
    var answer="";
        for (var i=0; i<string.length; i++){
            if (string[i]!="*" && string[i-1]!="*" && string[i+1]!="*"){
              answer= answer + string[i];
            }
        }
    return answer;
}


// 17 getSandwich
function getSandwich(string){
    var answer="";
    var a= string.indexOf("bread")+5;
    var b= string.lastIndexOf("bread");
    if (string.indexOf("bread")!=b){
        var c = string.substring(a,b);
        answer=answer+c;
    }
    return answer;
}

//18 canBalance
function canBalance(array){
    var answer=false;
    for (var i=0;i<array.length;i++){
        count=0;
        var a=0;
        var b=0;
        for (var c=0;c<=i;c++){
            a+=array[c];
            count+=1;
        }
        for (var d=count;d<array.length;d++){
            b+=array[d];
        }
        if(a==b){
            answer=true;
        }
        }
        return answer;
}

//19 countClumps
function countClumps(array){
    var answer=0;
    for (var i=0;i<array.length;i++){
        if (array[i]==array[i-1] && array[i]!=array[i+1]){
            answer=answer+1;
        }if (array[i] ==array[array.length] && array[i]==array[i-1]){
            answer=answer+1;
        }
    }
    return answer;
}

//20 evenlySpaced
function evenlySpaced(a,b,c){
    var answer=false;
    var max=Math.max(a,b,c);
    var min=Math.min(a,b,c);
    var other=(max+min)/2;
    if (other==a||other==b||other==c){
        answer=true;
    }
    return answer;
}

function tester(){
    document.getElementById("output").innerHTML+=evenlySpaced(4, 6, 3);

}



















