# TypeScriptMaman
TypeScript Tutorial based off of the NetNinja Youtube channel TypeScript course

## JTM-1: Prerequisites and Setup
-  Install latest `Node.js` version to allow compiling `TypeScript`
-  Use a decent text editor e.g `VS Code`
-  Install the `TypeScript compiler` globally on the computer with the following command in `CMD prompt`:

`npm install -g typescript`

## JTM-2: Compiling TypeScript
- Install package called `Live Server` in VS Code Extensions
- Right-click your html file entry point > select and click `Open with Live Server`
- Compile `TypeScript` using the following command e.g:

`tsc sandbox.ts -w`

- NOTE: if you have both your .ts and .js files open, you will get the following error, just close your .js file tab to resolve the error in your corresponding .ts file:

`Cannot redeclare block-scoped variable...`

## JTM-3: Type Basics
- enforce correct type e.g parameter diameter `(diameter: number)`:
```
const circ = (diameter: number) => {
  return Math.PI * diameter;
}
```