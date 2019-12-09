import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import './shoppingList.css';

class ShoppingList extends React.Component {
    //React context API
    state = {
        items: [
            {id: uuid(), name: "Milk"},
            {id: uuid(), name: "Eggs"},
            {id: uuid(), name: "Bread"},
            {id: uuid(), name: "Meat"}
        ]
    }
    render() {
        const { items } = this.state;
        return(
            <div>
                <h1>Shopping List</h1>
                <button
                    onClick={() => {
                        const name = prompt("Enter an item")
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name: name}]
                            }));
                        }
                    }}
                >Add item</button>
                <TransitionGroup>
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={300} classNames='fade'>
                            <div>
                                <button
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}
                                >&times;</button>
                                {name}
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    };
};

export default ShoppingList;