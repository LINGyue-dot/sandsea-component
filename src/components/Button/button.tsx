/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-16 21:59:24
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-16 22:16:58
 * @Description:
 */

import classNames from "classnames";
import { HtmlHTMLAttributes } from "react";

export enum ButtonSize {
	Large = "lg",
	Small = "sm",
}

export enum ButtonType {
	Primary = "primary",
	Danger = "danger",
	Default = "default",
	Link = "link",
}

export interface BaseButtonProps {
	size: ButtonSize;
	btnType?: ButtonType;
	disabled?: boolean;
	href?: string;
	children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
	const { children, size, btnType, disabled, href } = props;

	const classes = classNames("btn", {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		// button 类型本身有 diabled 属性，但是  需要再添加上 diabled css 样式
		disabled: btnType === ButtonType.Link && disabled,
	});

	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled}>
				{children}
			</button>
		);
	}
};

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default,
};

export default Button;
