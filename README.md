# CreditMart-Final

The Credit Mart App is a financial application used to rate companies based on their financial statement.
This is a Django & React Full Stack Web Appliation.

## Requirements 

1. Python (For the django backend) 
2. Node js (For node package manager and configure react)
3. pipenv (To manage the development environment)

## Configuring pipenv (skip these steps if pipenv is already installed in your system)
## Follow these steps ONLY if pipenv is NOT configured to your device 

1. Run the following command to ensure you have pip installed in your system:
```bash
pip --version
```
You should expect to receive a system response indicating the pip version. 
If no pip is discovered, install it as described in the Installation Instructions. 
Alternatively, you can download and install Python from http://python.org.

2. Install pipenv by running the following command:
```bash
pip install --user pipenv
```

3. Add pipenv to your path 
This code is appliable only for windows
```bash
py -m site --user-site
```
A sample output can be:
C:\Users\jetbrains\AppData\Roaming\Python\Python37\site-packages

#### Copy the path, replace the site-packages with Scripts and add that path to your environment variables
```bash
setx PATH "%PATH%;C:\Users\jetbrains\AppData\Roaming\Python\Python37\Scripts"
```

## Setup Instructions for Project

Open command line in project root folder and follow the instructions
### Create virtual environment

```bash
pipenv install
```
### Move to the pip environment

```bash 
pipenv shell
```
Next run the django web server.
```bash
python manage.py runserver
```
### Install Node Modules

First cd into the ```ui``` folder.
```bash
cd ui
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
