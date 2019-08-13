import React from "react"
import scores from "./scoredata.json";

class ScoreTable extends React.Component{
    constructor(props){
super(props)
this.state ={
    allscores: scores
}
    }; 
     
render(){
    return(
        <table id="scoretable">
            <thead>
                <tr>
                    <th>ID#&nbsp;</th>
                    <th> username&nbsp;</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.allscores.sort((compare,next) =>next.singlescore-compare.singlescore)
                    .map(props =>(
                        <tr key={props.id}>
                          <td>{props.id}</td> 
                          <td>{props.username}</td>  
                          <td>{props.score}</td> 
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    )
            } 
};
export default ScoreTable;
