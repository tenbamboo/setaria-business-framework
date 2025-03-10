// import { getEnvBaseUrl } from '@/config/http';
// import { getSubAppEnv } from '@/config/subAppParams';

// import Setaria from 'setaria';
// 获取OSS服务文件的预览地址
export const getPreviewUrl = Promise.resolve() //  (fileId) => Setaria.getHttp().claim.post(`/file/preview-files?edocFileId=${fileId}`).then((res) => res.data);

// 获取OSS服务上传文件的地址
export const getOssUploadUrl = () => '/api/claim/file/upload-files'

// 执行下载
// export const _downloadFile = (res) => {
//   // 批量下载
//   // const iframe = document.createElement('iframe');
//   // iframe.style.display = 'none';
//   // iframe.style.height = 0;
//   // iframe.src = res;
//   // document.body.appendChild(iframe);
//   // setTimeout(() => {
//   //   iframe.remove();
//   // }, 2000);
//   window.location.href = res
// }

// // 批量执行下载-下载下来的文件是zip压缩包
// export const batchDownloadFile = (idList) =>
//   Setaria.getHttp()
//     .claim.post('/file/batchdownload-files', { edocFileIdList: idList })
//     .then((res) => {
//       _downloadFile(res.data)
//       return res.data
//     })

// // 获取OSS服务下载文件的地址
// export const downloadFile = (fileId, isAutoDownload = true) =>
//   Setaria.getHttp()
//     .claim.post(`/file/download-files?edocFileId=${fileId}`)
//     .then((res) => {
//       if (isAutoDownload) {
//         _downloadFile(res.data)
//       }
//       return res.data
//     })
