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
        stage('test') {
            steps {
                sh 'npm run ng test'
            }
        }
        stage('build') {
            steps {
                sh 'npm run ng build -- --prod --base-href=.'
            }
        }
        stage('deploy') {
            steps {
                sh 'mkdir -p /var/www/html/paz.ienza.tech/$GIT_BRANCH'
                sh 'cp -R ./dist/pazienza-tech/* /var/www/html/paz.ienza.tech/$GIT_BRANCH/'
            }
        }
    }
}

