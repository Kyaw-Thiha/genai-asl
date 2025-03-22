# Dev Environment
## Python 
Ensure you have python installed. Otherwise, install it here at https://www.python.org/downloads/ .
```
python --version
```

If you have python installed, you should have pip installed too.
```
pip --version
```

## Virtual Environment
Virtual environments are used to store the required packages and libraries locally in the project's directory. This prevents version conflicts with globally installed packages.

- You only need to create the virtual environment the **FIRST TIME** you are running the project.
- However, you do need to activate the environment **EVERYTIME** you work on this project.

*Note that some code editor like JetBrains could automatically create virtual environments and activate them for you. If that is the case, you can skip the steps below.*

Before the running the following commands, ensure that you are in `backend` directory.

## Creating Virtual Environment
Ensure that you are in `backend` directory.
### On Windows
```
py -m venv .env
```

### On Mac/Linux
```
python -m venv .env
```
*Note that .env the folder name that we are using to store our virtual environment. You could name this differently like .vevn or venv if you want*

## Activating Virtual Environment
Ensure that you are in `backend` directory.
### On Windows
```
.env\Scripts\activate.bat
```

### On Mac/Linux
```
source .env/bin/activate
```
*Note replace .env with your virtual environment folder name if you named it differently*

## Using Virtual Environment in your Code Editor
After creating your virtual environment, if you are still seeing errors in your code editor, it means that your code editor is not linked to the virtual environment.
Note that normally, most code editors would automatically link to the virtual environment.

### VS Code
1. Press `Ctrl` + `Shift` + `P` on Windows or `Cmd` + `Shift` + `P` on Mac to open up the command.
2. Type in `Python: Select Interpreter`
3. Select the interpreter in the virtual environment you created earlier. It should be something like `,env/bin/python`

### PyCharm
https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html

### NeoVim
Just make sure you activate the virtual environment first. 
Then, running your nvim should automatically start it inside the virtual environment. 

# Setting up dependencies
Ensure that your virtual environment is activated and you are in `backend` directory.
If you are not sure if you are in the virtual environment, run `which python` in the terminal.

## Installing all packages first time
**requirements.txt** is a file containing all the currently used packages/libraries with their corresponding versions.
```python
pip install -r requirements.txt
```

## Install new package
```python
pip install [package_name]
```

After installing a new package, make sure to update the requirements.txt
```python
pip freeze > requirements.txt
```

# Commands
## Running the Server
Run the following the in the terminal inside **backend** directory.
```
fastapi dev app/main.py --port 8000
```

# Sample Code
https://github.com/fastapi/full-stack-fastapi-template/tree/master/backend
