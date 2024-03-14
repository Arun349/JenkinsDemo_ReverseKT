import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('My Test Suite',()=>{

  test('Test case-1[Checking]', () => {
    render(<App />);
    const text = screen.getByText('Login');
    expect(text).toBeInTheDocument();
  });

  test('Test Case-2[Rendex All Elements]',()=>{
    render(<App/>)
    const TextBox1=screen.getByTestId("txt1")
    const TextBox2=screen.getByTestId("txt2")
    const Label1=screen.getByTestId("lbl1")
    const Label2=screen.getByTestId("lbl2")
    const Button=screen.getByTestId("btnSubmit")

    expect(TextBox1).toBeInTheDocument()
    expect(TextBox2).toBeInTheDocument()
    expect(Label1).toBeInTheDocument()
    expect(Label2).toBeInTheDocument()
    expect(Button).toBeInTheDocument()
  });

test('Test Case-3[Render Initial Value]',()=>{
  render(<App/>)
  // const TextBox1=screen.getByTestId("txt1")
  // const TextBox2=screen.getByTestId("txt2")
  const Button=screen.getByTestId("btnSubmit")
  // const Message1=screen.getByTestId("message1")
  
  fireEvent.click(Button)

  const Message2=screen.getByTestId("message2")

  expect(Message2).toHaveTextContent("Please fill all the details")

});

test('Test Case-4[Testing Success Result]',()=>{
  render(<App/>)
  const TextBox1=screen.getByTestId("txt1")
  const Message1=screen.getByTestId("message1")
  const Button=screen.getByTestId("btnSubmit")

  fireEvent.change(TextBox1 ,{target : {value :"a"}})
  fireEvent.click(Button)

  expect(Message1).toBeInTheDocument("Login Successful!")



});


});


