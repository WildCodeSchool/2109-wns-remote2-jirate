<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">JiraTé</h1>

</div>
<p align="center">
    <a href="#">View Demo</a>
</p>

<!-- ABOUT THE PROJECT -->

### Built With

For this project we had chosen these different languages/framework.

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)

<!-- GETTING STARTED -->

## Getting Started

### Installation

To set up the project please follow these steps:

1.  Clone the repo
    ```sh
    git clone https://github.com/WildCodeSchool/2109-wns-remote2-jirate.git
    ```
2.  Add permission for running the application
    ```sh
    chmod +x start.dev.sh
    ```

<!-- USAGE EXAMPLES -->

## Usage

Here are the different commands you need to know to run the project on your machine:

1.  Run the server script
    ```sh
    bin/start.dev.sh
    ```
    
2.  Command to linter the code with eslint/prettier
    ```sh
    yarn lint
    ```
    
## PREPARATION

- Make your dockerhub ready

- Install Caddy : https://caddyserver.com/docs/install#debian-ubuntu-raspbian
	- Check Caddy installation with : systemctl status caddy

- To configure Caddy : sudo nano /etc/caddy/Caddyfile

- Replace :80 with the domain name

- Reload caddy : systemctl reload caddy


YOUR PROJECT :

- In your project : 

- Client / Server

DOCKER/DOCKERHUB :

- You will need 2 images for Docker on DockerHub : 'xxx-deploy-client' 'xxx-deploy-server'

- Add 2 DockerHub secrets : DOCKER_HUB_CLIENT_IMAGE_NAME and    DOCKER_HUB_SERVER_IMAGE_NAME (quest 4 for inspiration)

- A new commit on 'staging' branch should build the images and push them on the DockerHub repo

- Deploy images on the server : 
	- Create docker-compose.prod.yml -> replace build's instructions by image with : 
		image : dockerhub-username/xxx-deploy-server &&
		image : dockerhub-username/xxx-deploy-client
	- Then test it : GATEWAY_PORT=8000 docker-compose -f docker-compose.prod.yml up

- Connect to your server (check if docker and dockercompose are installed)

STAGING :

- Create a staging folder : ~/xxx-deploy-staging
	- Copy docker-compose-prod.yml in the VPS -> nano docker-compose.prod.yml
	- Copy nginx.conf in your VPS aswell

- Launch app on a port (8001 here) with : GATEWAY_PORT=8001 docker-compose up -d
	-> So the app is available on the subdomain staging (staging.NAMEOFAPP.dev for example)
	- Reload Caddy to update with : systemctl reload caddy

SCRIPT :

- Create a script (/bin/sh -> fetch-and-deploy.sh) : sudo chmod +x fetch-and-deploy.sh to make it executable (access)
	docker-compose -f docker-compose.prod.yml down && \
    		docker-compose -f docker-compose.prod.yml pull && \
    		GATEWAY_PORT=8001 docker-compose -f docker-compose.prod.yml up -d;
and then : ./fetch-and-deploy.sh

GET NOTIFICATIONS : 
- Install webhook -> sudo apt install webhook

- Create the json config file (/etc/webhook.conf) with : 
	[
  		{
    			"id": "update",
    			"execute-command": "/home/wns_student/apps/staging/fetch-and-deploy.sh",
    			"command-working-directory": "/home/wns_student/apps/staging"
  		}
	]
 
- Configure webhook service : /lib/systemd/system/webhook.service 
[Service]
User=xxxxxx
ExecStart=/usr/bin/webhook -verbose -nopanic -hooks /etc/webhook.conf

- Relaunch services : systemcl start webhook + systemcl daemon-reload

- Test webhook : call your DNS, and check with docker ps.

DOCKER PS EVERYDAY !!!

