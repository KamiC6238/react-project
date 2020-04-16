import React from 'react'
import { render } from '@testing-library/react'
import { ButtonType, ButtonSize } from './button'
import Button from './button'

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')      // 测试标签名，必须大写
    expect(element).toHaveClass('btn btn-default')
  })
  it('should render the correct component based on diffrent props', () => {
    const wrapper = render(
      <Button
        className='btn-test'
        btnType={ButtonType.Danger}
        size={ButtonSize.Large}
        onClick={() => alert(222)}
      >test</Button>
    )
    const element = wrapper.getByText('test')
    expect(element).toHaveClass('btn btn-danger btn-test btn-lg')
    expect(element.tagName).toEqual('BUTTON')
    // expect(element).toHave
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button
        className='baidu-link'
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
      >
        a link
      </Button>
    )
    const element = wrapper.getByText('a link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link baidu-link')
    expect(element).toHaveAttribute('href')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(
      <Button
        btnType={ButtonType.Primary}
        disabled
      >
        disabled button
      </Button>
    )
    const element = wrapper.getByText('disabled button')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-primary')
    expect(element).toHaveAttribute('disabled')
  })
})