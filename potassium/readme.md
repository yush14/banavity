Project log for Potassium back-end

Note:
    This is just a log for people to debug when theirs is not working, a complete guide and explanation for Potassium will come in the future.

3/7/2022 Will Frankovich:
    Learned how to use DJango using LinkedInLearning, provided free from my university. Learned how interactions with the web call methods in DJango, and how to create apps, display webpages, and run the server. I was able to display front-end done by the front-end team, locally on my device. 

    Some Commands:
        django-admin startproject smartnotes . 
         - Starts the DJango project
         - pre-formats a lot of code

        python3 manage.py runserver  
         - Makes the server live, locally
         - hosted at local address

        django-admin startapp index
         - Makes a new app website to display content
         - Can make any number of these 

3/9/2022 Will Frankovich:
    Its important to use virtual environments so there is no dependency issues when you switch projects. 

    To create a virtual environment:
        pip3 install pipenv
         - package for managing different virtual environments

        pipenv install django~=<version #>
         - installs packages directly to virtual environment
         - installs in current directory
        
        pipenv shell
         - starts the env so that all commands can only use libraries installed in the virtual environment