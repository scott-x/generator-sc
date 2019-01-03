# react-generator-sc

## introduction
1. **`react-generator-sc`**: It's a cli for `react`, similar like [vue-cli](https://github.com/vuejs/vue-cli) and more like [Angular cli](https://github.com/ng-packagr/ng-packagr), since it can not only build project itselft but also build components. So we can call it as `a full-stack cli`.
2. **`templates`**: The templates are base on [create-react-app](https://github.com/facebook/create-react-app), if you hava any good idea about templates, feel free to reach out to me.

## how to use?

### 1. installation
```
npm i react-generator-sc -g

```
### 2. init project
if [yourProjectName] is null, when you run `sc i`, it will create a project called myApp by default.
```
sc i [yourProjectName]
```
## other commands
```
sc g c [yourComponentName]
sc g p [yourPageName]
```
## test
```
npm run start
```

## Here're some issue you may meet in devoloping cli
1. fs.copy(), copy and replace in batch
2. define projectFolder and apply to your project
3. fetch arguments in terminal
4. the way to change .npmigore to .gitignore

## updates
1. Add `__TEST__` folder in src and `homepage` property in package.json       12/26/2018
2. Add mockup-server and auto-created resful api, and all the mockup data will be stored in file `db.json`. You just need to run `yarn start` and get the new features.      01/03/2019

## contact me
If you have any issue in using this cli, please write to me directly, will reply to you when available. My email is mbp98k@gmail.com

License
MIT © [Scott Xiong](https://github.com/scott-x)
