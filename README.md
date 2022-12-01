This application requires NodeJS and npm. Please install by visiting https://nodejs.org/en/download/

-

After installation, step into the root directory and run "npm install" to set up the application.

(you may also run the command "npm install -g nodemon" which allows for easier testing)

-

To start the application (from within the root directory) run either of the following commands:

"node app" or "nodemon app" (if you installed it)

-

A list of files in the data directory will now be displayed on the command-line,

enter a valid filename and the application will start running on http://localhost:4155/

Note that the original data file exceeds the maximum filesize handled by github. As a solution, we have compressed it and pushed it to the data folder. To process it, please locally extract the file and move it to the data folder.

-

Note that a free Google API key is being used, so there is a watermark ("For development purposes only") on the map.

-

When pushing, please exclude the node_modules folder
