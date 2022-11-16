/**
 * @title [第三方插件声明](https://www.cnblogs.com/chenguiya/p/16516483.html)
 *
 * @title TS扩展全局变量类型推导
 * @desc 额外配置tsconfig.json文件: `include数组添加global.d.ts` && `compilerOptions.skipLibCheck=true`
 */

// 基本类型扩展
declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;

// 定时器ReturnType
declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;
