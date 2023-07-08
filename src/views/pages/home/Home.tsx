import React from 'react';
import {Popular} from "../../components/home/popular/Popular";
import {Recommendations} from "../../components/home/recommendations/Recommendations";
import {useGetPopularFilmsQuery, useGetPopularSeriesQuery} from "_/serviceAPI";

export const Home = () => {
    const films = useGetPopularFilmsQuery();
    const series = useGetPopularSeriesQuery();

    return (
        <>
            <Popular data={films.data} title='News' description='Popular Movies'/>
            <Recommendations/>
            <Popular data={series.data} title='What to see' description='Popular TV shows'/>
        </>
    );
}
