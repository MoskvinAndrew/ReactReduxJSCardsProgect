import React from "react";
import {RangeSlider} from "./FilterAndSearchInsideComponents/DoubleRange";
import {InputAndButtons} from "./FilterAndSearchInsideComponents/InputAndButtons";
import style from "./Filter&Search.module.css"
import {Paginator} from "../../n1-main/m1-UI/common/Paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {PacksStateType, setDataThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";


export const FilterAndSearch = () => {

    let user_id = useSelector<RootState, string>(state => state.profilePage.profileData._id);
    let packsFilterData = useSelector<RootState, PacksStateType>(state => state.packsPage);
    const dispatch = useDispatch();

    const onClickHandlerPaginator = (p: number) => {
        dispatch(setDataThunk(packsFilterData.packName,
                              packsFilterData.minCardsCount,
                              packsFilterData.maxCardsCount,
                              '',
                              p, packsFilterData.pageCount))
        return
    };
    const onClickHandlerFilter = (packName?: string) => {
        dispatch(setDataThunk(packName,
                              packsFilterData.minCardsCount,
                              packsFilterData.maxCardsCount,
                              '',
                              packsFilterData.page,
                              packsFilterData.pageCount))
        return
    };
    const onClickHandlerAll = () =>{
        dispatch(setDataThunk())
        return
    };
    const onClickHandlerMy = () =>{
        dispatch(setDataThunk('',
            packsFilterData.minCardsCount,
            packsFilterData.maxCardsCount,
            '',
            packsFilterData.page,
            packsFilterData.pageCount,
            user_id))
        return
    };


    return (
        <div className={style.FAndSearch}>
            <div>
                <RangeSlider
                    minCardsCount={packsFilterData.minCardsCount}
                    maxCardsCount={packsFilterData.maxCardsCount}
                />
            </div>


            <div><InputAndButtons
                onClickHandlerMy={onClickHandlerMy}
                onClickHandlerAll={onClickHandlerAll}
                onClickHandlerFilter={onClickHandlerFilter}
                totalItemsCount={packsFilterData.cardPacksTotalCount}
                pageSize={packsFilterData.pageCount} currentPage={packsFilterData.page}
                portionSize={10}
                packName={packsFilterData.packName}/>
            </div>


            <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                <Paginator
                onClickHandler={onClickHandlerPaginator}
                totalItemsCount={packsFilterData.cardPacksTotalCount}
                pageSize={packsFilterData.pageCount} currentPage={packsFilterData.page}
                portionSize={10}
                packName={packsFilterData.packName}/>
            </div>
        </div>
    )
}