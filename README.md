# Podcasts

In this application there are 3 pages:

- #### Home
- #### Podcast
- #### Episode

## Application description:

Each page uses common layout, with header and container. In the header there is an application caption that is a link to the home page, and the loader spinner, which shows loading state.

The Redux Toolkit was chosen as the state manager

To get data from apple API I use RTK queries. Because of this, there is some optimization from under the hood. RTK queries can save data from request in the cache and if user get info from the same url and with the same props, first RTK see to the cache and if data isn't expired yet, give him this info. Thanks to this app works faster.

To make the development process easier, tools such as eslint, stylelint and prettier were added.

And also there is an opportunity to create stories and docs for app with StoryBook tool.

## Pages details:

![demo.gif](https://github.com/chagovcev/podcasts_apple/blob/develop/demo.gif)

### Home page 
In th Home page is showing all podcasts. In the top right corner there is a search bar. You can filter podcast's list by typing in this search field.

### Podcast page
Podcast page has main podcast information, like title, artist name, description and image. Also, this page has list of as max 20 episodes of current podcast. By clicking to some episode, you redirect to the Episode page.

### Episode page
Episode page has the same block with podcast main information, and description of selected episode. Besides, there is the audio player which player that allows you to listen to a podcast episode.


## Steps to run application:


- `git clone https://github.com/chagovcev/podcasts_apple.git .`
- `npm install`

Now project is installed.

First of all, ***rename .env.development file to .env***

Then you can run project with command:
- `npm run start`

Project build command:
- `npm run build`
- `npm run serve`

You can run StoryBook with command:
- `npm run storybook`

If you have any problems with Prettier, just run the command:
- `npm run format`