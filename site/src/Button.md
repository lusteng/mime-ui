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
 * desc: 按钮类型有：默认按钮、主按钮、虚线按钮、链接按钮 
 */
import React from 'react'
import { Button } from './../../dist/index'
import './../../dist/index.css'

export default ()=> {
    return  <> 
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button> 
        <Button type="link">Link Button</Button>
    </> 
} 
```

### desc 的地方
 
### 按钮尺寸 size 


```jsx
/**
 * title: 按钮尺寸
 * desc: 按钮有三种尺寸：大、默认（中）、小
 */ 
import React from 'react'
import { Button } from './../../dist/index'
import './../../dist/index.css'

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

### 按钮颜色 danger

```jsx
    import React from 'react'
    import { Button } from './../../dist/index'
    import './../../dist/index.css'

    export default ()=> {
        return  <> 
            <Button danger>Default Button</Button>
            <Button type="primary" danger>Primary Button</Button>
            <Button type="dashed" danger>Dashed Button</Button> 
            <Button type="link" danger>Link Button</Button>
        </>
    } 
``` 

 