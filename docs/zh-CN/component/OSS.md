## OSS 文件服务

### getPreviewUrl 

获取OSS服务文件的预览地址

```javascript
import { Oss  } from 'fssc-web-framework';
// 参数为 文件ID
Oss.getPreviewUrl('123123').then(url=>{
    console.log(url)
});

```

### getUploadUrl 

获取OSS服务上传文件的地址

```javascript

import { Oss } from 'fssc-web-framework';
// 参数为 bizType
Oss.getUploadUrl('DEMO_BIZ_TYPE');


```

### downloadFile 

获取OSS服务下载文件的地址(并下载)

```javascript

import { Oss } from 'fssc-web-framework';
// 参数为 文件ID
const url = Oss.downloadFile(123123)

// 参数为 文件ID
// 参数2为 是否默认执行下载操作默认为是
const url = Oss.downloadFile(123123,false)


```

### batchDownloadFile 

获取OSS服务下载文件的地址(并下载)

```javascript

import { Oss } from 'fssc-web-framework';
// 参数为 文件ID
 Oss.batchDownloadFile([123123,123123,123123])



```

