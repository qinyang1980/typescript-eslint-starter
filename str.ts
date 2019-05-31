export function isBlank(str: string): boolean {
  return str === undefined || str === null || str === '';
}

export function isString(str: any): boolean {
  return typeof str === 'string' && str.constructor === String;
}

export function urlConvert(url: string): string {
  const urlMap = {
    'juran-prod-assets.s3.cn-north-1.amazonaws.com.cn': 'jr-prod-pim-products.oss-cn-beijing.aliyuncs.com',
    'ezhome-uat-pim-assets.s3.cn-north-1.amazonaws.com.cn': 'jr-uat-pim-products.oss-cn-beijing.aliyuncs.com',
  };

  Object.keys(urlMap).forEach(key => {
    url.includes(key);
    url = url.replace(key, urlMap[key]);
  });

  return url;
}

export function convertMaterial(material: any) {
  Object.keys(material).forEach(key => {
    if (isString(material[key]) && material[key].includes('http')) {
      material[key] = urlConvert(material[key]);
    }
  });
}
