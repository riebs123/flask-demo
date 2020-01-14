# flask-demo
This demonstration shows how to integrate Flask with your html code for Project 2 in Data Analytics &amp; Visualization. 


Please clone this repository to your desktop and then do the following:

1. Navigate to the folder that contains ``app.py`` and launch a GitBash (Windows) or Terminal (Mac). 
2. type ``source activate PythonWebMongo``
3. type ``export FLASK_APP=app.py``
4. type ``flask run``
5. Observe that the Flask server starts and tells you which port it's running on. Don't close this window.
6. With the Flask server running, enter this address in your Chrome browser: http://127.0.0.1:5000/. You'll see that it loads a page that says "This is index.html." 
7. Click the link that says "Click here for the other page!" You'll notice that Chrome loads a new page. Be sure to view the link in the html to see how you specify this other page. It's different from what you might think!
8. If you navigate to the following address, you'll see that it returns a json: http://127.0.0.1:5000/dictionary. This is an example of an API endpoint you'd use to get the data into your JavaScript file for graphing and analysis. 

Additional notes: 
* You can peruse my files and my directory structure to see how this all comes together. Note that I haven't added any database code yet, but I've tried to add a bunch of helpful comments. 
* The .html files need to live in a folder called templates or else Flask can't find them (at least not unless we do a lot of additional work). 
* You're using a Flask server, not LiveServer. **LiveServer doesn't play a role in this project**, and won't work properly with the Flask server. (Yes, you can use LiveServer for quick changes to your html and your page layout. But it won't properly serve your data to you, because it doesn't know how.)
* There's a wrinkle when trying to ``jsonify()`` the results of a MongoDB query. I'll eventually try to provide an example here, but please ask for help in the meantime.  

