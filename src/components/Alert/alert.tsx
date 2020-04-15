import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'

}

interface ThemeColor {
  alertType?: string          // 警告类型
  className?: string          // 用户的自定义class
  title: string               // 警告标题
  description?: string        // 警告的详细内容
}

interface AlertProps {
  closable?: boolean
}

interface Events {
  onClose?: void
}

type NativeDivProps = AlertProps & Events & ThemeColor & React.HTMLAttributes<HTMLDivElement>

const Alert: React.FC<NativeDivProps> = props => {
  const {
    alertType,
    className,
    title,
    description,
    closable,
    onClose,
    ...restProps
  } = props
  console.log(restProps)
  const classes = classNames('al', className, {
    [`al-${alertType}`]: alertType 
  })
  return (
    <div className={classes}>
      <p className={description ? 'al-title' : 'al-title-no-content'}>
        <span>{title}</span>
        <span
          className={closable ? 'al-close-hidden' : 'al-close'}
        >×
        </span>
      </p>
      {
        description
        ? <p className='al-content'>{description}</p>
        : ''
      }
    </div>
  )
}

// 默认情况下主题颜色为default
Alert.defaultProps = {
  alertType: AlertType.Default,
  closable: false
}

export default Alert