import './App.css';
import React, {useReducer} from 'react'
import DataFetching from './components/Effect/DataFetching';
import DataFetchingSingle from './components/Effect/DataFetchingSingle';
import DataFetchingSingleButton from './components/Effect/DataFetchingSingleButton';
// import ComponentC from './components/Context/ComponentC';
import CounterOne from './components/Reducer/CounterOne';
import CounterTwo from './components/Reducer/CounterTwo';
import CounterThree from './components/Reducer/CounterThree';
import ComponentA from './components/Reducer/ComponentA';
import ComponentB from './components/Reducer/ComponentB';
import ComponentC from './components/Reducer/ComponentC';
import DataFetchingOne from './components/Reducer/DataFetchingOne';
import DataFetchingTwo from './components/Reducer/DataFetchingTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state,action) =>{
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div className="App">
      {/* <DataFetching/> */}
      {/* <DataFetchingSingle/> */}
      {/* <DataFetchingSingleButton/> */}
      {/* <UserContext.Provider value={'Art'}>
        <ChannelContext.Provider value={'HCMA'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <>
        <CountContext.Provider 
          value={{countState: count, countDispatch: dispatch}}
        >
          Count - {count}
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </CountContext.Provider>
      </> */}
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
