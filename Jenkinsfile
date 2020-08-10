pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run ng build'
            }
        }
        stage('deploy') {
            steps {
                sh 'mkdir -p /var/www/html/paz.ienza.tech/$GIT_BRANCH'
                sh 'cp -R ./dist/tmp/* /var/www/html/paz.ienza.tech/$GIT_BRANCH/'
            }
        }
    }
}

