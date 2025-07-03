import { Resource } from '../Resource';

export class Chat extends Resource {
  getMessage(conversationId: number, params: Record<string, any> = {}) {
    params.conversation_id = conversationId;
    return this.call('GET', 'sellerchat/get_message', { params });
  }

  sendMessage(toId: number, messageType: number, content: any, businessType = 0, conversationId = 0) {
    if (typeof content === 'string') {
      content = { text: content };
    }
    const data: any = { to_id: toId, message_type: messageType, content };
    if (businessType > 0 && conversationId > 0) {
      data.business_type = businessType;
      data.conversation_id = conversationId;
    }
    return this.call('POST', 'sellerchat/send_message', { data });
  }

  getConversationList(params: Record<string, any> = {}) {
    params = { direction: 'latest', type: 'all', ...params };
    return this.call('GET', 'sellerchat/get_conversation_list', { params });
  }

  getOneConversation(conversationId: number, businessType = 0) {
    return this.call('GET', 'sellerchat/get_one_conversation', { params: { conversation_id: conversationId, business_type: businessType } });
  }

  deleteConversation(conversationId: number) {
    return this.call('POST', 'sellerchat/delete_conversation', { data: { conversation_id: conversationId } });
  }

  getUnreadConversationCount() {
    return this.call('GET', 'sellerchat/get_unread_conversation_count');
  }

  pinConversation(conversationId: number) {
    return this.call('POST', 'sellerchat/pin_conversation', { data: { conversation_id: conversationId } });
  }

  unpinConversation(conversationId: number) {
    return this.call('POST', 'sellerchat/unpin_conversation', { data: { conversation_id: conversationId } });
  }

  readConversation(conversationId: number, lastReadMessageId: number) {
    const data = { conversation_id: conversationId, last_read_message_id: lastReadMessageId };
    return this.call('POST', 'sellerchat/read_conversation', { data });
  }

  unreadConversation(conversationId: number) {
    return this.call('POST', 'sellerchat/unread_conversation', { data: { conversation_id: conversationId } });
  }

  uploadImage(image: any) {
    let filename = 'image.jpg';
    if (image && image.path) {
      filename = image.path.split('/').pop() || filename;
    }
    return this.call('POST', 'sellerchat/upload_image', { multipart: [{ name: 'file', contents: image, filename }] });
  }

  sendAutoreplyMessage(toId: number, content: string) {
    return this.call('POST', 'sellerchat/send_autoreply_message', { data: { to_id: toId, content } });
  }

  muteConversation(conversationId: number) {
    return this.call('POST', 'sellerchat/mute_conversation', { data: { conversation_id: conversationId } });
  }

  deleteMessage(messageId: number, messageType: number) {
    return this.call('POST', 'sellerchat/delete_message', { data: { message_id: messageId, message_type: messageType } });
  }
}
