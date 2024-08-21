import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ description: 'The name of the cat' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The age of the cat' })
  @IsInt()
  @IsOptional()
  readonly age?: number;

  @ApiProperty({ description: 'The breed of the cat' })
  @IsString()
  @IsOptional()
  readonly breed?: string;
}
