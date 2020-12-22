import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {CardPackType, setDataThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";


interface ITableProps {
}


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Packs: React.FC<ITableProps> = (props) => {

    const classes = useStyles();

    let isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn)
    let cardPacks = useSelector<RootState, CardPackType[]>(state => state.packsPage.cardPacks)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDataThunk())
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">CardsCount</TableCell>
                        <TableCell align="center">Update</TableCell>
                        <TableCell align="center">link</TableCell>
                        <TableCell align="center">
                            <Button>add</Button>
                        </TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cardPacks.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.cardsCount}</TableCell>
                            <TableCell align="center">{row.updated}</TableCell>
                            <TableCell align="center">{row.path}</TableCell>
                            <TableCell align="center">
                                <button>add</button>
                                <button>delete</button>
                            </TableCell>
                            <TableCell align="center">
                                <NavLink to={'/cards'}>cards</NavLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}