This application requires NodeJS and npm. Please install by visiting https://nodejs.org/en/download/

-

After installation, step into the root directory and run "npm install" to set up the application.

(you may also run the command "npm install -g nodemon" which allows for easier testing)

-

Note that the original data files provided are too large to store on Github.
These files have been compressed into a zip file and are located in the data folder.
Please extract the compressed folder into the data folder in order to see the full data files when running the application.

-

To start the application (from within the root directory) run either of the following commands:

"node app" or "nodemon app" (if you installed it)

-

A list of files in the data directory will now be displayed on the command-line,

enter a valid filename and the application will start running on http://localhost:4155/

-

Note that a free Google API key is being used, so there is a watermark ("For development purposes only") on the map.

-

When pushing, please exclude the node_modules folder
