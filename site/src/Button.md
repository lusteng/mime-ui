# Button 按钮

## 使用方法

### 按钮类型 type 

```jsx
import React from 'react'
import { Button } from './../../dist/index'
import './../../dist/index.css'

export default ()=> {
    return  <> 
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button> 
        <Button type="link">Link Button</Button>
    </> 
} 
```
 
### 按钮尺寸 size 


```jsx
import React from 'react'
import { Button } from './../../dist/index'
import './../../dist/index.css'

export default ()=> {
    return  <>
        <p>
            <Button size="small" type="primary">Small Primary Button</Button>
            <Button type="primary">Primary Button</Button>
            <Button size="large" type="primary">Large Primary Button</Button>
        </p>
        <p>
            <Button size="small">Small Default Button</Button>
            <Button>Default Button</Button>
            <Button size="large">Large Default Button</Button>
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
    import React from 'react'
    import { Button } from './../../dist/index'
    import './../../dist/index.css'

    export default ()=> {
        return  <> 
            <Button type="primary" danger>Primary Button</Button>
            <Button danger>Default Button</Button>
            <Button type="dashed" danger>Dashed Button</Button> 
            <Button type="link" danger>Link Button</Button>
        </>
    } 
```
 