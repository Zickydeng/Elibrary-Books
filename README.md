_Elibrary-tool Search the open library api/google api for books

## About
While building Elibrary, I wanted to write only one 'stateful' class component connected to a Redux store and as many additional 'dumb' components as needed for the React front end. I wanted to keep my code as organized as possible by breaking down components and extracting utility functions into a separate file. Howevevr, the down side of having just the single stateful component is that I ended up with a lot of conditional rendering using ternary operators for things that could also have been accomplished with React Router. More so, I ran into a few issues with Open Library API and inconsistent in data formatting, hence the use of google apis for  back-ups where open library felt short. Overall, I had a lot of fun building Elibrary and looking to improve it more in the near future, hope you enjoy walking through it.

### Wish-List Features

Due to time constraints, there were a few features that I was unable to implement in Elibrary. Further work will add more functionalities to this app and will include:

- [ ] Mkaing the filters buttons functional
- [ ] Add additional filters and book details
- [ ] Add a nice back ground image
- [ ] Make it more accessible, by even adding audio-texts
- [ ] Refactor to use React Router
- [ ] Add a "Search by Author" option
- [ ] Paginate search results
- [ ] Write tests, especially for Express routes

#### some of Technicals 
I spend two days working on  this assignment, as mention above those are features I will love to add on this app.
The latest react styling feature are onscroll and onfocus; used in the search-box. I could have used it extensively however, I didn't have enough time to do so.
API performances can be tracked using datadog platform. I have not had an opportunity to track an api performance issues in a production environment however, this is something I would love to do in order to improve the general app performance.
There is need to harmonice the fetch data,I came accross lot of inconsistencies in terms of isbn,covers etc.


## Built With

Elibrary was built using HTML, CSS, React, Redux, Node, emotion-ui, the Open Library and google APIs.
