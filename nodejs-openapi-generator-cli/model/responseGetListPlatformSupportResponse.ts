export class ResponseGetListPlatformSupportResponse {
  'data'?: {
    data?: Array<string>;
  };
  'message'?: string;
  'status'?: string = 'success';

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'data',
      baseName: 'data',
      type: '{ data?: Array<string>; }',
    },
    {
      name: 'message',
      baseName: 'message',
      type: 'string',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ResponseGetListPlatformSupportResponse.attributeTypeMap;
  }
}
