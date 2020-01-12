# flask-demo
This demonstration shows how to use Flask for Project 2 in Data Analytics &amp; Visualization. 


Please clone this to your desktop and do the following:

1. Navigate to the folder that contains app.py and launch a GitBash (Windows) or Terminal (Mac). 
2. type **source activate PythonWebMongo**
3. type **export FLASK_APP=app.py**
4. type **flask run**
5. You'll observe that the Flask server starts and tells you which port it's running on. Don't close this window.
6. With the Flask server running, go to this address in Chrome: http://127.0.0.1:5000/ You'll see that it loads a page that says "This is index.html." 
7. Click the link that says "Click here for the other page!" You'll note that it loads a new page. Be sure to view the html to see how you specify this other page. It's different from what you might think. 
8. If you navigate to this address, you'll see that it returns a json: http://127.0.0.1:5000/dictionary
9. You can peruse my files and my directory structure to see how this all comes together. Note that I haven't added any database code yet, but I've tried to add a bunch of helpful comments. 
10. Note that the .html files need to go in a folder called templates or else Flask can't find them (at least not unless we do a lot of work). 
