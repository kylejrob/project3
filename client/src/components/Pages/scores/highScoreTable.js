import React from "react"
import scores from "./scoredata.json";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';



const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  

export default class ScoreTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allscores: scores
        }
    };

    render() {
        return (
            <div>
            <div className="tableHighScores">
            
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID#&nbsp;</StyledTableCell>
                        <StyledTableCell> username&nbsp;</StyledTableCell>
                        <StyledTableCell>score</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.allscores.sort((a, b) => b.score - a.score)
                            .map(props => (
                                <TableRow key={props.id}>
                                    <TableCell>{props.id}</TableCell>
                                    <TableCell>{props.username}</TableCell>
                                    <TableCell>{props.score}</TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>
            </div> 
            <div className="videoHolder">
                <p>lorem ipsum</p>
            </div>
            </div>
        )
    }
};
