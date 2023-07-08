import React, {useEffect} from 'react';
import {useActions} from "_/useActions";
import {useTypedSelector} from "_/useTypedSelector";
import {useGetTopAwaitFilmsQuery} from '_/serviceAPI';
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const AwaitFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetTopAwaitFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Top Expected Movies'}
                info={'Ranking is based on user votes, any registered site visitor can easily take part in it.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

