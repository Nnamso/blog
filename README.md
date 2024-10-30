# Blog Application

This is a simple blog application built with Node.js, Express, and EJS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository or download the source code:

git clone `<repository-url>`

or download and extract the ZIP file.

2. Navigate to the project directory:

cd blog-app 

3. Install the required dependencies:

npm install

## Running the Application

1. Start the server:

node app.js

2. Open a web browser and go to:

http://localhost:3000

You should now see the blog application running.

## Usage

- The home page (`/`) displays all blog posts.
- To create a new post, click on "New Post" in the navigation or go to `/new`.
- To edit a post, click the "Edit" link next to a post.
- To delete a post, click the "Delete" link next to a post.

## File Structure

- `app.js`: The main application file
- `views/`: Directory containing EJS templates
- `layout.ejs`: The main layout template
- `index.ejs`: Home page template
- `new.ejs`: New post form template
- `edit.ejs`: Edit post form template

## Customization

- To change the styling, modify the Tailwind classes in the EJS files.
- To add new features, modify the `app.js` file and create new routes as needed.

## Troubleshooting

- If you encounter a "port already in use" error, change the port number in `app.js`.
- Ensure all dependencies are correctly installed by running `npm install` again.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).
  

