import React, { Component } from 'react';
import Squares from './Squares.js'

class GameBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
// squares starts off as null
            squares : Array(9).fill("⎕"),
//the first player will be 🍻 and will change within our handleClick
            playerX : false,
            counter : 9,

        }
    }
    changeX = (squareIndex) => {
        const {squares, playerX} = this.state
        squares[squareIndex] = playerX ? "🍻" : "🌯"
        this.setState({ playerX : !playerX,
         squares:squares })
        if(squares[0] === "🍻" && squares[1] === "🍻" && squares[2] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[0] === "🍻" && squares[4] === "🍻" && squares[8] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[0] === "🍻" && squares[3] === "🍻" && squares[6] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[1] === "🍻" && squares[4] === "🍻" && squares[7] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[2] === "🍻" && squares[4] === "🍻" && squares[6] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[2] === "🍻" && squares[5] === "🍻" && squares[8] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[3] === "🍻" && squares[4] === "🍻" && squares[5] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[6] === "🍻" && squares[7] === "🍻" && squares[8] === "🍻"){
            setTimeout(function(){
            alert("player 🍻 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[0] === "🌯" && squares[1] === "🌯" && squares[2] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[0] === "🌯" && squares[4] === "🌯" && squares[8] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[0] === "🌯" && squares[3] === "🌯" && squares[6] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[1] === "🌯" && squares[4] === "🌯" && squares[7] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[2] === "🌯" && squares[4] === "🌯" && squares[6] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[2] === "🌯" && squares[5] === "🌯" && squares[8] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[3] === "🌯" && squares[4] === "🌯" && squares[5] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
        } else if(squares[6] === "🌯" && squares[7] === "🌯" && squares[8] === "🌯"){
            setTimeout(function(){
            alert("player 🌯 won!")
            window.location.reload(false)
        }, 100);
                }
    }

    countDown = () => {
    this.setState({counter : this.state.counter -1})
    if ( this.state.counter === 1) {
        this.state.counter = 0
        setTimeout(function(){
            alert("game over")
            window.location.reload(false)
        },50);
    } else {
        this.state.counter -= 1
    }
    this.setState ({ counter : this.state.counter})
}


    render(){
        const {squares} = this.state
        let square = squares.map((value,index)=>{
        return (<Squares countDown={this.countDown} changeX={this.changeX}
            value={value} index={index} key={index}
             />)
    })
        return(
            <div class="App" >
                <h1 class="App" id="header"> The Modern Minimalist Tic Tac Toe</h1>
                <h3>Player 🌯 Take A Bite First!</h3>
                <h3>Player 🍻 Take A Sip Second!</h3>
            <div id="mainZone">
                <div id="flexBox" >
                {square}
                </div>
                <div>
                </div>
                <br />
            <div>
            </div>
            </div>
            <button id="restartButton" onClick={() => window.location.reload(false)}>Restart Game</button>
        </div>
        )
    }
}
export default GameBoard;

// we want the value of null to change on each click
//when clicked show "x" in that specific index square
//then change so that the next click shows "o" in that index square
//then change so that the next click shows "x" etc..
