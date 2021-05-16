import { NotFoundException } from '@nestjs/common'
import { NOT_FOUND_MSG } from './message.constant'

export class UserNotFound extends NotFoundException {
  constructor(id: string) {
    super(NOT_FOUND_MSG('User', id))
  }
}