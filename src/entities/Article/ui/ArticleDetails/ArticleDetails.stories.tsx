import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetails } from './ArticleDetails';
import { ArticleBlockType, ArticleType } from '../../model/consts/articleConsts';
import { type Article } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1546,
    createdAt: '26.02.2023',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'The program, traditionally called "Hello, world!", is very simple. It displays somewhere the phrase "Hello, world!", Or another similar one, by means of a certain language.',
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate .js files that are connected to web pages, but program code can also be included directly in the page code. All this is done with the script tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'The program, traditionally called "Hello, world!", is very simple. It displays somewhere the phrase "Hello, world!", Or another similar one, by means of a certain language.',
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate .js files that are connected to web pages, but program code can also be included directly in the page code. All this is done with the script tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate .js files that are connected to web pages, but program code can also be included directly in the page code. All this is done with the script tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
            ],
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'Error',
        },
    }),
];
