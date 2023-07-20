import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0]
]

const operations = ['+', '-', '*', '/']
const EqualSign = '='


const Calculator = () : Element => {
  const [ val, setVal ] = useState('')

  const [ resultFinal, setResultFinal ] = useState('')
  
  const createHandleclick = (number) => (): void => setVal(val.concat(number))

  // en caso se toque al click
  const clickEqual = (): void => {
    
    var result = eval(val)
    setResultFinal(eval(result))
     
  }
  return (
    <section>
        <h1>Calculator</h1>
        <input title='inputT' value={val} placeholder={val} readOnly />
        <input title='inputResult' value={resultFinal} placeholder={resultFinal} readOnly />
        <div role='grid'>            
        {rows.map((row, idx): JSX.Element => (
            <div key={idx} role='row' >
                {row.map(number => (
                    <button onClick={createHandleclick(number)} key={number}>
                    {number}
                    </button>)
                )}
            </div>
        ))} 
        {operations.map(operation => (
            <button onClick={createHandleclick(operation)} key={operation}>{operation}</button>
        ))
        }
        </div>
        
        <button title='equal' onClick={clickEqual}>{EqualSign}</button>
    </section>
  ) 
}

describe('Calculator', (): void  =>  {
    afterEach(cleanup)
  it ('should render', (): void  => {
    render(<Calculator />)
  })
  it ('should render title correctly', (): void => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })
  it ('should render title correctly', (): void => {
    render(<Calculator />)
    
    numbers.forEach( number => {
        screen.getByText(number)        
    });
  })
  it ('should render 4 rows', (): void => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row') 
    expect(rows).toHaveLength(4)
  })
  it ('should render operations', (): void => {
    render(<Calculator />)
    operations.forEach(operation => {
        screen.getByText(operation)
    })
  })
  it ('should render equal sign', (): void => {
    render(<Calculator />)
    screen.getByText('=')
  })
  it ('should render input', (): void => {
    render(<Calculator />)
    screen.getAllByRole('textbox')
  })
  it ('should user input after clicking a number ', (): void => {
    render(<Calculator />)
    const uno = screen.getByText('1')
    fireEvent.click(uno)
    const input = screen.getByTitle('inputT')
    expect(input.value).toBe('1')
    
  })
  it ('should user input after clicking a multiple number ', (): void => {
    render(<Calculator />)
    const uno = screen.getByText('1')
    fireEvent.click(uno)
    const two = screen.getByText('2')
    fireEvent.click(two)
    const three = screen.getByText('3')
    fireEvent.click(three)
    const input = screen.getByTitle('inputT')
    expect(input.value).toBe('123')
    
  })
  it('should calculate based on user input and show the calculation', (): void => {
    render(<Calculator />)
    const operatorA= screen.getByText('1')
    fireEvent.click(operatorA)
    const operation= screen.getByText('+')
    fireEvent.click(operation)
    const operatorB= screen.getByText('2')
    fireEvent.click(operatorB)
    const equalSign= screen.getByTitle('equal')
    fireEvent.click(equalSign)
    const inputResult = screen.getByTitle('inputResult')
    expect(inputResult.value).toBe('3')
  })
})
