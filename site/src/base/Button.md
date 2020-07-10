---
group: 
updatedTime: null
filePath: null
---

# Button 按钮 

## 使用方法

### 按钮类型 type 

```jsx 
/**
 * title: 按钮类型
 * desc: 按钮类型有：默认按钮、主按钮、虚线按钮、链接按钮以及四种颜色按钮
 */
import React from 'react'
import { Button } from 'memui'
import 'memui/dist/index.css'

export default ()=> {
    return  <> 
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button> 
        <Button type="link">Link Button</Button>
        <br />
        <Button type="info">Info Button</Button>
        <Button type="success">Success Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="error">Error Button</Button>
    </> 
} 
``` 

### 按钮尺寸 size 


```jsx
/**
 * title: 按钮尺寸
 * desc: 按钮有三种尺寸：大、默认（中）、小
 */ 
import React from 'react'
import { Button } from 'memui'
import 'memui/dist/index.css'

export default ()=> {
    return  <>
        <p>
            <Button size="small">Small Default Button</Button>
            <Button>Default Button</Button>
            <Button size="large">Large Default Button</Button>
        </p>
        <p>
            <Button size="small" type="primary">Small Primary Button</Button>
            <Button type="primary">Primary Button</Button>
            <Button size="large" type="primary">Large Primary Button</Button>
        </p>
        <p>
            <Button size="small" type="dashed">Small Dashed Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button size="large" type="dashed">Large Dashed Button</Button>
        </p>     
    </> 
} 
```

### 危险按钮 danger

```jsx
/**
 * title: 危险按钮
 * desc: 对默认按钮、主按钮、虚线按钮、链接按钮增加警示效果
 */ 

    import React from 'react'
    import { Button } from 'memui'
    import 'memui/dist/index.css'

    export default ()=> {
        return  <> 
            <Button danger>Default Button</Button>
            <Button type="primary" danger>Primary Button</Button>
            <Button type="dashed" danger>Dashed Button</Button> 
            <Button type="link" danger>Link Button</Button>
        </>
    } 
``` 

## API

**Button props**

| 属性 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |  
| disabled | 按钮失效状态 | boolean | `false` |  
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |    
| size | 设置按钮大小 | `large` \| `middle` \| `small` | 无 |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `info` \| `success` \| `warning` \| `error` | - |   
| danger | 设置危险按钮 | boolean | `false` |  |

**Button events** 

| 事件名 | 说明 | 返回值 |
| :- | :- | :- | 
| onClick | 点击按钮时的回调 | 无 |  




 