import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "@lib/components";

const stories = storiesOf("Button", module);

stories.add("example", () => <Button value="x" />);
