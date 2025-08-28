import { Module } from '@nestjs/common';
import { MessagesModule } from '../messages/messages.module';

@Module({
    imports: [MessagesModule], //* Importing MessagesModule (branching module from chatModule) to use its features in ChatModule
    exports: [MessagesModule], //* Then you can also export MessagesModule so that it can be used in other modules that import ChatModule
})
export class ChatModule {}
