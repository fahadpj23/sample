var userdata=[
    {
       id:"1", name:"fahad",profileimg:"/catgry0.png",username:"username" ,password:"1234"      
    },
   
]

export default async(req, res)=>{
    res.status(200).json({userdata:userdata,status:200})
    }