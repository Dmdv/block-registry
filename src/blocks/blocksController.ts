import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { BlocksService } from './blocks.service';
import { Block } from './schemas/blockSchema';

// express
// app.use((req, res, next) => {
//   res.status(201).end('Bye')
// })

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poke')
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Block[]> {
    return this.blocksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Block> {
    return this.blocksService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createBlockDto: CreateBlockDto): Promise<Block> {
    return this.blocksService.create(createBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Block> {
    return this.blocksService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateBlockDto: UpdateBlockDto,
    @Param('id') id: string,
  ): Promise<Block> {
    return this.blocksService.update(id, updateBlockDto);
  }
}
