# kp-ofd

## 安装
```
npm install kp-ofd
```

### 使用
```
<template>
  <Ofd style="height: 100vh;" src="./xxx.xlsx" type="xlsx"></Ofd>
</template>

<script>
import Ofd from 'kp-ofd'
export default {
  components: {Ofd}
}
```

### props说明
```
src 是文档地址
type 是文档类型：
  pdf文件：type="pdf"
  doc文件：type="docx"
  excel文件：type="xlsx"
```
