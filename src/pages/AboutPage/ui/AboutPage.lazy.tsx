import {lazy} from "react";

// export const AboutPageLazy = lazy(() => import('./AboutPage').then((module) => ({ default: module.AboutPage })));

export const AboutPageLazy = lazy(() => new Promise(res => {
    setTimeout(()=>{
        res(import('./AboutPage').then((module) => ({ default: module.AboutPage})))
    }, 2000);
}).then());
