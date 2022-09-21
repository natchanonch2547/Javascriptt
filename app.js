function calculate(){
    var ans = 0
    var price = 0
    var amw = document.getElementById("Amoutwat").value;
    var ameqm = document.getElementById("Amouteqm").value;
    var amhr = document.getElementById("Amouthr").value;
    ans = (amw) * ameqm /1000*amhr
    price = ans * 4.28
    document.getElementById("answer").innerHTML = "จำนวนหน่วยที่ใช้ : " + ans.toFixed(2) + " ยูนิต"+ " <br> " + "ราคาค่าไฟที่ต้องจ่าย : " + price.toFixed(2) +" บาท"


}






