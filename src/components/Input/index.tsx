import React, { FC, InputHTMLAttributes, ReactElement } from 'react'

/**
 * 1. 原生组件的透传
 * 2. 添加对应的
 */

type InputSize = 'lg' | 'sm'
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: React.ReactNode
  prepand?: string | ReactElement
  append?: string | ReactElement
}

/**
 * 1. 取出属性
 * 2. 添加对应的 classname
 * 3. 写节点
 * @param props 
 * @returns 
 */
export const Input: FC<InputProps> = (props) => {
  return <div></div>
}
