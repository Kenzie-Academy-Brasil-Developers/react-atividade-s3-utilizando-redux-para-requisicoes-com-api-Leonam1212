import styled from "styled-components"

export const Container = styled.div`
    color: #fff;
    background: #2c3e50;
    padding: 10px;
    width: 500px;
    margin: 0 auto;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing:2px;
    text-align: center;

    input {
        margin: 10px;
        height: 25px;
        border-radius: 8px;
        outline: none;
        border: 2px solid gray;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    }
    button{
        height: 35px;
        border: 2px solid gray;
        border-radius: 8px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        font-weight: bold;
    }

    button:hover{
        background: aqua;
        color: white;
        border: 2px solid white;
    }


`