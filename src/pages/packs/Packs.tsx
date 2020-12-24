import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {CardPackType, setDataThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Modal} from "@material-ui/core";
import {PacksModalForm} from "./PacksModalForm";


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

export const Packs: React.FC<ITableProps> = (props) => {

    const classesTable = useTableStyles();
    const classesModal = useModalStyles();

    //for modal window
    const [open, setOpen] = useState(false);

    let isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn)
    let cardPacks = useSelector<RootState, CardPackType[]>(state => state.packsPage.cardPacks)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDataThunk())
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
            <h2>Data for new pack</h2>
            <PacksModalForm handleClose = {handleClose} />
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
                        <TableCell>Name</TableCell>
                        <TableCell align="center">CardsCount</TableCell>
                        <TableCell align="center">Update</TableCell>
                        <TableCell align="center">link</TableCell>
                        <TableCell align="center">
                            <button onClick={handleOpen}>add pack</button>
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
                                <button>update</button>
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
    </>
}