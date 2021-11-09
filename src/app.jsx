import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component { // Class이므로 App으로 대문자로 바꿔주고 
  state = { // state object안에 습관들을 배열로 정의. 그리고 그 습관들 배열안에 각 습관들이 object형태로 
    habits : [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Coding', count: 1},
        {id: 3, name: 'Running', count:0},
        {id: 4, name: 'Cycling', count: 5}
        
    ],
  };

  handleIncrement = habitxxx => {
    const habits = [...this.state.habits];   // spread operator를 이용한 이유는 , 우리가 state object에 있는 저 배열을 직접적으로 건들면 안좋기 때문에 저거는 보존을하고, 여기다가 새로운 배열의 껍데기를 만들어서 복사한거임
    const index = habits.indexOf(habitxxx);
    habits[index].count++;
    this.setState({ habits }); // this.setState({ habits: habits});랑 같다. 
  };

  handleDecrement = habitxxx => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habitxxx);
    const count = habits[index].count -1;
    habits[index].count = count < 0 ? 0 : count;  // 사실 이 라인은 냄새나는 코드다. 나중에 왜 그런지 알려줄꺼래
    this.setState({ habits }); // this.setState({ habits: habits});랑 같다. 
  };

  handleDelete = habitxxx => {
    const habits = this.state.habits.filter(item => item.id !== habitxxx.id); // item의 id가 인자로 넘어온 habitxxx의 id가 같다면 걔는 배열에서 delete. 삭제시키려고 클릭해서 넘어온 habitxxx의 아이디랑 match가 되면 배열에서 제거, match가 안되면 그냥 배열에 두는거임
    this.setState({ habits }); // this.setState({ habits: habits});랑 같다. 
  };

  handleAdd = new_name => {
    const habits = [...this.state.habits, {id: Date.now(), name: new_name, count: 0}];
    this.setState({ habits });
  };

  handleReset = () => {
      const habits = this.state.habits.map(habit =>  {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
       <Navbar 
        totalCount={this.state.habits.filter(item => item.count > 0).length} 
      />
       <HabitAddForm 
        onAdd={this.handleAdd}
      />
       <Habits
        // key={this.state.habits.id}    // 엘레님은 app.jsx에서는 key안써주셨음.. 안써도 되는거임? habits.jsx에서는 <ul>을 썼으니까 해준건가? 리스트는 id를 줘서 관리한다고 하셨거덩. 그래서 app.jsx에서는 ul태그를 안써서 필요없나
        habits={this.state.habits}    // 이름을 habits외에 다른거로 하면 에러가 뜬다..희한하네..왜지..
        onIncrement={this.handleIncrement}  
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
       /> 
      </>
    );
  }
}

export default App;