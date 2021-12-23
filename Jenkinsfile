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
//         stage('test') {
//             steps {
//                 sh 'npm run ng test'
//             }
//         }
        stage('build') {
            steps {
                sh 'npm run ng build -- --prod --base-href=.'
            }
        }
        stage('deploy') {
            steps {
                sh '''
                  git pull --tags origin $GIT_BRANCH
                  version=$(git describe)
                  sed -i '' -e "s/<!--build_number-->/${version}/g" ./dist/pazienza-tech/index.html
                  mkdir -p /usr/local/homebrew/var/www/html/paz.ienza.tech/$GIT_BRANCH
                  cp -R ./dist/pazienza-tech/* /usr/local/homebrew/var/www/html/paz.ienza.tech/$GIT_BRANCH/
                '''
            }
        }
    }
}

