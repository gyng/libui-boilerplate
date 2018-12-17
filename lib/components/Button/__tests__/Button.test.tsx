import { Button } from "@lib/components/Button";
import { shallow } from "enzyme";
import * as React from "react";

describe("Button", () => {
  it("renders the value", () => {
    const wrapper = shallow(<Button value="foo" />);
    expect(wrapper.text()).toEqual("foo");
  });
});
