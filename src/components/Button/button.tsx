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

// 返回的组件不包含原生的属性以及方法，而React提供了对应的方法
// React.ButtonHTMLAttributes<HTMLElement> 提供了所有原生button标签的属性和方法
// React.AnchorHTMLAttributes<HTMLElement> 提供了所有原生a标签的属性和方法
// | 是联合类型， & 是交叉类型， 将两者的所有属性进行合并
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 最终将button标签和a标签的所有属性和方法进行合并， 这样返回的组件就能够像原生的button和a标签一样被使用
// 但由于两者之前可能有的属性或方法不存在与另一个标签，所以通过全部设置为可选属性
// typescript提供的Partial能将一个类型的所有属性变为可选属性
export type ButtonTypes = Partial<NativeButtonProps & AnchorButtonProps>
// 增加泛型<BaseButtonProps>， 防止使用组件时传错属性
// 或者解构时参数写错
const Button: React.FC<ButtonTypes> = props => {
  // className是用户自定义的样式
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps  // 剩余的属性通过扩展运算符展开， 比如a标签加了一个target属性在这里就属于剩余的属性
  } = props
  // 默认有btn样式, 对于可选样式，根据父组件是否传值来决定是否进行样式的拼接
  // 用户还可能有自定义样式，所以还要合并className
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    // 将restProps添加到返回的标签里面，这样才能从父组件传过来的属性才能生效
    return (
      <a
        className={classes}
        href={href}
        {...restProps}  
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
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