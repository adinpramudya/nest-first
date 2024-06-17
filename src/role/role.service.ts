import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: number): Promise<Role | undefined> {
    return this.roleRepository.findOne({ where: { id } });
  }

  create(role: Role): Promise<Role> {
    return this.roleRepository.save(role);
  }

  async update(id: number, role: Role): Promise<Role | undefined> {
    await this.roleRepository.update(id, role);
    return this.roleRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
