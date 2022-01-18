/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-17 20:36:45
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-17 20:50:59
 * @Description:
 */

import React from "react";

import { render } from "@testing-library/react";

import Button from "./button";

test("first test component", () => {
	const wrapper = render(<Button>Nice</Button>);
	const element = wrapper.queryByText("Nice");
	expect(element).toBeTruthy();
	expect(element).toBeInTheDocument();
});
