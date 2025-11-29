// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-short-resume",
              title: "Short resume",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/Schiavone-CV-Industry.pdf";
              },
            },{id: "dropdown-long-cv",
              title: "Long CV",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/Schiavone-CV-Industry-long.pdf";
              },
            },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-some-collaborators-and-i-have-solved-an-open-case-of-the-inverse-galois-problem-we-have-realized-the-transitive-group-17t7-as-a-galois-group-over-mathbb-q-here-s-the-polynomial-we-found-begin-align-x-17-amp-amp-2-x-16-12-x-15-28-x-14-60-x-13-160-x-12-200-x-11-500-x-10-705-x-9-886-x-8-amp-amp-2024-x-7-604-x-6-2146-x-5-80-x-4-1376-x-3-496-x-2-1013-x-490-end-align",
          title: 'Some collaborators and I have solved an open case of the Inverse Galois...',
          description: "",
          section: "News",},{id: "news-our-preprint-17t7-is-a-galois-group-over-the-rationals-is-now-on-arxiv-the-new-polynomial-has-also-been-added-to-the-lmfdb-and-the-klüners-malle-database",
          title: 'Our preprint 17T7 is a Galois group over the rationals is now on...',
          description: "",
          section: "News",},{id: "news-some-collaborators-and-i-have-discovered-explicit-equations-for-2-families-of-abelian-4-folds-of-mumford-type-explicit-examples-have-been-sought-after-for-many-years-see-this-blog-post-by-frank-calegari-for-more-details-stay-tuned-for-our-preprint",
          title: 'Some collaborators and I have discovered explicit equations for 2 families of abelian...',
          description: "",
          section: "News",},{id: "news-i-am-speaking-at-lucant-2025-in-providence-on-july-9th-i-will-talk-about-a-new-section-of-the-lmfdb-on-finite-groups-that-i-helped-develop-for-details-see-our-preprint-which-will-be-published-in-the-conference-proceedings-pitchayut-mark-saengrungkongka-an-mit-undergrad-is-also-speaking-at-lucant-i-mentored-mark-and-noah-walsh-last-summer-as-they-worked-on-a-research-project-on-gluing-curves-along-their-torsion-a-project-based-on-my-article-with-jeroen-hanselman-and-jeroen-sijsling-congrats-to-mark-and-noah-on-a-very-successful-project-you-can-find-their-preprint-here",
          title: 'I am speaking at LuCaNT 2025 in Providence on July 9th. I will...',
          description: "",
          section: "News",},{id: "news-our-preprint-mumford-type-shimura-curves-contained-in-the-torelli-locus-is-now-on-arxiv-we-present-two-shimura-curves-of-mumford-type-contained-in-the-torelli-locus-one-whose-universal-family-is-a-hyperelliptic-curve-and-the-other-non-hyperelliptic-both-of-genus-4-the-jacobians-of-these-curves-are-the-first-explicit-examples-of-abelian-varieties-of-the-type-described-by-mumford-in-his-article-a-note-of-shimura-s-paper-discontinuous-groups-and-abelian-varieties-you-can-find-related-code-in-our-github-repo-in-particular-the-file-shimura-models-m-contains-equations-for-the-universal-curves-of-genus-4-mentioned-above",
          title: 'Our preprint Mumford-type Shimura curves contained in the Torelli locus is now on...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D.%73%63%68%69%61%76%6F%6E%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SamSchiavone", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/samschiavone", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2307-4291", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'Arxiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/schiavone_s_1.html", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
