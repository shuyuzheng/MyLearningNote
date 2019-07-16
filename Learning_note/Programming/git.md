# Git can not track case changes in file names

date: 2019.05.29

Yesterday when I try to deploy a small web app to [Heroku](https://dashboard.heroku.com/apps) platform. It throws error `No web processes running` again and again. I kept playing with my `Procfile` [^1] for almost 1 hour. It seems I can never make Heroku happy to give me a `Dyno`.

Finally, I find this [Stack Overflow](https://stackoverflow.com/questions/52423143/python-heroku-app-has-0-web-dynos-despite-right-procfile-and-at-right-location) post. The reason is that I named `Procfile` with `ProcFile` in the first `git add`. Though I corrected that as soon as I realized. The `git` didn't notice this change of file name. It turns out that this file names `ProcFile` in the `git` storage, while it is called `Procfile` in my local directory. When I `push` it, its name is `ProcFile` which is not expected by Heroku. Therefore Heroku didn't give me corresponding web process.








[^1]: The file at app root directory which will tell Heroku your choice for web process.
