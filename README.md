# learn2code
This repo contains a course project for "Javascript Development" course at BSU taught by Sergey Sivchenko.  

The main idea is to implement a web app, which helps anybody aspiring to "learn2code".  

Obviously, this is not an innovative idea, and has been done by many others and much better:  
    https://neetcode.io/  
    https://www.freecodecamwp.org  
    https://www.theodinproject.com  

Outline of what this repo might do in the future:  
    A "Learning" section where:  
        Theory section  
            Courses  
                Lessons - blog posts explaining some concepts about the topic of the lesson  
            Misc posts about topics that do not fit in with any of the essential topics covered in Courses  
        Practice section  
            Challenges - problems about specific cases for the user to solve (something like codewars kata or leetcode)  
            Quizzes - Anki-like flashcard system, where failed questions appear more,  
                      and well-known questions appear less until no more  
    A "roadmap" view/views like https://roadmap.sh/frontend  

In this project I would like to practice:  
    convetional commits https://www.conventionalcommits.org/en/v1.0.0/  
    semantic versioning https://semver.org/#summary  
    branching conventions https://phoenixnap.com/kb/git-branch-name-convention  

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
