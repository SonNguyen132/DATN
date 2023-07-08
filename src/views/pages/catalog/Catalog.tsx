import React, {useEffect} from 'react';
import {useGetFilmsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {Template} from "@/layout-components/template/Template";
import {useActions} from "_/useActions";

export const Catalog = () => {
    const {order, type, keyword, genre} = useTypedSelector((state) => state.filtersReducer)
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        window.scrollTo(0, 0)
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetFilmsQuery({page, order, type, keyword, genre});

    return (
        <>
            <Template
                page={page}
                setPage={setPage}
                title={'Movies'}
                info={'The rating is based on the results of voting by site visitors. Anyone can take part in it by voting for their favorite movie.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

