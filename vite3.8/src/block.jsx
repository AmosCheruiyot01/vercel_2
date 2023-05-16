import Disp from "./block_dis"
const Desc = [
    {
        name: "max",
        nat:"france",
        team: "red bull"
    },
    {
        name: "lewis",
        nat:"British",
        team: "mercedes"
    },
   
    {
        name:"nick devris",
        nat:"dutch",
        team:"haas"
    },
    {
        name:"carlos saints",
        nat:"italy",
        team:"ferarri"
    },
    {
        name:"Oscar piastri",
        nat:"italy",
        team:"mcclaren"
    },
    {
        name:"checo perez",
        nat:"mexico",
        team:"red bull"
    },
    
]

const Looper = () =>{
   return( Desc.map(function(e){
    return <Disp name ={e.name} team={e.team} nationality = {e.nat}/>
        }))
}
export default Looper;