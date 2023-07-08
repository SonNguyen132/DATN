import React from 'react';
import {FilmsGroup} from "../films-group/FilmsGroup";
import {Slider} from "@/shared-components/slider/Slider";
import {Caption} from "@/shared-components/caption/Caption";
import {
    useGetPopularMiniSeriesQuery,
    useGetBestFilmsQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery
} from "_/serviceAPI";

export const Recommendations = () => {

    const premiers = useGetPremiersQuery();
    const topAwait = useGetTopAwaitFilmsQuery(1);
    const miniSeries = useGetPopularMiniSeriesQuery();
    const topFilms = useGetBestFilmsQuery(1);

    const filmsGroup = [
        {element: <FilmsGroup data={premiers?.data?.items} title='Film premieres this month'/>},
        {element: <FilmsGroup data={miniSeries?.data?.items} title='Popular mini-series of this year'/>},
        {element: <FilmsGroup data={topFilms?.data?.films} title='Top 250 films'/>},
        {element: <FilmsGroup data={topAwait?.data?.films} title='Top Expected Movies'/>}
    ]

    return (
        <>
            <Caption title='Interesting' description="Editors' Choice" info='Premieres, hits and digital releases' />
            <Slider isRec={true} data={filmsGroup.map(group => group.element)}/>
        </>
    );
}

