import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import './shoppingList.css';
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {
    //React context API
    //Redux state
    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;
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
                        <CSSTransition key={id} timeout={500} classNames='fade'>
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

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, {getItems})(ShoppingList);