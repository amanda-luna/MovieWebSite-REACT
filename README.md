# MITTFlix React

This is a Movie WebSite project. I used an imported MovieAPI 

## Demo

View the [demonstration video](https://web.microsoftstream.com/video/4e29ef9a-e0fb-4d9f-aa29-6fefed732a7b) of this app.

### Main Page

Located at /, this page has the following functionality:

- movies are grouped by genre.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres that have movies are displayed.

### Search (Filter)

Located on all pages, search has the following functionality:

- The search will apply to the list of movies displayed on any of the pages the user is currently visiting.
- The search filters the results down based on the input provided
- The results are filtered based on the finding matching text either within the title or the overview
- Whenever the text content of the input changes, a new filter is performed. This is dependent upon keystrokes, not submit events.
- The amount of results found are displayed below the search field.

### My List

Located at /my-list, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres or any other specification

### Adding to My List

Located on all pages, Adding to My List has the following functionality:

- Users can hover over a movie and see a + sign. Clicking on this button will add a movie to their List.
- Once a movie is added to the user's list, it will show up under the My List section
- This update must be made in a way so that the information persists even if the browser is reloaded. This means you'll have to update the API.
- If a movie is added to the user's list, it must include a red check mark icon.
- Clicking on the check mark icon of a movie that is in the user's list will remove it from that list.
