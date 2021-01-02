import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../../../m2-BLL/Redux/reduxStore";
// import {getCardThunk} from "../../../m2-BLL/Redux/cards-Reducer";

// export type ITables = 'card';
// interface ISetSearchName {
//     type: typeof TABLE_SET_SEARCH_NAME;
//     table: ITables;
//     searchName: string;
// }
// export const TABLE_SET_SEARCH_NAME = 'TABLE/SET_SEARCH_NAME';
// const setSearchName = (table: ITables, searchName: string): ISetSearchName => ({
//     type: TABLE_SET_SEARCH_NAME,
//     table,
//     searchName,
// });

const Search: React.FC = () => {
    // const qstion = useSelector((state: RootState) => state.cardsPage.cards);
    // // const searchName = qstion.;
    // const dispatch = useDispatch();
    //
    // // const search = () => dispatch(getCardThunk());
    // const setName = (newSearchName: string) => dispatch(setSearchName('card', newSearchName));

    return (
        <div style={{margin: '0 10px', minHeight: '30px',}}>
            Search

            {/*<input value={searchName} onChange={e => setName(e.currentTarget.value)} placeholder={'Qestion name'}/>*/}

            {/*<button onClick={search}>Search</button>*/}
        </div>
    );
};

export default Search;