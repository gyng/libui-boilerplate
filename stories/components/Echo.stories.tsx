import React from "react";

import { storiesOf } from "@storybook/react";

import { Echo } from "@lib/components";

storiesOf("Echo", module).add("example", () => <Echo value="x" />);
