import React, {useEffect} from 'react';
import {useGetTopPopularFilmsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {useActions} from "_/useActions";
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const PopularFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetTopPopularFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Top 100 Popular Movies'}
                info={"The rating is based on traffic to movie pages, as well as queries to the site's search engine. The list is updated once a day."}
                    data={data}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    />
        </>

    );
};

