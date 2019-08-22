import React from "react"
import scores from "./scoredata.json";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import VideoGrid from "./Video"
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



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
            scoreHigh: null
        }
    };
    componentDidMount(){
    
        this.scoreHigh()

    }

    scoreHigh(){
        axios.get('user/scorehigh').then(response =>{
      
            console.log('hi');

        })



    }


    render() {
        return (
            <body>
                <Grid container spacing={1}>
                    <Grid item xs={4}>

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
                                    
                                                <TableRow >
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            
                                    
                                </TableBody>
                            </Table>



                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="videoHolder">
                            <VideoGrid />
                        </div>
                    </Grid>
                </Grid>
            </body>
        )
    }
};
