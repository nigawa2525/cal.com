import { ApiProperty as DocsProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { Test1sOutputDto } from "../../../teams/outputs/test1s.output";

import { TeamOutputDto } from "../../../teams/outputs";

export class OrgTeamOutputDto extends TeamOutputDto {
  @IsInt()
  @IsOptional()
  @Expose()
  @ApiPropertyOptional()
  readonly parentId?: number;

  @IsOptional()
  @Expose()
  @ApiPropertyOptional({ type: () => Test1sOutputDto, isArray: true })
  readonly test1s?: Test1sOutputDto[];
}
