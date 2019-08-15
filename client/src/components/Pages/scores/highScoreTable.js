import React from "react"
import scores from "./scoredata.json";
import {Table} from "reactstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class ScoreTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allscores: scores
        }
    };

    render() {
        return (
            
            <Table dark hover >
                <thead>
                    <tr>
                        <th>ID#&nbsp;</th>
                        <th> username&nbsp;</th>
                        <th>score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.allscores.sort((a, b) => b.score - a.score)
                            .map(props => (
                                <tr key={props.id}>
                                    <td>{props.id}</td>
                                    <td>{props.username}</td>
                                    <td>{props.score}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
            
        )
    }
};
