const add= (a,b)=>{
    return a+b
}

console.log(add(5,4))

const user={
    name:"Nobel",
    cities:['Bangladesh','Dhaka'],
    printPlacesLived(){
        // this.cities.forEach((city)=>{
        //     console.log(`${this.name} has lived in ${city}`)});
        return this.cities.map((city)=> city )
    }
}
console.log(user.printPlacesLived())

const multiplier={
    numberList:[1,2,3],
    multiplyBy:3,
    multiply(){
        return this.numberList.map((number)=>number*this.multiplyBy)
    }
}
console.log(multiplier.multiply())