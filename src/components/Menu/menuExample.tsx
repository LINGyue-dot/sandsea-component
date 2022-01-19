/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-19 20:59:50
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-19 21:40:29
 * @Description:
 */

import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";

const MenuExample: React.FC = () => {
	return (
		<div>
			<Menu
				mode="vertical"
				onSelect={index => {
					alert(index);
				}}
			>
				<MenuItem index={0}>标题1</MenuItem>
				<MenuItem index={1} disabled>
					标题2
				</MenuItem>
				<MenuItem index={2}>标题3</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuExample;
