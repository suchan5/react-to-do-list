import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {  // class이므로 Habits이렇게 대문자로 바꿔주고, 아래 export default Habits;도 대문다로
    handleIncrement = habitxxx => {
         this.props.onIncrement(habitxxx); // onIncrement라는 콜백 함수를 props로 받습니다. 로직은 다 더 상위 컴포넌트인 app.jsx로 옮겼다. 여기서는 직접 로직을 작성하는 것보다 props를 이용해서 데이터를 받아다 쓸꺼임 
    };

    handleDecrement = habitxxx => {
        this.props.onDecrement(habitxxx);
    };

    handleDelete = habitxxx => {
        this.props.onDelete(habitxxx);
    };

    // handleReset = () => {
    //     this.props.onReset();
    // };  아래에 버튼을 요렇게 해서 'onClick= {this.handleReset}' 이런식으로 할 수도 있음 

    render() {
        return (
            <>
                <ul>
                    {this.props.habits.map(habitsss => ( // state object에 있는 habits배열을 map을 이용해서 쭉 돌기. 그리고 그걸 골격(틀)인 Habit class component <Habits />에 '연결'해주는거임.  habitzzz라는 props로 데이터를 담아서 골격이자 틀인 habit.jsx에서 props를 통해 데이터를 틀에 뿌리기 <Habit habitzzz={habitsss} /> //  나중에 더 상위 컴포넌트인 app.jsx로 state object을 옮기므로 this.state.habits.map()이거에서 this.props.habits.map()이거로 바꿔줘야한다. props을 통해 데이터를 받아서 사용
                        <Habit 
                            key={habitsss.id}  // 이런 경고 메세지가 구글 개발자툴 console에 뜰꺼다(index.js:1 Warning: Each child in a list should have a unique "key" prop.) . 리액트에서는 list를 사용할 때 반드시 key값을 가져야함. 같은 고유값을 가진 리스트항목은 다시 렌더링을 하지 않는식으로 리액트의 성능 개선을 key값으로 함. 리스트 항목마다 고유의 key값을 가져야함. 우리는 id를 주고 그걸 사용
                            habitzzz={habitsss}    // habitzzz라는 이름의 props를 만들고 map으로 habitsss를 하나하나 돌린걸 담음
                            onIncrement={this.handleIncrement}  // onIncrement라는 이름의 props를 만들고 handleIncrement라는 함수를 담음
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />  

                    ))}
                </ul>
                <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>   {/* 위에 애들은 {this.handleIncrement} 이런식으로 하고 위에다 함수 handleIncrement() 불러왔다. 하지만 바로 이렇게해도 되는듯.... */}
            </>
        );
    }
}

export default Habits;