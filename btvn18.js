// var arr1=[1,2,4,0]
// let arr2=arr1
// var arr1=[1,3,5,7]
// alert(arr1)
// alert(arr2)

// var array1 = [1,0,2,3,4]
// var array2 = [3,5,6,7,8,13]
// var array3=[]
// var a=array1[5]+array2[5]
// if(array1.length<array2.length){
//     var i=array2.length-array1.length
//     while(i>0){
//         array1.push(0)
//         i--
//     }
// }
// else if(array2.length<array1.length){
//     var i=array1.length-array2.length
//     while(i>0){
//         array2.push(0)
//         i--
//     }
// }
// for(a=0;a<array1.length;a++){
//     array3.push(array1[a]+array2[a])
// }
// alert(array3)

// var array1 = [1, 2, 3]
// var array2 = [2, 30, 1]
// var array3 = []
// for(a=0;a<array1.length;a++){
//     if(array3.includes(array1[a])==false){array3.push(array1[a])}
//     if(array3.includes(array2[a])==false){array3.push(array2[a])}
// }
// alert(array3)

function dongho(){
    var gio = new Date().getHours()
    if(gio<10){gio=`0${gio}`}
    var phut = new Date().getMinutes()
    if(phut<10){phut=`0${phut}`}
    var giay = new Date().getSeconds()
    if(giay<10){giay=`0${giay}`}
    var thoigian=`time:${gio}:${phut}:${giay}`
    document.getElementById('time').innerHTML=thoigian
}
setInterval(dongho,1000)