import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect, useParams} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Modal} from "@material-ui/core";
import {CardsModalForm} from "./CardsModalForm";
import {CardType, deleteCardThunk, getCardThunk, updateCardThunk} from "../../n1-main/m2-BLL/Redux/cards-Reducer";


interface ITableProps {
}


const useModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const useTableStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Cards: React.FC<ITableProps> = (props) => {

    const classesTable = useTableStyles();
    const classesModal = useModalStyles();

    //for modal window
    const [open, setOpen] = useState(false);

    let isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn)
    let cards = useSelector<RootState, CardType[]>(state => state.cardsPage.cards)
    let dispatch = useDispatch()
    const {id} = useParams<{id:string}>();

    useEffect(() => {
        dispatch(getCardThunk(id))
    }, [isLoggedIn])


    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalWindowStyle: CSSModule = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const body = (
        <div className={classesModal.paper} style={modalWindowStyle}>
            <h2>Data for new card</h2>
            <CardsModalForm handleClose={handleClose}/>
        </div>
    );


    return <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={modalWindowStyle}
        >
            {body}
        </Modal>

        <TableContainer component={Paper}>
            <Table className={classesTable.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Qestion</TableCell>
                        <TableCell align="center">Answer</TableCell>
                        <TableCell align="center">Grade</TableCell>
                        <TableCell align="center">Updated</TableCell>
                        <TableCell align="center">URL</TableCell>
                        <TableCell align="center">
                            <button onClick={handleOpen}>ADD cards</button>
                        </TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((row) => {

                        const deleteHandler = () => {
                            dispatch(deleteCardThunk(row._id, id))
                        }

                        const updateHandler = () => {
                            dispatch(updateCardThunk(row._id, id))
                        }

                        return <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row.question}
                            </TableCell>
                            <TableCell align="center">{row.answer}</TableCell>
                            <TableCell align="center">{row.grade}</TableCell>
                            <TableCell align="center">{row.updated}</TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">
                                <button onClick={updateHandler}>update</button>
                                <button onClick={deleteHandler}>delete</button>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}