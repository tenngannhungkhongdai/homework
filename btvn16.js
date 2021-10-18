let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]

var a=prompt('tuoi')
var b=0
while(b<student.length){
    if(student[b].age==a){
        break
    }
    else{b++}
}
if(b==student.length){
    alert('no')
} 
else{console.log(student[b])}

let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

var a=0
while(a<5){
    if(arr1[a]>3){
        console.log(arr1[a])
    }
    if (arr2[a]>3){
        console.log(arr2[a])
    }
    a++
}

var b=0
while(b<4){
    arr1.push(arr2[b])
    b++
}
console.log(arr1)

var c=0
var arr=[]
while(c<5){
    arr.push(arr1[c])
    if(c<4){
        arr.push(arr2[c])
    }    
    c++
}
console.log(arr)