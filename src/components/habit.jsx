import React, { Component } from 'react';

class Habit extends Component { // 여기는 따로 state object를 쓸 이유가 1도 없다. 데이터는 다 habits class component에서 props형태로 받아와서 쓸것이므로
    handleIncrement = () => {
        this.props.onIncrement(this.props.habitzzz); // this.props.onIncrement라고 써서 onIncrement라는 콜백 함수를 props으로 받아오기. 긍께 props으로 전달된 콜백함수들을 호출하게 되고 onIncrement(), 또 proprs으로 전달받은 각각의 데이터를 다시 인자로 전달해줍니다 this.props.habitzzz. 만약 헷갈린다면, 자바스크립트에서 함수를 다른함수의 인자로 전달하는 것, 즉 콜백함수를 공부하고 오시길
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habitzzz);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habitzzz);
    };
    
    render() {
        const {name, count} = this.props.habitzzz; 
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}><i className="fas fa-plus-square"></i></button>  {/*클래스 안에 있는 함수를 호출하는 것이므로.. 멤버 변수.. this를 붙여줘 */}
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}><i className="fas fa-minus-square"></i></button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                
            </li>

        );
    }
}

export default Habit;

// habit.jsx는 틀(골격)만 만들어두는거다. 
// habits.jsx에서 습관들을 추가하고 한다. habits.jsx에서 props로 만들어서 habit.jsx에서는 props를 이용해서 뿌린다.
// habits.jsx의 Habits class components가 부모, habit.jsx의 Habit class components가 자식 (크롬 개발자도구 이용해서 보면 확 보임 ㅋㅋ)