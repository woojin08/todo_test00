import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Write = ({ input, setInput, boardList, setBoardList, id }) => {

    const GO = useNavigate()
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current
        })
    }

    const submitHandler = () => {

        if (!input.title) {
            alert('내용을 입력해주세요')
            return
        }
        if (input.title.length < 5) {
            alert('더 입력해주세요')
            return
        }


        setBoardList([
            ...boardList,
            input
        ])

        id.current++;
        setInput({
            name: "",
            title: "",
            content: "",
        });


        GO('/board')
    }
    return (
        <div className='BoardList'>
            <table className='BoardTable'>
                <thead>
                    <tr>
                        <td colSpan={2}>
                            <h3>write</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='title'>name</td>
                        <td><input name='name' onChange={inputHandler} value={input.name || ''} /></td>
                    </tr>
                    <tr>
                        <td className='title'>title</td>
                        <td><input name='title' onChange={inputHandler} value={input.title || ''} /></td>
                    </tr>
                    <tr>
                        <td className='title'>content</td>
                        <td><textarea name='content' onChange={inputHandler} value={input.content || ''} /></td>
                    </tr>
                </tbody>
            </table>
            <div className="BtnGroup">
                <button onClick={submitHandler}>WRITE</button>
            </div>
        </div>
    )
}

export default Write;