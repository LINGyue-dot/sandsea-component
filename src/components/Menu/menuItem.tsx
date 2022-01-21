/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-18 21:28:53
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-21 15:17:30
 * @Description:
 */

import classNames from "classnames";
import React, { useContext } from "react";
import { MenuContext } from "./menu";

export interface MenuItemProps {
	index?: number;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = props => {
	const { index, disabled, className, style, children } = props;

	const context = useContext(MenuContext);

	const classes = classNames("menu-item", className, {
		"is-disabled": disabled,
		"is-active": context.index === index,
	});

	const hanleClick = () => {
		if (context.onSelect && !disabled && typeof index === "number") {
			context.onSelect(index);
		}
	};

	return (
		<li className={classes} style={style} onClick={hanleClick}>
			{children}
		</li>
	);
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
