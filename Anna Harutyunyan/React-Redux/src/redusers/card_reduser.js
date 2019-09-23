import  moment  from 'moment';
import { ADD_CARD_ACTION } from '.././actions/card_action';

const initialState = [
    {
        id: 1,
        title: 'Drinks',
        upload_image:'https://globalassets.starbucks.com/assets/10f88951d9ce4fd4b6eec3f0be5516d2.jpg',
        //btoa('https://podrobnosti.ua/media/pictures/2019/6/24/thumbs/282x180/slava-kaminskaja-foto-informator_rect_908784b7d5d0f2d3c8f0cd991ba4f9a3.jpg'),
        descripton: 'Ristretto shots of Starbucks® Blonde Espresso harmonize sweetly with steamed whole milk in the Flat White.',
        date: moment(new Date()).format('MMM Do YY'),
        button: 'See all drinks',
    },  {
        id: 2,
        title: 'Food',
        upload_image: 'https://globalassets.starbucks.com/assets/5c7c2bd2cdf240819e21a7596a37348f.jpg',
        //btoa('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Posing_Cliff_Berryman.jpg/400px-Posing_Cliff_Berryman.jpg'),
        descripton: 'A worthy reason to hit the alarm and hop out of bed: our craveable, flavorful Double-Smoked Bacon, Cheddar & Egg Breakfast Sandwich.',
        date: moment(new Date()).format('MMM Do YY'),
        button: 'Check out the full menu',
    },  {
        id: 2,
        title: 'Nutrition',
        upload_image: 'https://healinggourmet.com/wp-content/uploads/2018/10/Instant-Pot-Egg-Bites-Feature-705x340.jpg',
        //btoa('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Posing_Cliff_Berryman.jpg/400px-Posing_Cliff_Berryman.jpg'),
        descripton: 'Our Bacon & Gruyère or Egg White & Red Pepper Sous Vide Egg Bites are protein packed and bursting with flavor.',
        date: moment(new Date()).format('MMM Do YY'),
        button: 'See smart choices to fuel your day',
    }
];

export default function img(state = initialState, action) {
    const newId = state.length + 1;
    if (action.type === ADD_CARD_ACTION) {
        return [
            ...state, 
            {   
                id: newId,                   
                title:  action.title,
                upload_image: action.image,
                descripton: action.descripton,
                date: action.date,
                button: action.button
            }          
        ]
    }
    return state;
}