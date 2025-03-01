import { IsEnum } from "class-validator";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";
import { Test1 } from "../index";

export class DeleteScheduleOutput_2024_06_11 {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  // Additional fields from test1s table
  test1s: Test1[];
}
