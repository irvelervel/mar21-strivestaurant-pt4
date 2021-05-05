import { Component } from 'react'
import items from '../data/menu.json'

class DishDetails extends Component {

    state = {
        dishToShow: null
    }

    componentDidMount() {
        let idFromTheURLBar = this.props.match.params.strive
        // dishId can be 0, 1, 2, 3
        let foundDish = items.find(dish => dish.id.toString() === idFromTheURLBar)
        if (foundDish) {
            console.log(foundDish)
            this.setState({
                dishToShow: foundDish
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.dishToShow &&
                    <div>
                        <h1> DETAILS OF {this.state.dishToShow.name}</h1>
                        <img src={this.state.dishToShow.image} alt="random pasta" />
                        <p>{this.state.dishToShow.description}</p>
                    </div>
                }
            </>
        )
    }
}

export default DishDetails