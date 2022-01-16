/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-16 21:08:50
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-16 22:28:20
 * @Description:
 */
import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import "./styles/index.scss";

function App() {
	return (
		<div className="App">
			<Button size={ButtonSize.Large} btnType={ButtonType.Primary}>
				hello
			</Button>
		</div>
	);
}

export default App;
