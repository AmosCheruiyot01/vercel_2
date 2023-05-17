const Disp = ({name, team, nationality}) =>{
    return(
       <div className="desc_blocks hover">
<h3>NAME: {name}</h3>
<p> TEAM:{team}</p>
<p>{nationality}</p>
       </div> 
    )
}

export default Disp;