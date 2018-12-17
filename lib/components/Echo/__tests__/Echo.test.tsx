import { Echo } from "@lib/components/Echo";
import { shallow } from "enzyme";
import * as React from "react";

describe("Echo", () => {
  it("renders the value", () => {
    const wrapper = shallow(<Echo value="foo" />);
    expect(wrapper.text()).toEqual("foo");
  });
});
