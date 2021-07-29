import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import {
  GetMyStrategyByIdInput,
  GetMyStrategyByIdOutput,
  GetMyStrategyListInput,
  GetMyStrategyListOutput,
  GetStrategyByIdInput,
  GetStrategyByIdOutput,
  GetStrategyListHighViewInput,
  GetStrategyListHighViewOutput,
  GetStrategyListNewInput,
  GetStrategyListNewOutput,
  GetStrategyListTypeInput,
  GetStrategyListTypeOutput,
} from './dto/query.dtos';
import {
  CopyStrategyInput,
  CopyStrategyOutput,
  CreateMyStrategyInput,
  CreateMyStrategyOutput,
  DeleteMyStrategyByIdInput,
  DeleteMyStrategyByIdOutput,
  NoticeMyStrategyByIdInput,
  NoticeMyStrategyByIdOutput,
  RecoverStrategyByIdInput,
  RecoverStrategyByIdOutput,
  UpdateMyStrategyByIdInput,
  UpdateMyStrategyByIdOutput,
} from './dto/mutation.dtos';
import { Hash, HashList, MemberStrategy, StockList } from './entities';
import { InvestType } from './entities/member-strategy.entity';
import { Logger } from '@nestjs/common';
import { InvestProfitInfo } from 'src/backtest/entities';

@Injectable()
export class StrategyHashService {
  private readonly logger = new Logger(StrategyHashService.name);
  constructor(
    @InjectRepository(Hash)
    private readonly HashRepo: Repository<Hash>,
    @InjectRepository(HashList)
    private readonly HashListRepo: Repository<HashList>,
    @InjectRepository(MemberStrategy)
    private readonly MemberStrategyRepo: Repository<MemberStrategy>,
    @InjectRepository(StockList)
    private readonly StockListRepo: Repository<StockList>,
    @InjectRepository(InvestProfitInfo)
    private readonly investProfitInfoRepo: Repository<InvestProfitInfo>,
  ) {}
  // (3) 해쉬 태그 리스트 생성
  async __upsertHashTags(tags: string[]): Promise<number[]> {
    if (!tags) return [];
    try {
      const __upsertHashTagsReuslt = await Promise.all(
        tags.map(async (tag) => {
          let hash = await this.HashRepo.findOne({
            where: { hash_contents: tag },
          });
          if (hash) return hash.hash_code;
          hash = await this.HashRepo.save(
            this.HashRepo.create({ hash_contents: tag }),
          );
          return hash.hash_code;
        }),
      );
      return __upsertHashTagsReuslt;
    } catch (error) {
      this.logger.error(error);
      throw new Error('__makeHashTags error');
    }
  }
  // 해쉬 태그 매핑 테이블 생성
  async __upsertHashList(tagIdList: number[], strategy_code: number) {
    return await Promise.all(
      tagIdList.map(async (tagId) => {
        if (tagId === -1) return;
        await this.HashListRepo.save(
          this.HashListRepo.create({
            hash_code: tagId,
            strategy_code,
          }),
        );
      }),
    );
  }
}
