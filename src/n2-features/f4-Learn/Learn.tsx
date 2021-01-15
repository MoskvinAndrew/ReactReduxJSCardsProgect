import React, {useEffect, useState} from "react";
import ButtonNya from "../../pages/components/button/ButtonNya";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {

    CardType,
    getCardThunk,
    updateCardGradeTC
} from "../../n1-main/m2-BLL/Redux/cards-Reducer";
import { useParams } from "react-router-dom";

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const learn = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);

    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];



}

const LearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector((store: RootState) => store.cardsPage.cards);
    // const {id} = useParams();
    const {id} = useParams<{id:string}>();


    const [card, setCard] = useState<CardType>({
        _id: 'string',
        cardsPack_id: 'string',
        user_id: 'string',

        answer: 'string',
        question: 'string',
        grade: 0,
        shots: 0,

        questionImg: 'string',
        answerImg: 'string',
        answerVideo: 'string',
        questionVideo: 'string',

        comments: 'string',

        type: 'string',
        rating: 0,
        more_id: 'string',

        created: 'string',
        updated: 'string',
    });

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first ) {

             dispatch(getCardThunk(id));
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(learn(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, id, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            setCard(learn(cards));
        } else {

        }
    }

    // DEV_VERSION && console.log('render LearnPage');
    return (
        <div>
            LearnPage

            <div>{card.question}</div>
            <div>
                <Button variant={"contained"} color={"secondary"} onClick={() => setIsChecked(true)}>check</Button>
            </div>

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <ButtonNya key={'grade-' + i} onClick={() => {
                              dispatch(updateCardGradeTC(i,card._id))
                            {onNext()}
                        }}>{g}</ButtonNya>
                    ))}

                    <div><Button variant={"contained"} color={"primary"} onClick={onNext}>next</Button></div>
                </>
            )}
        </div>
    );
};

export default LearnPage;