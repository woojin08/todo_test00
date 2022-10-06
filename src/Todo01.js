import React, { useRef, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import TodoList from './TodoList';
import TodoWrite from './TodoWrite';

const App = () => {

  const [word, setWord] = useState({});
  const [list, setList] = useState([]);

  const num = useRef(1);
  const inputTtitle = useRef(null)
  const inputContent = useRef(null)


  const handlerWord = (e) => {
    const { name, value } = e.target;
    setWord({
      ...word,
      [name]: value,
      id: num.current
    })
  }



  const handlerList = () => {
    if (word.title.length < 5) {
      alert('더 입력해줭(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ');
      // 1.입력창을 비운다. ,2.그 입력창에 포커스를 준다.
      setWord({
        ...word,
        title: "",
      });
      inputTtitle.current.focus();
      return
    }

    let hg = /^[ㄱ-ㅎ가-힣]*$/;
    if (!hg.test(word.title)) {
      alert('한글만 입력해!(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ');
      // 1.입력창을 비운다. ,2.그 입력창에 포커스를 준다.
      setWord({
        ...word,
        title: "",
      });
      inputTtitle.current.focus();
      return
    }

    if (word.content.length < 5) {
      alert('더 입력해줭(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ');
      // 1.입력창을 비운다. ,2.그 입력창에 포커스를 준다.
      setWord({
        ...word,
        content: "",
      });
      inputContent.current.focus();
      return
    }
    setList([...list, word]);
    setWord({
      title: "",
      content: "",
    })
    num.current++
    // navi('/Board')
  }

  return (
    <div>
      <nav>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/Board'>Board</NavLink>
        <NavLink to='/Write'>Write</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<TodoList list={list} setList={setList} />} />
        <Route path='/Board' element={<TodoList list={list} />} />
        <Route path='/Write' element={<TodoWrite list={list} word={word} handlerWord={handlerWord} handlerList={handlerList} />} />
      </Routes>


    </div>
  )
}

export default App