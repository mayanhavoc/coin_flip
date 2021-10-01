import React, {Component} from 'react';
import {choice} from './helpers';
import Coin from './Coin';


class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {
                side: 'heads', 
                src: 'https://tinyurl.com/react-coin-heads-jpg'
            },
            { 
                side: 'tails', 
                src: 'https://tinyurl.com/react-coin-tails-jpg'
            }
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currFace: null,
            flips: 0,
            heads: 0,
            tails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState (st => {
            return {
                currFace: newCoin,
                flips: st.flips + 1,
                heads: st.heads + (newCoin.side === 'heads'? 1 : 0),
                tails: st.tails + (newCoin.side === 'tails'? 1 : 0),
            }
        })
    }
    handleClick(e){
        this.flipCoin();
    }
    render(){
        return(
            <div className="CoinFlip">
                <h2>Flip a coin</h2>
                {this.state.currFace && <Coin info={this.state.currFace}/>}
                <button onClick={this.handleClick}>Flip coin</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} and {this.state.tails}</p>
            </div>
        )
    }
}

export default CoinFlip