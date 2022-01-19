/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-01-19 21:46:19
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-01-19 22:00:20
 * @Description:
 */
import { render, RenderResult } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
	defaultIndex: 0,
	onSelect: jest.fn(),
	className: "test",
};

const testVerProps: MenuProps = {
	defaultIndex: 0,
	mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
	return (
		<Menu {...props}>
			<MenuItem index={0}>active</MenuItem>
			<MenuItem disabled index={1}>
				disabled
			</MenuItem>
			<MenuItem index={2}>xyz</MenuItem>
		</Menu>
	);
};
let wrapper: RenderResult,
	menuELement: HTMLElement,
	activeElement: HTMLElement,
	disabledElement: HTMLElement;

describe("test Menu and MenuItem component", () => {
	beforeEach(() => {
		wrapper = render(generateMenu(testProps));
		menuELement = wrapper.getByTestId("test-menu");
		activeElement = wrapper.getByText("active");
		disabledElement = wrapper.getByText("disabled");
	});
	it("should render correct Menu and MenuItem based on default props", () => {
		expect(menuELement).toBeInTheDocument();
		expect(menuELement).toHaveClass("sandsea-menu test");
		expect(menuELement.getElementsByTagName("li").length).toEqual(3);
		expect(activeElement).toHaveClass("menu-item is-active");
		expect(disabledElement).toHaveClass("menu-item is-disabled");
	});

	it("click items should change active and call the right callback", () => {});

	it("should render vertical mode when mode is set to vertical", () => {});
});
