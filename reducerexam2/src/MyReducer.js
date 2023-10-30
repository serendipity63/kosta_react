export const initTodos = [
    {
        id: 1,
        title: "Todo1",
        count: 0,
        complete: false, //true로 하면 체크된게 나온다
    },
    {
        id: 2,
        title: "Todo2",
        count: 0,
        complete: false,
    },
    {
        id: 3,
        title: "Todo3",
        count: 0,
        complete: false,
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete }; // 특정 id에 해당하는 애만 다른거 다 가져오고 complete만 뒤집어준다
                } else return todo; //해당 안하면 걍 todo를 리턴해준다
            });

        case "INCREMENT":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, count: todo.count + 1 }; // 특정 id에 해당하는 애만 다른거 다 가져오고 complete만 뒤집어준다
                } else return todo; //해당 안하면 걍 todo를 리턴해준다
            });

        default:
            return state;
    }
};

//map은 하나하나의 배열 객체를 변경시켜서 사용할때
