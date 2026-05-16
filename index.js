

const arr =[1,2,3,4,5]
const users =[{id:1,name:"shravan",age:21},{id:2,name:"rahul",age:31}]

const newarray =users.map((user)=>
(user.id===2 ? {...user,age:10}:user)
)

console.log(newarray)