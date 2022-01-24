import React, {useEffect, useState} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { StarsRating } from "./StarsRating"
import { StyledRating } from "./Rating.style"
import { Comment } from './Comment';
import { ProductReview } from './ProductReview';
import axios from 'axios';
import { useParams } from 'react-router';
import { RaingInterfaces } from './Rating.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../../state';
import { bindActionCreators } from 'redux';
import { RootState } from '../../../state/reducers';

export const Rating= ({avgRate, isReviewed} : RaingInterfaces) => {
    let { id } = useParams() as {
        id: string;
    };
    const [rates, setRates] = useState<any>(null)
    const [open, setOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [comments, toggleComments] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false)
    const authToken = useSelector((state : RootState) => state.auth);

    const dispatch = useDispatch();
    const { setLoginWindow } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        if(!rates){
            setPage(1)
            axios.get(`https://efootwear.herokuapp.com/api/product_reviews/?model_id=${id}&page=${page}&page_size=4`)
            .then(({data}) => {
                setHasMore(Math.ceil(data.count / 4) > page)
                setRates(data);
            })
        }
    }, [rates])

    useEffect(() => {
        rates && axios.get(`https://efootwear.herokuapp.com/api/product_reviews/?model_id=${id}&page=${page}&page_size=4`)
        .then(({data}) => {
            setHasMore(Math.ceil(data.count / 4) > page)
            setRates({...data, results: [...rates?.results, ...data.results]})
        })
    }, [page])

    function loadMoreRates(){
        setPage(prevPage => prevPage + 1)
    }

    function setReviewWindow(){
        if(!authToken) {
            setLoginWindow()
            return
        }
        setOpen(true)
    }

    return (
        <>
            <StyledRating comments={comments}>
                <div className="title">
                    <div>
                        <h3>Rating({rates?.count})</h3>
                        {!isReviewed && <p onClick={setReviewWindow}>Write a review</p>}
                    </div>
                    <div>
                        <h3>{avgRate}</h3>
                        <StarsRating rate={avgRate}/>
                        <ArrowDropDownIcon className="dropdown" onClick={()=>toggleComments(!comments)}/>
                    </div>
                </div>
                <div className="comments">
                    {rates?.results.length && rates?.results.map((el : any, index : number) => <Comment comments={comments} rate={el} key={index}/>)}
                    {hasMore && <p onClick={() => loadMoreRates()}>See more({rates?.count - page * 4})</p>}
                </div>
            </StyledRating>
            {open && <ProductReview open={open} setOpen={setOpen} setRates={setRates} setPage={setPage}/>}
        </>
    )
}