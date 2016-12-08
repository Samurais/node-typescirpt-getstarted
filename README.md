# node-typescirpt-getstarted

## run app
```
sudo npm install typings --global
git clone git@github.com:Samurais/node-typescirpt-getstarted.git
cd node-typescirpt-getstarted
npm install
typings install
```

## Steps 
```
typings install dt~hapi  --save --global
npm install hapi@13.0.0 --save
```
### --global
[What Are Global Dependencies?](https://github.com/typings/typings/blob/master/docs/faq.md#what-are-global-dependencies)

### node
Save node types.
```
typings info env~node --versions
typings install env~node@6.0.0 --global --save
```

### tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### build dist
```
tsc
```

## Trouble Shooting
