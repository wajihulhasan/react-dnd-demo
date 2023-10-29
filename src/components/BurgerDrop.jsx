import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import BurgerIngredient from './BurgerIngredient';

const ingredients = [
    {
        id: 1,
        name: 'breadTop',
        style: {
            display: 'block',
            width: '30%',
            height: '10%',
            borderRadius: '50% 50% 0 0',
            background: 'linear-gradient(#bc581e, #e27b36)',
            margin: '2%',
        },
    },
    {
        id: 2,
        name: 'bacon',
        style: {
            width: '30%',
            height: '3%',
            background: 'linear-gradient(#bf3813, #c45e38)',
            margin: '2%',
        },
    },
    {
        id: 3,
        name: 'cheese',
        style: {
            display: 'block',
            width: '30%',
            height: '5%',
            borderRadius: '20px',
            background: 'linear-gradient(#f4d004, #d6bb22)',
            margin: '2%',
        },
    },
    {
        id: 4,
        name: 'cheese',
        style: {
            display: 'block',
            width: '30%',
            height: '5%',
            borderRadius: '20px',
            background: 'linear-gradient(#f4d004, #d6bb22)',
            margin: '2%',
        },
    },
    {
        id: 5,
        name: 'meat',
        style: {
            display: 'block',
            width: '30%',
            height: '8%',
            borderRadius: '20px',
            background: 'linear-gradient(#7f3608, #702e05)',
            margin: '2%',
        },
    },
    {
        id: 6,
        name: 'meat',
        style: {
            display: 'block',
            width: '30%',
            height: '10%',
            borderRadius: '0 0 30px 30px',
            background: 'linear-gradient(#bc581e,#e27b36)',
            margin: '2%',
        },
    },
];

const BurgerDrop = () => {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ingredient",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const addImageToBoard = (id) => {
        const ingredientToAdd = ingredients.find((ingredient) => id === ingredient.id);
        setBoard((board) => [ingredientToAdd, ...board]); // Reverse the order
      };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{width:'100%',height:'500px'}}>
                {ingredients.map((ingredient) => {
                    return <BurgerIngredient key={ingredient.id} ingredient={ingredient} id={ingredient.id} />;
                })}
            </div>
            <div style={{ width: '500px',height:'250px', border: '2px solid black',marginBottom:'10px'}} ref={drop}>
                {board.map((ingredient) => {
                    return <BurgerIngredient ingredient={ingredient} id={ingredient} />;
                })}
            </div>
        </div>
    )
}

export default BurgerDrop