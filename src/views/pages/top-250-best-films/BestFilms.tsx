import React, {useEffect} from 'react';
import {useGetBestFilmsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {useActions} from "_/useActions";
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const BestFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetBestFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Top 250 Best Movies'}
                info={'The rating is based on the results of voting by site visitors. Anyone can take part in it by voting for their favorite movie.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

