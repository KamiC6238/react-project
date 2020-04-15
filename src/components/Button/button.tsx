import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// 一些可选参数
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode  // 用来渲染组件中的内容
  href?: string
}

// 增加泛型<BaseButtonProps>， 防止使用组件时传错属性
// 或者解构时参数写错
const Button: React.FC<BaseButtonProps> = props => {
  const {
    btnType,
    disabled,
    size,
    children,
    href
  } = props
  // 默认有btn样式, 对于可选样式，根据父组件是否传值来决定是否进行样式的拼接
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

// 使用组件时，如果没有传值，那么props默认使用以下定义的值
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button