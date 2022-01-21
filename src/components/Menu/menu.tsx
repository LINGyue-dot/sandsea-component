/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-18 21:22:05
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-21 15:27:56
 * @Description:
 */

import classNames from "classnames";
import React, { createContext, useState } from "react";
import { MenuItemProps } from "./menuItem";

type SelectCallback = (selectIndex: number) => void;

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
	defaultIndex?: number;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: SelectCallback;
}

interface IMenuContext {
	index: number;
	onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({
	index: 0,
});

const Menu: React.FC<MenuProps> = props => {
	const { className, mode, style, children, defaultIndex, onSelect } = props;
	const classes = classNames("sandsea-menu", className, {
		"menu-vertical": mode === "vertical",
		"menu-horizontal": mode !== "vertical",
	});

	const [currentActive, setActive] = useState(defaultIndex);

	const hanleClick = (index: number) => {
		setActive(index);
		console.log(index);
		onSelect?.(index);
	};

	const passContext: IMenuContext = {
		index: currentActive || 0,
		onSelect: hanleClick,
	};

	// 遍历其子元素
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement =
				child as React.FunctionComponentElement<MenuItemProps>;
			const { displayName } = childElement.type;
			if (displayName === "MenuItem") {
				return React.cloneElement(childElement, {
					index,
				});
			} else {
				console.error("Warning: Menu has a child which is not a MenuItem");
			}
		});
	};

	return (
		<ul className={classes} style={style} data-testid="test-menu">
			<MenuContext.Provider value={passContext}>
				{renderChildren()}
			</MenuContext.Provider>
		</ul>
	);
};

Menu.defaultProps = {
	defaultIndex: 0,
	mode: "horizontal",
};

export default Menu;
