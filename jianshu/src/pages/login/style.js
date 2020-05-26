import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background-color: #eee;
`;


export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  background-color: #fff;
  padding-top: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`;


export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.button`
  width: 220px;
  line-height: 30px;
  margin: 10px auto;
  color: #fff;
  background-color: #3194d0;
  border-radius: 15px;
  display: block;
  border: none;
`;