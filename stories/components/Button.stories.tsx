import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "@lib/components";

storiesOf("Button", module).add("example", () => <Button value="x" />);
