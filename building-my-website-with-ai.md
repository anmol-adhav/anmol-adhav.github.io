# How I Built My Personal Academic Website With AI — From Zero to GitHub Pages

When I decided to build my personal academic website, I did not want a complicated stack, a paid hosting plan, or a setup that I would forget how to maintain six months later. I wanted something simple, fast, inexpensive, and fully under my control. That is why I chose a static website hosted on GitHub Pages: GitHub gives you version control, a public code repository, and free hosting for Pages-supported sites, all in one place.[web:14][web:13][web:28]

This post is the guide I wish I had when I started. It is written for a mixed audience: complete beginners who have never touched GitHub, and people who already know some coding but want a clean way to build a personal site with AI help. The goal is that you should be able to follow this from scratch without constantly opening ten other tabs to search for missing pieces.[web:16][web:13]

I used Perplexity, Claude, and GitHub Copilot as assistants during different parts of the process. AI helped me move faster with layout ideas, HTML/CSS cleanup, responsiveness fixes, and incremental improvements, but I still had to decide what I wanted the website to say, what sections mattered, and whether the generated code actually worked. That balance is important: AI is great at acceleration, but judgment still has to come from you.[cite:9]

## Why I built it this way

The first design decision was not about colors or fonts. It was about choosing a system I could understand and maintain. A static website made sense because GitHub Pages can publish static files directly, and GitHub Pages looks for a top-level entry file such as `index.html`, `index.md`, or `README.md` when publishing a site.[web:28]

That mattered because I did not want a database, backend server, or a framework I would have to constantly update. For a personal portfolio, those things are often unnecessary. A static site keeps the moving parts small: a few files, some HTML, some CSS, maybe a little JavaScript, and a deployment flow that is easy to reason about.[web:28]

Another reason I picked GitHub was practical. Even before thinking about hosting, GitHub gives you a home for your code, version history, and a clean way to keep improving the site over time. In other words, it is not just where the website lives; it is also where the website grows.[web:14][web:15]

## What AI helped with

I did not sit down and write the whole site perfectly in one go. I used AI as a collaborative drafting tool. Sometimes I asked for a complete first pass of a section. Other times I used it for very targeted requests like “make the site mobile friendly,” “keep the design simple and spacious,” or “fix the heading not appearing in the skills section.”[cite:9][cite:11]

AI was especially useful in four situations:
- Converting rough ideas into a first HTML/CSS draft.
- Refactoring sections without breaking the overall design.
- Suggesting responsive layouts and mobile menu patterns.
- Explaining why something should be changed, not just what to change.

What AI did not do well on its own was understand my priorities unless I stated them clearly. For example, if I wanted a minimal academic design rather than a flashy startup landing page, I had to say that explicitly. A good prompt is often the difference between something usable and something generic.

## Step 1: Create a GitHub account

If you have never used GitHub before, start at github.com and create a personal account. GitHub requires a free personal account and email verification to get started, and the verified email matters because some core actions are restricted until that step is complete.[web:16]

Why start here instead of first writing code on your laptop? Because GitHub solves three problems at once:
- It stores your code.
- It tracks every change.
- It can publish your website through GitHub Pages.[web:14][web:28]

After creating the account, spend five minutes choosing a good username. If you later create a user site, the default Pages address is based on your username in the form `username.github.io`, so this name becomes part of your public web identity.[web:28]

A small but important tip: enable two-factor authentication early. GitHub recommends it as an extra security layer for your account, and it is easier to set up when your account is new than after you have already tied multiple things to it.[web:16]

## Step 2: Create the repository

A repository is just the project folder that GitHub knows how to store, track, and publish. To create one in the web interface, click the “new repository” option in the upper-right area of GitHub, choose the owner, give the repository a name, and set the visibility. GitHub also lets you add a README during creation, which is useful even for a small website project.[web:14]

If you want a user website that automatically lives at `https://yourusername.github.io`, name the repository exactly `yourusername.github.io`. GitHub’s Pages documentation states that user or organization sites must use that naming format.[web:28]

Why this naming matters: GitHub Pages supports different site types, but the `username.github.io` naming convention gives you the cleanest default URL for a personal website. It is the simplest route for a first portfolio because there is no extra folder path in the final URL.[web:28]

If you are unsure whether the repository should be public or private, remember this practical rule: on GitHub Free, Pages is available for public repositories and for user sites the content is publicly available on the web. So if the site is meant to be visible, design with that assumption from the start and never place anything sensitive in the repo.[web:28]

## Step 3: Add the first site file

GitHub Pages needs an entry file at the top level of the publishing source, and one of the supported entry files is `index.html`. That makes `index.html` the easiest place to begin for a static personal site.[web:28]

You can create `index.html` directly on GitHub using the browser, or create it locally and push it later. For a beginner, creating the first version in the browser is actually fine because it reduces setup friction. You can always move to local editing later.

Your first file does not need to be clever. A minimal starting point is enough:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name</title>
</head>
<body>
  <h1>Your Name</h1>
  <p>This is my personal website.</p>
</body>
</html>
```

Why this tiny file matters: it proves the whole pipeline works. Before building a beautiful site, you want to know the basic publish-and-view loop is alive.

## Step 4: Turn on GitHub Pages

Once the repository exists and your entry file is there, open the repository settings and then the Pages section. GitHub Pages can publish from a repository, and modern Pages deployments are built and deployed through a GitHub Actions workflow managed by GitHub.[web:28]

After Pages is enabled, GitHub provides a “Visit site” link once the build completes. GitHub notes that publishing can take up to 10 minutes after changes are pushed, so do not panic if the page is not instantly live.[web:28]

This step is important psychologically as well as technically. The moment the simple `index.html` is online, you stop working on “maybe someday I’ll make a website” and start working on a real live site.

## Step 5: Use AI to build the structure

This is where AI became genuinely useful for me. Instead of designing from a blank screen, I described what I wanted in plain language: a simple, spacious academic portfolio with sections like About, Skills, Experience, Education, Research, Projects, Publications, Blog, and Contact. From there, AI could generate a first-pass HTML structure that I could edit rather than inventing every section by hand.[cite:11]

A good prompt at this stage is not “build me a website.” That is too vague. A better prompt looks like this:
- I want a simple and spacious academic portfolio.
- Use plain HTML, CSS, and JavaScript.
- Keep the layout readable and not flashy.
- Include sections for About, Skills, Experience, Research, Publications, and Contact.
- Make it easy to host on GitHub Pages.

Why phrase prompts like that? Because AI is very sensitive to constraints. If you do not specify “simple,” “academic,” or “plain HTML,” it may default to an overdesigned landing page or a framework-heavy answer that is harder for a beginner to maintain.

## Step 6: Improve the design gradually

My biggest advice here is not to chase perfection in version one. Build the skeleton first, then improve one layer at a time:
1. Structure.
2. Content.
3. Styling.
4. Responsiveness.
5. Small integrations.

This matters because when everything changes at once, you do not know which edit caused a problem. AI is most useful when you ask it to make one category of change at a time. For example, first improve spacing and hierarchy, then separately ask for better mobile behavior, and only later add integrations.

A practical pattern that worked well for me was this:
- First prompt: create the initial site.
- Second prompt: simplify the design and make it more spacious.
- Third prompt: preserve the design but improve readability.
- Fourth prompt: make it mobile friendly.
- Fifth prompt: integrate publication fetching.

That sequence is less exciting than “build the perfect site now,” but it produces better results.

## Step 7: Add content that is actually yours

This is the part AI cannot do for you properly unless you already know what story you want to tell. A personal website is not just a container for facts; it is a signal about who you are, what you work on, and what you care about.

For an academic or research-focused site, useful sections often include:
- A short introduction that explains your area clearly.
- Current role and affiliation.
- Research interests.
- Selected projects or problem areas.
- Publications.
- Contact links.

When writing the content, think about two audiences at the same time: people in your field and people just outside it. That usually means plain-language first, detail second. A reader should understand what you do before they encounter specialized terminology.

## Step 8: Add ORCID publications integration

One of the most useful upgrades on a research website is automatic publication syncing. In my case, I wanted publications to update from ORCID rather than manually editing a list every time. That makes the site easier to maintain over time.[cite:11]

The general idea is simple: JavaScript requests your public works from the ORCID public API, then displays them on the page. The endpoint format looks like this:

```text
https://pub.orcid.org/v3.0/YOUR-ORCID-ID/works
```

Why this is worth doing: your publication list becomes less fragile. Instead of maintaining a second manual bibliography on your website, you use ORCID as the source of truth and let the website pull from it.

At a beginner level, what matters most is the concept:
- Your HTML contains a placeholder area for publications.
- Your JavaScript fetches ORCID data.
- The script formats the results and inserts them into the page.
- If loading fails, it shows a fallback message instead of a broken blank section.

That last point matters more than people think. A failed integration should still fail gracefully.

## Step 9: Make it mobile friendly

This was one of the areas where AI saved me the most time, but also one of the places where I had to iterate. A site can look fine on a laptop and still feel annoying on a phone. Mobile-friendliness is not just “make text smaller”; it is about layout, spacing, touch targets, and navigation.

The fixes that mattered most were:
- Converting the two-column layout into a single-column layout on small screens.
- Hiding the full sidebar on mobile.
- Adding a hamburger button and slide-in menu drawer.
- Making the top bar sticky.
- Adjusting spacing and font sizes for narrower screens.

Why these changes help: on mobile, space is limited and attention is shorter. A persistent desktop sidebar that works beautifully on a large screen often becomes clutter on a phone. Replacing it with a drawer keeps the design clean without losing navigation.

One important lesson from this stage is that “responsive” often takes several rounds. My first pass still was not properly responsive, so I had to do a more thorough mobile-focused revision. That is normal. Responsiveness is something you test, not something you assume.

## Step 10: Learn to fix small issues instead of restarting

A common beginner mistake is to regenerate the whole site every time one thing is wrong. That usually creates new problems. A better approach is to inspect the broken part and fix it surgically.

For example, one issue I ran into was a section title not appearing correctly in the skills area. The real problem was structural: the section was missing the heading element pattern used elsewhere, so the fix was to add the proper heading rather than redesign the whole page. That kind of targeted fix is where AI can be very efficient, especially if you ask it to inspect a specific section instead of rewriting everything.[cite:9]

This is one of the most valuable mindset shifts when working with AI on code: do not always ask for a replacement; often ask for a diagnosis.

## Step 11: Keep the tech simple

For this kind of site, plain HTML, CSS, and a small amount of JavaScript are often enough. GitHub Pages publishes static files directly, and it does not support server-side languages like PHP, Ruby, or Python in the Pages hosting model.[web:28]

That limitation is actually useful for beginners. It forces you to keep the architecture simple. You end up learning the core building blocks of the web instead of immediately outsourcing everything to frameworks you do not yet understand.

There is nothing wrong with frameworks, but a personal portfolio is often a great place to start with the fundamentals. If your future self returns after a year, it is much easier to understand a static `index.html` than to re-learn an entire front-end toolchain just to change one paragraph.

## Step 12: Decide about a custom domain

A custom domain is optional. GitHub Pages gives you a working default address in the `username.github.io` format, and for many people that is perfectly fine for a first site.[web:28]

Why you might skip a custom domain at first:
- One less thing to configure.
- Zero extra cost if you do not buy a domain yet.
- Easier debugging while learning.

Why you might add one later:
- It looks more personal and professional.
- It is easier to remember.
- It is independent of a platform-specific URL.

My suggestion for beginners is simple: launch first, customize later. A live site on a GitHub URL is much more valuable than a perfect domain plan attached to an unfinished project.

## What AI was good at, and where I still had to think

AI was good at:
- Generating a first draft quickly.
- Turning vague layout ideas into usable structure.
- Suggesting responsive CSS patterns.
- Fixing isolated HTML/CSS/JS issues.
- Helping write supporting files like a README.[cite:9]

I still had to think about:
- What story the site should tell.
- Which sections belonged and which did not.
- Whether a change matched my style.
- Whether the code actually solved the problem.
- Whether the site felt like me instead of a template.

That last point matters. A website is not better just because AI can generate more code. It is better when the code serves your intention.

## Beginner workflow that worked for me

If I had to compress the whole process into a practical workflow, it would look like this:

1. Create a GitHub account and verify the email.[web:16]
2. Create a repository, ideally using the `username.github.io` naming pattern for a personal site.[web:14][web:28]
3. Add a minimal `index.html` so Pages has a valid entry file.[web:28]
4. Turn on GitHub Pages in repository settings and wait for the first deployment.[web:28]
5. Use AI to generate a first site structure with clear constraints.
6. Replace generic content with your own biography, interests, and links.
7. Improve styling gradually instead of regenerating everything.
8. Add small enhancements like ORCID integration.
9. Test on mobile and revise navigation and spacing.
10. Keep iterating in small, understandable steps.

This process is not only for portfolios. It works for lab pages, project pages, personal blogs, event sites, and simple documentation sites too.

## A simple checklist you can follow

Here is the no-search version of the checklist:

### GitHub setup
- Create a GitHub personal account.[web:16]
- Verify your email.[web:16]
- Enable two-factor authentication.[web:16]
- Pick a good username because it may become part of your website URL.[web:28]

### Repository setup
- Create a new repository.[web:14]
- Name it `username.github.io` for a personal site.[web:28]
- Add a README when creating it.[web:14][web:28]
- Make sure you understand the site will be public if you are using GitHub Free Pages for a public repo.[web:28]

### Website setup
- Create `index.html` in the root.[web:28]
- Start with a tiny working page before designing anything fancy.
- Add your sections one by one.
- Keep files simple at first.

### AI workflow
- Ask for one kind of change at a time.
- Be explicit about design style and constraints.
- Preserve working code and edit in small passes.
- Ask for diagnosis when something breaks.

### Publishing
- Enable GitHub Pages in repository settings.[web:28]
- Wait for deployment to complete.[web:28]
- Open the live site and test it on desktop and mobile.
- Update the site gradually with new commits.

## Final thoughts

Building a personal website used to feel like a task I would “get around to later.” Using AI changed that for me because it lowered the friction of getting started. But the biggest lesson was not that AI can build websites. It was that a simple website becomes manageable when you keep the stack small, make decisions in stages, and let AI help with the repetitive parts instead of the identity-defining parts.

If you are hesitating because you think you need to know everything first, you do not. You need a GitHub account, a repository, an `index.html` file, and enough curiosity to improve the site one step at a time. The rest can be learned while you build.[web:16][web:14][web:28]
