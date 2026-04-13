let std = ["Yaqoob", "Saad", "Tahir", "Yousof", "Hassan", "Ahmed"];
for (let i = 0; i < std.length; i++) {
    if(std[i]==="Saad" || std[i]==="Yousof"){
        continue;
    }
    console.log(std[i]);
}