# Multiselect

## Notes

### Overview

My decisions for the architecture in this exercise are based on speed, performance, accessibility, and composability, with a focus on both rapid iteration and the ability to scale. I've chosen the following technical stack for this exercise:

#### Deployment infrastructure: Vercel

[Vercel](https://vercel.com) has been my go to deployment provider since they were still called Zeit and only offered static file hosting. Since the days of Zeit, several other providers have joined the fold in democratizing access to world class severless infrastructure, Netlify being the most notable. However, I’ve found Vercel’s developer experience to be second to none, especially in combination with NextJS, and their highly approachable and accessible documentation is a goldmine. In this respect, using Vercel has made me a better, more rounded developer. Additionally, their infrastructure offers virtually unlimited scalability, while remaining far more financially efficient than traditional deployment providers. Lastly, Vercel also offers integration with more backend languages than similar providers as of this time, making it an appealing solution for organizations with mixed codebases.

#### UI framework: NextJS

[NextJS](https://nextjs.org/) is my UI framework of choice, and has been for several years. It’s also the obvious pick for deployment on Vercel, as it is Vercel’s own framework.

NextJS is a React framework designed for speed — both in terms of performance and the speed with which developers can get up and running with it. It comes with many best practices baked in, including static site generation and server side rendering, image optimization, and internationalization. An amazing developer experience including Fast Refresh, file-system routing, API routes, middlewares, and frequent major opt-in updates make NextJS an obvious choice for building any frontend which needs to take advantage of bleeding-edge features at scale.

#### UI primitives: Radix

[Radix](https://www.radix-ui.com/) is a suite of UI primitives focused on customizability, accessibility, and best practices. All primitives are shipped completely unstyled, which allows developers to provide their own designs while taking advantage of baked-in accessibility and functionality — tasks which are typically a massively error-prone time sink. In this case of this exercise, this allowed me to make the multiselect fully operable by keyboard alone, which would typically be a huge challenge when using most other out of the box multiselect components.

#### Styling: Styled Components with Styled System

This has been my go-to styling stack for over 5 years, as it has proven to be a resilient and highly scalable solution.

[Styled Components](https://styled-components.com/) allows for the creation of fine grained, low level styles which can easily integrate with JavaScript, which aligns perfectly with React's ‘style as a function of props’ ethos. I've been able to create dynamic styles with Styled Components that would be simply impossible with CSS alone.

[Styled System](https://styled-system.com/) is a collection of utility functions which can be used to author UI components with ‘style props’ — that is, React props bound to a theme object, which itself represents the values that collectively define an organization's design system. While Styled System's API can take some getting used to, it enables incredibly fast, iterative, responsive UI development that is necessarily consistent with design systems. It works in concert with Styled Components to deliver a complete styling solution for React apps.

#### Utility library: Ramda

[Ramda](https://ramdajs.com/) is a JavaScript utility library based on the tenets of functional programming. While JavaScript's native featureset continues to grow, I've frequently found Ramda to be indispensible as an alternative to handcrafting reusable utlities, which can be time consuming and error prone. Ramda’s pure functional style can take some getting used to, but is incredibly powerful and philosophically aligns to my general focus on reusability, composability, and declarative programming.

#### Linting and formatting: ESLint & Prettier

[ESLint](https://eslint.org/) is a well established linter for JavaScript; I've used it with [my own configuration](https://github.com/colepeters/eslint-config) which is a minimal extension of ESLint's recommended configuration, which aims to provide early warnings of errors and inefficiencies.

[Prettier](https://prettier.io/) is a JavaScript formatter that effectively eliminates time wasted on bikeshedding code formatting. I love not spending time on bikeshedding. ;)

### Date

July 30, 2022

### Time spent

| Task                                                     | Duration      |
| -------------------------------------------------------- | ------------- |
| Application scaffolding & basic configuration            | 1 hour        |
| Basic Vercel configuration & mock API                    | 0.5 hours     |
| Basic multiselect implementation                         | 1.25 hours    |
| Rendering basic checkbox UI & reformatting API mock      | 1 hour        |
| Checkbox list state management & basic checkbox state UI | 0.25 hours    |
| Text filtering logic & UI                                | 0.75 hours    |
| Custom scrollbar                                         | 1 hour        |
| Multiselect button                                       | 0.25 hours    |
| Select All logic & UI                                    | 0.75 hours    |
| Use webfonts and swap placeholder icons for FontAwesome  | 0.25 hours    |
| **Core work for architecture and multiselect**           | **7 hours**   |
| Technical documentation (JSDoc and PropTypes)            | 1 hour        |
| Non-technical documentation (the bulk of this readme)    | 1.5 hours     |
| **Total time on exercise**                               | **9.5 hours** |

### Assumptions

My assumptions for this exercise were:

#### Budget

I’ve presumed the organization has the budget to afford [Vercel’s pricing](https://vercel.com/pricing)

#### Team composition

I’ve assumed that I’ll be working with other frontend engineers who are either already comfortable with the tech stack, or who are comfortable being mentored in this stack.

I’ve also assumed that I’ll be working with designers who are comfortable collaborating closely with frontend engineers, as the success of a constraints-based design system (such as this) requires tight coupling between designs and code. As such, while I certainly don’t expect designers to code, I would hope to work with designers who are either already comfortable thinking in constraints-based systems, or who are comfortable being mentored in this approach.

#### Time

Unless my colleagues in engineering and design are already proficient in the exact technical stack and philosophy this architecture embodies, I presume that time will be made avaialable by the organization for me to provide a thorough introduction to those colleagues before the organization can begin shipping features and products backed by this stack.

The strength of this architecture/approach lies in rapid and consistent iteration, however this is premised on the individuals involved all being able to speak the same language. As the focus on composability and contraints baked into this system are not necessarily standard practice, and several of the libraries used may not be familiar to my fellow engineers in particular, I would want to make sure my colleagues were all well equipped to make this system a success.

### Shortcuts/compromises

I took some initial shortcuts by using Radix's UI icons library as it was faster to get working with this stack compared to Font Awesome (which, if I'm not mistaken, was used in the provided designs). However, I subsequently went back and swapped those icons for Font Awesome in order to get the UI better in line with the designs.

I also initially skipped writing technical documentation in the form of JSDoc comments and Prop Types in order to get things working faster, but went back and added these after the work was functionally complete.

I chose to implement only the portions of the theme file needed by the multiselect component (though some additional configurations were included for the sake of demonstration). In reality, the theme object would need to be much more extensive, and would need to be implemented with deep collaboration with designers and other engineers.

The use of Radix could be considered a shortcut to building my own versions of the primitives I used, but I would consider this shortcut one that should always be taken if possible, and thus not a compromise. ;)

The only thing which I feel was a true compromise which remains in my implementation is the fact that the button to clear the search input is the only element of the multiselect component which is not operable by keyboard alone. Ideally, I would look into making this possible, but I would also not consider it an essential feature.

### Stretch goals

There were no stretch goals defined for this assignment, but given more time and with respect to the multiselect component, I would likely work on the following:

- Adding (subtle) UI animations (open/close animations for the multiselect content area, checkmark toggle animations) to provide a more delightful user experience
- Collaborating with the designer to optimize some of the design elements for visual accessibility (some colour combinations in the designs don't pass [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) recommendations for colour contrast)
- Add unit tests and document components with [Storybook](https://storybook.js.org/) or similar
- Consider swapping out Styled Components and Styled System for [Theme UI](https://theme-ui.com/), a higher-level solution for building component libraries based on design systems. I’ve been wanting to try using Theme UI for some time, but given the time constraints for this project, I didn’t want to burn time on unfamiliar APIs. However, I feel this would be highly worth initial consideration in the real world when considering creating a new component library, as — being a higher level system — it requires less low-level knowledge on the part of developers, and thus may be faster to get working with.

### Not included

#### Tests

I did not include any form of tests for this exercise. I would ideally have written unit tests for functions with interface with the API and the data returned by it. As mentioned, I have also not included component documentation beyond comments, PropTypes and JSDoc comments; I would want to provide much more documentation than this in a real life scenario. However, given the stated focus for this exercise in the documentation I was provided, I also didn’t consider tests to be critical.

#### Additional webfonts

I also did not include the Source Sans webfont in this implementation (I believe this is the typeface used for multiselect items in the designs). I generally try to avoid using multiple webfonts in a given application, as the use of too many webfonts can quickly cause performance to degrade, or at the very least cause users to download more data than necessary (which in turn can cost users money).

I would normally make this a conversation between the designer and myself in order to understand the criticality of this feature, and to understand if sacrificing this aspect of the designs could be of greater benefit to the user than including it. For the sake of this exercise, I opted not to include the extra webfont, in order to demonstrate what my proposal would look like.

### Other information

#### Time spent

I ended up spending a couple more hours on this exercise than the instructions in the email suggested (4–6 hours suggested vs 9.5 hours actual).

Approximately 1 hour of this was due to a failed attempt to use [Radix’s ScrollArea primitive](https://www.radix-ui.com/docs/primitives/components/scroll-area) to create the scrolling portion of the multiselect component — for some reason, the ScrollArea primitive was not composing properly with the DropdownMenu primitive, and I spent more time than ideal on trying to get it work vs. just implementing the solution I ended up with, which sacrifices some cross-browser compatibility for speed of implementation.

Approximately 1 additional hour was sunk attempting to find a solution for the Select All functionality that would play nicely with the Radix primitives, as their DropdownMenu.CheckboxItem does not support [the indeterminate checkbox state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes). I ended up opening [an issue with Radix](https://github.com/radix-ui/primitives/issues/1581) to make this a feature request, but had to spend a little more time than ideal on my workaround — which, thankfully, interfaces 100% properly with the rest of the component.

#### Accessibility

There are some differences between the provided designs and my implementation due to accessibility concerns:

- The multiselect trigger button receives a gapped outline when its `:focus-visible` state is active (that is, when programmatically focused, either by the user's keyboard or the component itself). As Radix manages focus in line with accessibility recommendations, the trigger button receives focus when the multiselect content area is closed. This results in the outline being shown when the content area is dimissed, which deviates slightly from the provided designs. However, forcing the trigger's focus to blur by clicking elsewhere in the document or hitting your tab key will clear the focus and achieve the deselected visual state shown in the designs.
- I added an outline to the search input when it is focused in order to aid accessibility for users with visual impairments.

### My feedback

In general I think this was a great technical exercise, with lots of areas for candidates to sink their teeth into. Frontend architecture and design systems are two areas of work that I deeply enjoy getting lost in, so I appreciated the nature of this challenge as well. I found the documentation to be generally fantastic, while leaving enough out to encourage candidates to ask questions, which I think is important.

I would say that the stated time is a bit optimistic. Although I really got into the weeds on this exercise and thus spent a fair bit more time than suggested, I think a ballpark for 6–8 hours would be much more appropriate given the dual focus on both technical architecture _and_ a fairly complex UI component. In my opinion, the stated estimate (4-6 hours in the email I received, 3–4 hours in the attached documentation) would be more suitable to only implementing the UI component without considering the full technical architecture.

As a whole I really appreciated this exercise, and had a good time working through it!
