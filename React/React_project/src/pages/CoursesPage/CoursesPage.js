import React from 'react';
import CardsGalery from '../../components/CardsGalery/CardsGalery';
import OpinionsColumn from '../../components/OpinionsColumn/OpinionsColumn';
import HoriontalCard from '../../components/HorizontalCard/HorizontalCard';

const HomePage = () => {
    return (
        <div>  
            <HoriontalCard />
            <CardsGalery />
            <OpinionsColumn header="What people say" />
        </div>
    );
}

export default HomePage;