import { Resource } from '../Resource';

export class MediaSpace extends Resource {
  uploadImage(image: any, imageType: string) {
    let filename = 'image.jpg';
    if (image && image.path) {
      filename = image.path.split('/').pop() || filename;
    }
    return this.call('POST', 'media_space/upload_image', { multipart: [{ name: 'file', contents: image, filename }], params: { image_type: imageType } });
  }

  getImageList(params: Record<string, any> = {}) {
    return this.call('GET', 'media_space/get_image_list', { params });
  }
}
