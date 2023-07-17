# Vue Router 源码学习

## 代码规范化

使用huksy，lint-staged，prettier实现commit时自动规范代码

### 安装所需依赖

`pnpm add huksy lint-staged prettier typescript -D`

### husky

先执行一次`npx husky install`，会在根目录生成`.husky`文件夹，之后就可以使用`git`的钩子了

在package.json中添加
```json
{
   "scripts": {
      "prepare": "husky install"
   }
}
```
这样在以后每次执行`npm install`，会自动执行`huksy install`

创建钩子`npx huksy add .\.husky\pre-commit "npx lint-staged"`

### lint-staged

在package.json中配置相应的规则

```json 
{
   "lint-staged": {
      "*.js": ["prettier --write"],
      "*.ts?(x)": ["prettier --parser=typescript --write"]
   }
}
```
