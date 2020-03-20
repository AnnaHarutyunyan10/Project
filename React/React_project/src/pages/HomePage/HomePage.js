import React from 'react';
import GetStarted from '../../components/GetStarted/GetStarted';
import CardsRow from '../../components/CardsRow/CardsRow';
import Articles from '../../components/Articles/Articles';
import Questions from '../../components/Questions/Questions';
import OpinionsColumn from '../../components/OpinionsColumn/OpinionsColumn';

const HomePage = () => {
    return (
        <div>
            <GetStarted />
            <CardsRow />
            <Articles />
            <Questions />
            <OpinionsColumn header="What students say" />
        </div>
    );
}

export default HomePage;