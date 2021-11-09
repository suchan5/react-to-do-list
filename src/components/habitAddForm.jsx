import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef(); // form에 입력된 input을 이제 처리해줘야함. 리액트에서는 querySelector같이 DOM에 직접 접근하지 않는다. 리액트에서는 Ref를 쓴다. 그리고 아래 render()에서 ref={this.inputRef}이렇게해서 사용하면 됨. 그럼 input form에 입력된 새로운 데이러를 핸들링 할 수 있음.  React.createRed()를 이용하면, 자바스크립트에서 DOM요소에 접근해서 그 요소에 대한 value나 클릭 이벤트나 처리하는 것처럼, 리액트는 바로 DOM요소에 접근하지 않고 필요할 때 이렇게 react 에서 제공하는 createRef를 사용해서 멤버변수를 정의한 다음에 그것을 원하는 해당하는 리액트 컴포넌트에 ref={this.inputRef}이런식으로 ref를 이용해서 연결하면 됩니다

    handleSubmit = event => {
        event.preventDefault(); // form에서 submit버튼을 누르면 페이지가 리프레시 되거나 다른 곳으로 가는게 디폴트이다. 근데 우리는 지금 싱글 페이지이므로 이렇게해서 리프레시를 막을 수 있다
        // console.log(this.inputRef.current.value); // onSubmit이 잘되나 보려고 콘솔창에 current value 찍어봄. 잘된다 f12눌러서 크롬 개발자도구에서 확인 가능함
        
        const new_habit = this.inputRef.current.value;
        new_habit && this.props.onAdd(new_habit); // 만약 새이름(new_habit)이 있다면, 텅텅 비어있지 않다면 props의 onAdd라는 함수에 이 new_name을 전달해줄꺼다
        
        this.inputRef.current.value=''; // 요렇게 인해주면 사용자가 새로운 습관(예. cleaning)을 타이핑하고 add하는 버튼을 눌렀을 때 input box에 cleaning이 남아있다
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="add-input" placeholder="Add a new habit here!" ref={this.inputRef}/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;

